import { DEFAULT_SUPPORTED_LANGUAGES } from '@svitlo/engine/localization';
import {
  assemblePublishedSkillNode, flattenSkillNodes, languagePattern,
  parsePublishedSkillCopy, parsePublishedSkillMeta, slugPattern,
  type SkillNode, type SkillNodeKind,
} from './skillsMindMap.utils';

/**
 * Textbook-agnostic transport adapter. A future UI Kit Skills view receives
 * its textbook's Domain slugs as input; it never imports authoring data.
 * No index.json, automatic directory listing, or implicit English fallback.
 */
export function resolveSkillLanguage(value: string): string {
  const item = DEFAULT_SUPPORTED_LANGUAGES.find(
    entry => entry.locale === value || entry.language === value,
  );
  if (!item) throw new Error('Непідтримувана мова Skills: ' + value);
  return item.language;
}

async function fetchJson(url: string, signal: AbortSignal): Promise<unknown> {
  const response = await fetch(url, { signal });
  if (!response.ok) throw new Error('Не вдалося завантажити ' + url + ' (' + response.status + ')');
  return response.json() as Promise<unknown>;
}

async function loadNode(
  pathSegments: readonly string[], kind: SkillNodeKind, language: string, signal: AbortSignal,
): Promise<SkillNode> {
  if (!pathSegments.length || pathSegments.some(slug => !slugPattern.test(slug))) {
    throw new Error('Некоректний шлях Skill');
  }
  const base = '/data/skills/' + pathSegments.map(encodeURIComponent).join('/');
  const [rawMeta, rawCopy] = await Promise.all([
    fetchJson(base + '/meta.json', signal),
    fetchJson(base + '/' + encodeURIComponent(language) + '.json', signal),
  ]);
  const meta = parsePublishedSkillMeta(rawMeta, kind);
  const copy = parsePublishedSkillCopy(rawCopy, kind);
  const descendants = [
    ...(meta.groups ?? []).map(slug => ({ slug, kind: 'skillGroup' as const })),
    ...(meta.skills ?? []).map(slug => ({ slug, kind: 'skill' as const })),
  ];
  const children = await Promise.all(descendants.map(child =>
    loadNode([...pathSegments, child.slug], child.kind, language, signal)));
  return assemblePublishedSkillNode(meta, copy, pathSegments[pathSegments.length - 1], children);
}

/** Fetch one locale for each node and one cacheable metadata file per entity. */
export async function loadPublishedSkills(
  domainSlugs: readonly string[], language: string, signal: AbortSignal,
): Promise<SkillNode[]> {
  if (!domainSlugs.length || domainSlugs.some(slug => !slugPattern.test(slug)) ||
      new Set(domainSlugs).size !== domainSlugs.length) {
    throw new Error('Некоректний список доменів Skills');
  }
  if (!languagePattern.test(language) || resolveSkillLanguage(language) !== language) {
    throw new Error('Непідтримувана мова Skills: ' + language);
  }
  const domains = await Promise.all(domainSlugs.map(slug =>
    loadNode([slug], 'skillDomain', language, signal)));
  flattenSkillNodes(domains); // validates global UUID uniqueness
  return domains;
}
