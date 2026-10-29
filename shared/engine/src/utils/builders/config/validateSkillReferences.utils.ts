import type { SkillId } from '@svitlo/contracts/taxonomy';

/** Verify UUID syntax while keeping generation outside application runtime. */
export function validateSkillUuid(value: unknown, field: string): asserts value is SkillId {
  if (
    typeof value !== 'string' ||
    !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value)
  ) {
    throw new Error(`${field} must be a UUID`);
  }
}

/** Named references to child IDs: never import the child's full data/config. */
export function validateSkillReferences(
  entity: 'SkillGroup' | 'SkillDomain',
  field: 'skillIds' | 'groupIds',
  refs: Readonly<Record<string, SkillId>>,
): void {
  if (!refs || typeof refs !== 'object' || Array.isArray(refs) || Object.keys(refs).length === 0) {
    throw new Error(`${entity} ${field} must be a non-empty object`);
  }
  const seen = new Set<string>();
  for (const [key, id] of Object.entries(refs)) {
    if (!key.trim()) {
      throw new Error(`${entity} ${field} must have non-empty keys`);
    }
    validateSkillUuid(id, `${entity} ${field}.${key}`);
    if (seen.has(id)) {
      throw new Error(`${entity} ${field} contains duplicate id: ${id}`);
    }
    seen.add(id);
  }
}
