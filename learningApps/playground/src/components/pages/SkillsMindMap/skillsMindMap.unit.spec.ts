import { describe, expect, it } from 'vitest';
import {
  expandableSkillIds,
  fitMindMapZoom,
  fitVisibleSkillNodes,
  flattenSkillNodes,
  layoutSkillMindMap,
  mockSkillMastery,
  skillLearningHref,
  parseSkillsDomain,
  parseSkillsManifest,
} from './skillsMindMap.utils';
import type { SkillNode } from './skillsMindMap.utils';

const uuid = (n: number) => '00000000-0000-4000-8000-' + String(n).padStart(12, '0');
const skill = (n: number, slug: string) => ({
  id: uuid(n), slug, collection: 'skill', name: slug, description: 'About ' + slug,
});
const fixture = {
  id: uuid(1), slug: 'testColors', collection: 'skillDomain', name: 'Colors', language: 'en',
  groups: [
    {
      id: uuid(2), slug: 'warm', collection: 'skillGroup', name: 'Warm',
      skills: [skill(3, 'red'), skill(4, 'orange')],
    },
    {
      id: uuid(5), slug: 'cool', collection: 'skillGroup', name: 'Cool',
      skills: [skill(6, 'blue'), skill(7, 'green')],
    },
  ],
};

const sample = (): SkillNode => parseSkillsDomain(fixture, 'en', 'testColors');

describe('Skills mind map publishing contract', () => {
  it('reads the catalog manifest and keeps languages separate from domain data', () => {
    expect(parseSkillsManifest({ version: 1, languages: ['en', 'uk'], domains: ['testColors'] }))
      .toEqual({ version: 1, languages: ['en', 'uk'], domains: ['testColors'] });
    expect(() => parseSkillsManifest({ version: 2, languages: ['en'], domains: ['testColors'] }))
      .toThrow(/версія/);
    expect(() => parseSkillsManifest({ version: 1, languages: ['en', 'en'], domains: ['testColors'] }))
      .toThrow(/повторювані/);
  });

  it('parses a Domain → Group → Skill tree from one localized JSON resource', () => {
    const domain = sample();
    expect(domain.children).toHaveLength(2);
    expect(domain.children[0].children).toHaveLength(2);
    expect(flattenSkillNodes([domain])).toHaveLength(7);
    expect(expandableSkillIds([domain])).toEqual([uuid(1), uuid(2), uuid(5)]);
  });

  it('does not fall back on unsupported languages, missing translations or malformed content', () => {
    expect(() => parseSkillsDomain(fixture, 'uk', 'testColors')).toThrow(/мова/);
    expect(() => parseSkillsDomain(fixture, 'en', 'wrongDomain')).toThrow(/адреса/);
    const malformed = { ...fixture, groups: [{ ...fixture.groups[0], skills: [{ ...skill(3, 'red'), name: { uk: 'Червоний' } }] }] };
    expect(() => parseSkillsDomain(malformed, 'en', 'testColors')).toThrow(/Некоректне поле/);
  });

  it('supports Groups and direct Skills coexisting in one Domain', () => {
    const mixed = {
      ...fixture,
      skills: [skill(8, 'violet')],
    };
    const parsed = parseSkillsDomain(mixed, 'en', 'testColors');
    expect(parsed.children.map(node => node.kind))
      .toEqual(['skillGroup', 'skillGroup', 'skill']);
    expect(parsed.children.at(-1)?.slug).toBe('violet');
    expect(flattenSkillNodes([parsed])).toHaveLength(8);
  });

  it('rejects obsolete IDs, missing slugs and missing frontend Skill descriptions', () => {
    expect(() => parseSkillsDomain({ ...fixture, groupIds: { old: uuid(2) } }, 'en', 'testColors'))
      .toThrow(/ID-посилання/);
    expect(() => parseSkillsDomain({ ...fixture, groups: [{ ...fixture.groups[0], skillIds: {} }] }, 'en', 'testColors'))
      .toThrow(/ID-посилання/);
    expect(() => parseSkillsDomain({
      ...fixture, groups: [{ ...fixture.groups[0], skills: [{ ...skill(3, 'red'), slug: undefined }] }],
    }, 'en', 'testColors')).toThrow(/slug/);
    expect(() => parseSkillsDomain({
      ...fixture, groups: [{ ...fixture.groups[0], skills: [{ ...skill(3, 'red'), description: undefined }] }],
    }, 'en', 'testColors')).toThrow(/фронтенд-опису/);
  });

  it('supports direct Skills without groups', () => {
    const direct = {
      id: uuid(10), slug: 'simple', collection: 'skillDomain', name: 'Simple', language: 'en',
      groupIds: undefined, skills: [skill(11, 'red')],
    };
    const node = parseSkillsDomain(direct, 'en', 'simple');
    expect(node.children.map(item => item.kind)).toEqual(['skill']);
  });
});

describe('Radial Skills layout', () => {
  it('places every visible node and a connector on concentric rings', () => {
    const layout = layoutSkillMindMap([sample()], new Set());
    expect(layout.nodes).toHaveLength(7);
    expect(layout.edges).toHaveLength(7);
    expect(layout.nodes.every(node => Number.isFinite(node.x) && Number.isFinite(node.y))).toBe(true);
    const radii = layout.nodes.map(node => Math.hypot(node.x, node.y));
    expect(radii[0]).toBeLessThan(radii[1]);
    expect(radii[1]).toBeLessThan(radii[2]);
    expect(layout.worldSize).toBeGreaterThan(0);
    expect(fitMindMapZoom(layout, 1100, 660)).toBeGreaterThan(0);
  });

  it('hides descendants of one collapsed Group without hiding siblings', () => {
    const domain = sample();
    const layout = layoutSkillMindMap([domain], new Set([uuid(2)]));
    expect(layout.nodes.map(node => node.slug)).toEqual(['testColors', 'warm', 'cool', 'blue', 'green']);
    expect(layout.nodes.find(node => node.slug === 'warm')?.expanded).toBe(false);
    expect(layout.nodes.find(node => node.slug === 'cool')?.expanded).toBe(true);
  });

  it('preserves Domain nodes when the entire tree is collapsed', () => {
    const domain = sample();
    const layout = layoutSkillMindMap([domain], new Set(expandableSkillIds([domain])));
    expect(layout.nodes).toHaveLength(1);
    expect(layout.nodes[0].kind).toBe('skillDomain');
  });

  it('rejects duplicate entity IDs rather than merging unrelated nodes', () => {
    expect(() => flattenSkillNodes([sample(), sample()])).toThrow(/UUID/);
  });
});

describe('Preview Skill mastery and learning CTA', () => {
  it('returns a stable integer from 0 to 100 for each UUID, independent of language', () => {
    const ids = Array.from({ length: 14 }, (_, index) => uuid(index + 1));
    const values = ids.map(mockSkillMastery);
    expect(values.every(score => Number.isInteger(score) && score >= 0 && score <= 100)).toBe(true);
    expect(new Set(values).size).toBeGreaterThan(5);
    expect(ids.map(mockSkillMastery)).toEqual(values);
    expect(mockSkillMastery(uuid(3))).toBe(mockSkillMastery(uuid(3)));
    expect(() => mockSkillMastery('not-a-uuid')).toThrow(/UUID/);
  });

  it('builds a language-specific destination for a stable Skill ID', () => {
    expect(skillLearningHref(uuid(3), 'uk'))
      .toBe('/skills/' + uuid(3) + '/learn?lang=uk');
    expect(skillLearningHref(uuid(3), 'en'))
      .toBe('/skills/' + uuid(3) + '/learn?lang=en');
    expect(() => skillLearningHref(uuid(3), '../en')).toThrow(/мова/);
  });
});

describe('Fit visible Skills in the viewport', () => {
  it('fits the whole map including card dimensions and respects expanded Skill height', () => {
    const graph = layoutSkillMindMap([sample()], new Set());
    const viewport = { width: 900, height: 540 };
    const compact = fitVisibleSkillNodes(graph, new Set(), viewport.width, viewport.height);
    const expanded = fitVisibleSkillNodes(graph, new Set([uuid(3), uuid(4), uuid(6), uuid(7)]),
      viewport.width, viewport.height);
    expect(expanded.zoom).toBeLessThanOrEqual(compact.zoom);
    for (const state of [compact, expanded]) {
      expect(state.zoom).toBeGreaterThan(0);
      expect(state.zoom).toBeLessThanOrEqual(2.5);
      expect(Number.isFinite(state.pan.x)).toBe(true);
      expect(Number.isFinite(state.pan.y)).toBe(true);
    }
    for (const node of graph.nodes) {
      const halfWidth = node.kind === 'skill' ? 139 : node.kind === 'skillGroup' ? 99 : 107;
      const halfHeight = node.kind === 'skill' ? 167 : node.kind === 'skillGroup' ? 54 : 57;
      const px = expanded.pan.x + node.x * expanded.zoom + viewport.width / 2;
      const py = expanded.pan.y + node.y * expanded.zoom + viewport.height / 2;
      expect(px - halfWidth * expanded.zoom).toBeGreaterThanOrEqual(0);
      expect(px + halfWidth * expanded.zoom).toBeLessThanOrEqual(viewport.width);
      expect(py - halfHeight * expanded.zoom).toBeGreaterThanOrEqual(0);
      expect(py + halfHeight * expanded.zoom).toBeLessThanOrEqual(viewport.height);
    }
  });

  it('fits the avatar when all descendants are hidden and handles unavailable sizes', () => {
    const rootOnly = layoutSkillMindMap([], new Set());
    const result = fitVisibleSkillNodes(rootOnly, new Set(), 900, 700);
    expect(result.pan).toEqual({ x: 0, y: 0 });
    expect(result.zoom).toBe(2.5);
    expect(fitVisibleSkillNodes(rootOnly, new Set(), 0, 0))
      .toEqual({ zoom: 0.65, pan: { x: 0, y: 0 } });
  });
});
