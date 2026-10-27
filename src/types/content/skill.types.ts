import type { Locale } from '../languages';

/** RFC 4122-style UUID literal; validated at runtime by config builders. */
export type SkillId = `${string}-${string}-${string}-${string}-${string}`;


/**
 * A content-authoring skill descriptor.
 * Relationships to lessons, questions and curricula are declared externally.
 */
export interface Skill_Config {
  /** Stable UUID, assigned once in a separate *.ids.ts file. */
  id: SkillId;
  /** One non-empty name for every supported locale. */
  name: Readonly<Record<Locale, string>>;
}

/**
 * A registered skill, enriched with its source file's repository-relative path.
 * The fileLocation comes from a generated source index, not from handwritten skill config.
 */
export interface Skill extends Skill_Config {
  fileLocation: string;
}
