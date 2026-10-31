'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { PointerEvent as ReactPointerEvent } from 'react';
import { Alert, Box, Button, Chip, CircularProgress, Stack, Typography } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import CenterFocusStrongRoundedIcon from '@mui/icons-material/CenterFocusStrongRounded';
import CloseFullscreenRoundedIcon from '@mui/icons-material/CloseFullscreenRounded';
import OpenInFullRoundedIcon from '@mui/icons-material/OpenInFullRounded';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import ZoomInRoundedIcon from '@mui/icons-material/ZoomInRounded';
import ZoomOutRoundedIcon from '@mui/icons-material/ZoomOutRounded';
import {
  expandableSkillIds, fitMindMapZoom, flattenSkillNodes, layoutSkillMindMap,
  parseSkillsDomain, parseSkillsManifest,
} from './skillsMindMap.utils';
import type { SkillNode, SkillsManifest, MapEdge } from './skillsMindMap.utils';
import styles from './SkillsMindMap.module.css';
import { SkillAction, SkillLeafCard, SkillMastery } from './SkillLeafCard';
import { useSkillsPageSettings } from './SkillsPageSettingsContext';

type LoadingStatus = 'loading' | 'ready' | 'error';
const KIND_LABELS = { skillDomain: 'Домен', skillGroup: 'Група', skill: 'Скіл' } as const;

function readableLanguage(code: string): string {
  try {
    return new Intl.DisplayNames([code], { type: 'language' }).of(code) ?? code;
  } catch {
    return code;
  }
}
async function readJson(url: string, signal: AbortSignal): Promise<unknown> {
  const response = await fetch(url, { signal });
  if (!response.ok) throw new Error('Не вдалося завантажити ' + url + ' (' + response.status + ')');
  return response.json() as Promise<unknown>;
}
function pathForDomain(slug: string, language: string): string {
  return '/Data/Skills/' + encodeURIComponent(slug) + '/' + encodeURIComponent(language) + '.json';
}
function edgePath(edge: MapEdge, midpoint: number): string {
  const x1 = midpoint + edge.x1, y1 = midpoint + edge.y1;
  const x2 = midpoint + edge.x2, y2 = midpoint + edge.y2;
  const cx1 = x1 + (x2 - x1) * 0.48, cy1 = y1 + (y2 - y1) * 0.48;
  const cx2 = x2 - (x2 - x1) * 0.24, cy2 = y2 - (y2 - y1) * 0.24;
  return 'M ' + x1 + ' ' + y1 + ' C ' + cx1 + ' ' + cy1 + ', ' + cx2 + ' ' + cy2 + ', ' + x2 + ' ' + y2;
}

interface OutlineProps {
  nodes: readonly SkillNode[];
  collapsed: ReadonlySet<string>;
  selectedId: string | null;
  language: string;
  expandedSkills: ReadonlySet<string>;
  onNodeClick: (node: SkillNode) => void;
  onSkillToggle: (node: SkillNode) => void;
}
function SkillOutline({ nodes, collapsed, selectedId, language, expandedSkills, onNodeClick, onSkillToggle }: OutlineProps) {
  const { settings } = useSkillsPageSettings();
  return (
    <ul className={styles.outlineList}>
      {nodes.map(node => {
        const hasChildren = node.children.length > 0;
        const expanded = hasChildren && !collapsed.has(node.id);
        const skillExpanded = node.kind === 'skill' && expandedSkills.has(node.id);
        return (
          <li key={node.id}>
            <button type="button"
              className={styles.outlineButton + (selectedId === node.id ? ' ' + styles.outlineSelected : '')}
              onClick={() => {
                onNodeClick(node);
                if (node.kind === 'skill') onSkillToggle(node);
              }}
              aria-expanded={node.kind === 'skill' ? skillExpanded : hasChildren ? expanded : undefined}
              aria-label={KIND_LABELS[node.kind] + ': ' + node.name +
                (node.kind === 'skill'
                  ? skillExpanded ? '. Згорнути картку' : '. Розгорнути картку'
                  : hasChildren ? expanded ? '. Згорнути гілку' : '. Розгорнути гілку' : '')}>
              <span className={styles.outlineGlyph} aria-hidden="true">
                {hasChildren ? (expanded ? '−' : '+') : '•'}
              </span>
              <span lang={language} dir={language === 'ar' || language === 'ur' || language === 'he' ? 'rtl' : 'ltr'}>{node.name}</span>
              {hasChildren && <span className={styles.outlineCount}>{node.children.length}</span>}
            </button>
            {node.kind === 'skill' && (
              <div className={styles.outlineSkillDetails} data-expanded={skillExpanded ? 'true' : 'false'}>
                {skillExpanded && node.description && <p lang={language}
                  dir={language === 'ar' || language === 'ur' || language === 'he' ? 'rtl' : 'ltr'}>
                  {node.description}
                </p>}
                {settings.showMastery && <SkillMastery skillId={node.id} compact={!skillExpanded} colored={settings.colorMastery} />}
                {settings.showPump && skillExpanded && <SkillAction skillId={node.id} language={language} compact />}
              </div>
            )}
            {expanded && <SkillOutline nodes={node.children} collapsed={collapsed}
              selectedId={selectedId} language={language}
              expandedSkills={expandedSkills} onNodeClick={onNodeClick} onSkillToggle={onSkillToggle} />}
          </li>
        );
      })}
    </ul>
  );
}

export function SkillsMindMap() {
  const { locale, setLanguageCode } = useSkillsPageSettings();
  const [manifest, setManifest] = useState<SkillsManifest | null>(null);
  const [language, setLanguage] = useState<string | null>(null);
  const [domains, setDomains] = useState<SkillNode[]>([]);
  const [status, setStatus] = useState<LoadingStatus>('loading');
  const [error, setError] = useState('');
  const [collapsed, setCollapsed] = useState<Set<string>>(() => new Set());
  // Card detail is independent from whether a Domain/Group branch is visible.
  const [expandedSkills, setExpandedSkills] = useState<Set<string>>(() => new Set());
  const [rootCollapsed, setRootCollapsed] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [listView, setListView] = useState(false);
  const [zoom, setZoom] = useState(0.65);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [viewport, setViewport] = useState({ width: 960, height: 640 });
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<{ pointerId: number; x: number; y: number } | null>(null);
  const firstLoad = useRef(true);

  useEffect(() => {
    const controller = new AbortController();
    void (async () => {
      try {
        const data = parseSkillsManifest(await readJson('/Data/Skills/index.json', controller.signal));
        if (controller.signal.aborted) return;
        setManifest(data);
      } catch (cause) {
        if (!controller.signal.aborted) {
          setStatus('error');
          setError(cause instanceof Error ? cause.message : 'Не вдалося прочитати каталог Skills.');
        }
      }
    })();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!manifest) return;
    const code = locale.split('-')[0];
    if (!manifest.languages.includes(code)) {
      setError('Мова "' + code + '" відсутня в опублікованому каталозі Skills.');
      setStatus('error');
      return;
    }
    setLanguage(code);
  }, [manifest, locale]);

  useEffect(() => {
    if (!manifest || !language) return;
    const controller = new AbortController();
    setStatus('loading');
    setError('');
    void (async () => {
      try {
        const loaded = await Promise.all(manifest.domains.map(async slug => {
          const json = await readJson(pathForDomain(slug, language), controller.signal);
          return parseSkillsDomain(json, language, slug);
        }));
        const all = flattenSkillNodes(loaded);
        if (controller.signal.aborted) return;
        setDomains(loaded);
        if (firstLoad.current) {
          // Fold groups in large catalogs; small Playground fixtures show all Skills.
          setCollapsed(new Set(all.length > 45
            ? all.filter(node => node.kind === 'skillGroup' && node.children.length > 0).map(node => node.id)
            : []));
          firstLoad.current = false;
        }
        setStatus('ready');
      } catch (cause) {
        if (!controller.signal.aborted) {
          setStatus('error');
          setError(cause instanceof Error ? cause.message : 'Не вдалося завантажити домени.');
        }
      }
    })();
    return () => controller.abort();
  }, [manifest, language]);

  useEffect(() => {
    const element = viewportRef.current;
    if (!element) return;
    const update = () => setViewport({ width: element.clientWidth, height: element.clientHeight });
    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, [status, listView]);

  // React delegates wheel as a passive listener; the native non-passive handler
  // prevents the page from scrolling while zooming inside the map.
  useEffect(() => {
    const element = viewportRef.current;
    if (!element || status !== 'ready' || listView) return;
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      setZoom(current => Math.max(0.18, Math.min(2.5, current * (event.deltaY < 0 ? 1.1 : 0.9))));
    };
    element.addEventListener('wheel', handleWheel, { passive: false });
    return () => element.removeEventListener('wheel', handleWheel);
  }, [status, listView]);

  const allNodes = useMemo(() => flattenSkillNodes(domains), [domains]);
  const selectable = useMemo(() => new Map(allNodes.map(node => [node.id, node])), [allNodes]);
  const selected = selectedId ? selectable.get(selectedId) : null;
  const layout = useMemo(() => layoutSkillMindMap(rootCollapsed ? [] : domains, collapsed), [domains, collapsed, rootCollapsed]);
  const expandableIds = useMemo(() => expandableSkillIds(domains), [domains]);

  useEffect(() => {
    if (status !== 'ready') return;
    setZoom(fitMindMapZoom(layout, viewport.width, viewport.height));
    setPan({ x: 0, y: 0 });
  }, [layout, viewport.width, viewport.height, status]);

  const onSkillToggle = (node: SkillNode) => {
    if (node.kind !== 'skill') return;
    setExpandedSkills(previous => {
      const next = new Set(previous);
      if (next.has(node.id)) next.delete(node.id);
      else next.add(node.id);
      return next;
    });
  };

  const onNodeClick = (node: SkillNode) => {
    setSelectedId(node.id);
    if (node.children.length) {
      setCollapsed(previous => {
        const next = new Set(previous);
        if (next.has(node.id)) next.delete(node.id);
        else next.add(node.id);
        return next;
      });
    }
  };
  const collapseAll = () => {
    setRootCollapsed(true);
    setCollapsed(new Set(expandableIds));
    setExpandedSkills(new Set());
  };
  const expandAll = () => {
    setRootCollapsed(false);
    setCollapsed(new Set());
    setExpandedSkills(new Set(allNodes.filter(node => node.kind === 'skill').map(node => node.id)));
  };
  const toggleFromProfile = () => {
    setRootCollapsed(value => !value);
    setSelectedId(null);
  };
  const resetView = () => {
    setPan({ x: 0, y: 0 });
    setZoom(fitMindMapZoom(layout, viewport.width, viewport.height));
  };
  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    if ((event.target as HTMLElement).closest('button, a, select, input')) return;
    dragRef.current = { pointerId: event.pointerId, x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragRef.current || dragRef.current.pointerId !== event.pointerId) return;
    const dx = event.clientX - dragRef.current.x, dy = event.clientY - dragRef.current.y;
    dragRef.current = { pointerId: event.pointerId, x: event.clientX, y: event.clientY };
    setPan(position => ({ x: position.x + dx, y: position.y + dy }));
  };
  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragRef.current?.pointerId === event.pointerId) dragRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  };
  const onLanguageChange = (next: string) => {
    if (!manifest?.languages.includes(next)) return;
    setLanguageCode(next);
  };

  const middle = layout.worldSize / 2;
  const totalDomains = domains.length;
  const totalGroups = allNodes.filter(node => node.kind === 'skillGroup').length;
  const totalSkills = allNodes.filter(node => node.kind === 'skill').length;
  const profileIsExpanded = !rootCollapsed && domains.length > 0;
  const textDirection = language === 'ar' || language === 'he' || language === 'ur' ? 'rtl' : 'ltr';

  return (
    <Box className={styles.root}>
      <header className={styles.header}>
        <Box>
          <Typography variant="overline" color="primary" sx={{ letterSpacing: '0.19em', fontWeight: 800 }}>
            SVITLO · PLAYGROUND
          </Typography>
          <Typography component="h1" variant="h3" fontWeight={800}>Skills</Typography>
          <Typography color="text.secondary">
            Натисніть на скіл, щоб розгорнути опис і кнопку «Прокачати». Домен і група згортають свої гілки.
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Значення володіння навичками — тестові, не результати оцінювання учня.
          </Typography>
        </Box>
        <Stack direction="row" flexWrap="wrap" gap={1}>
          <Chip label={totalDomains + ' домени'} variant="outlined" />
          <Chip label={totalGroups + ' групи'} variant="outlined" />
          <Chip label={totalSkills + ' скіли'} color="primary" variant="outlined" />
        </Stack>
      </header>
      <Box className={styles.controls}>
        <label className={styles.languageControl}>
          <span>Мова даних</span>
          <select aria-label="Мова даних Skills" value={language ?? ''}
            onChange={event => onLanguageChange(event.target.value)} disabled={!manifest}>
            {!manifest && <option value="">Завантаження…</option>}
            {manifest?.languages.map(code =>
              <option key={code} value={code}>{readableLanguage(code)} · {code}</option>)}
          </select>
        </label>
        <Stack direction="row" flexWrap="wrap" gap={1} alignItems="center">
          <Button size="small" variant="outlined" startIcon={<OpenInFullRoundedIcon />}
            onClick={expandAll} disabled={status !== 'ready'}>Розгорнути все</Button>
          <Button size="small" variant="outlined" startIcon={<CloseFullscreenRoundedIcon />}
            onClick={collapseAll} disabled={status !== 'ready'}>Згорнути все</Button>
          <Button size="small" variant={listView ? 'contained' : 'outlined'}
            startIcon={listView ? <AccountTreeRoundedIcon /> : <ViewListRoundedIcon />}
            onClick={() => setListView(value => !value)} disabled={status !== 'ready'}>
            {listView ? 'Мапа' : 'Список'}
          </Button>
        </Stack>
      </Box>
      {status === 'loading' && (
        <Box className={styles.state} role="status" aria-live="polite">
          <CircularProgress size={32} />
          <Typography>Завантажуємо локалізовану карту навичок…</Typography>
        </Box>
      )}
      {status === 'error' && (
        <Alert severity="error" role="alert" sx={{ my: 2 }}>
          {error}
          <Button size="small" onClick={() => window.location.reload()} sx={{ ml: 1 }}>Повторити</Button>
        </Alert>
      )}
      {status === 'ready' && (
        <>
          {listView ? (
            <section aria-label="Навички за доменами" className={styles.outlineView}>
              <button type="button" className={styles.outlineProfile} onClick={toggleFromProfile}
                aria-expanded={profileIsExpanded}>
                <AccountCircleRoundedIcon fontSize="large" /> Учень
                <span>{profileIsExpanded ? '−' : '+'}</span>
              </button>
              {!rootCollapsed && <SkillOutline nodes={domains} collapsed={collapsed}
                selectedId={selectedId} language={language!}
                expandedSkills={expandedSkills} onNodeClick={onNodeClick} onSkillToggle={onSkillToggle} />}
            </section>
          ) : (
            <section className={styles.mapFrame} aria-label="Радіальна мапа навичок">
              <div ref={viewportRef} className={styles.viewport}
                onPointerDown={onPointerDown} onPointerMove={onPointerMove}
                onPointerUp={onPointerUp} onPointerCancel={onPointerUp}
                data-testid="skills-map-viewport">
                <div className={styles.world} style={{
                  width: layout.worldSize, height: layout.worldSize,
                  transform: 'translate(-50%, -50%) translate(' + pan.x + 'px, ' + pan.y + 'px) scale(' + zoom + ')',
                }}>
                  <svg width={layout.worldSize} height={layout.worldSize}
                    viewBox={'0 0 ' + layout.worldSize + ' ' + layout.worldSize}
                    aria-hidden="true" className={styles.edges}>
                    <circle cx={middle} cy={middle} r="218" className={styles.centerHalo} />
                    {layout.edges.map(edge =>
                      <path key={edge.to} d={edgePath(edge, middle)}
                        className={styles.edge + ' ' +
                          (edge.depth === 1 ? styles.domainEdge : edge.depth === 2 ? styles.groupEdge : styles.skillEdge)} />)}
                  </svg>
                  <button type="button" className={styles.profile}
                    style={{ left: middle, top: middle }}
                    onClick={toggleFromProfile} aria-expanded={profileIsExpanded}
                    aria-label={'Учень. ' + (profileIsExpanded ? 'Згорнути всі гілки' : 'Розгорнути всі гілки')}
                    data-testid="skills-profile">
                    <AccountCircleRoundedIcon className={styles.profileIcon} />
                    <span className={styles.profileName}>Учень</span>
                    <span className={styles.profileSub}>Моя карта навичок</span>
                  </button>
                  {layout.nodes.map(node => {
                    const children = node.children.length;
                    if (node.kind === 'skill') {
                      return <SkillLeafCard key={node.id} node={node} language={language!}
                        selected={selectedId === node.id} expanded={expandedSkills.has(node.id)}
                        onSelect={onNodeClick} onToggle={onSkillToggle}
                        left={middle + node.x} top={middle + node.y} />;
                    }
                    return (
                      <button key={node.id} type="button"
                        className={styles.node + ' ' +
                          (node.kind === 'skillDomain' ? styles.domainNode :
                            node.kind === 'skillGroup' ? styles.groupNode : styles.skillNode) +
                          (node.id === selectedId ? ' ' + styles.selectedNode : '')}
                        style={{ left: middle + node.x, top: middle + node.y }}
                        onClick={() => onNodeClick(node)} title={node.name}
                        aria-expanded={children > 0 ? node.expanded : undefined}
                        aria-label={KIND_LABELS[node.kind] + ': ' + node.name +
                          (children ? node.expanded ? '. Згорнути' : '. Розгорнути' : '')}
                        data-testid={'skill-node-' + node.slug}>
                        <span className={styles.nodeKind}>{KIND_LABELS[node.kind]}</span>
                        <span className={styles.nodeName} lang={language ?? undefined} dir={textDirection}>{node.name}</span>
                        {children > 0 && <span className={styles.nodeCount}>
                          {children} {node.expanded ? '−' : '+'}
                        </span>}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className={styles.zoomControls} role="group" aria-label="Масштаб мапи">
                <button type="button" aria-label="Збільшити масштаб"
                  onClick={() => setZoom(value => Math.min(2.5, value * 1.2))}><ZoomInRoundedIcon /></button>
                <button type="button" aria-label="Зменшити масштаб"
                  onClick={() => setZoom(value => Math.max(0.18, value / 1.2))}><ZoomOutRoundedIcon /></button>
                <button type="button" aria-label="Показати всю мапу" onClick={resetView}>
                  <CenterFocusStrongRoundedIcon /></button>
              </div>
              <p className={styles.mapHint}>Перетягніть для переміщення · Колесо миші для масштабу</p>
            </section>
          )}
          <section className={styles.detail} aria-live="polite" aria-label="Інформація про вибраний вузол">
            {selected ? (
              <>
                <span className={styles.detailEyebrow}>{KIND_LABELS[selected.kind]}</span>
                <h2 lang={language ?? undefined} dir={textDirection}>{selected.name}</h2>
                {selected.description && <p lang={language ?? undefined} dir={textDirection}>{selected.description}</p>}
                <span className={styles.detailMeta}>
                  {selected.children.length ? 'Безпосередніх нащадків: ' + selected.children.length : 'Окрема навичка'}
                </span>
              </>
            ) : (
              <>
                <span className={styles.detailEyebrow}>ПРО КАРТУ</span>
                <h2>Оберіть вузол</h2>
                <p>Тут з’являться назва й опис вибраного домена, групи або скіла.</p>
              </>
            )}
          </section>
        </>
      )}
    </Box>
  );
}
