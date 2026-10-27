export function validateSkillReferences(
  entity: 'SkillGroup' | 'SkillDomain',
  field: 'skillIds' | 'groupIds',
  ids: readonly string[],
): void {
  if (!Array.isArray(ids) || ids.length === 0) {
    throw new Error(`${entity} ${field} must be a non-empty array`);
  }
  const seen = new Set<string>();
  for (const id of ids) {
    if (typeof id !== 'string' || id.trim() === '') {
      throw new Error(`${entity} ${field} must contain non-empty string IDs`);
    }
    if (seen.has(id)) {
      throw new Error(`${entity} ${field} contains duplicate id: ${id}`);
    }
    seen.add(id);
  }
}
