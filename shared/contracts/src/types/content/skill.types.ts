import type { Collection } from '../misc.types';
import type { LanguageCode } from '../languages';

/** RFC 4122-style UUID literal; validated at runtime by config builders. */
export type SkillId = `${string}-${string}-${string}-${string}-${string}`;

/**
 * A content-authoring skill descriptor.
 * Relationships to lessons, questions and curricula are declared externally.
 */
/**
 * Meaning of a Skill, Group or Domain.
 * methodological: canonical English text for the Methodologist and authoring agents.
 * FE: optional frontend text, complete for every supported language when present.
 */
export interface SkillDescription_Config {
  methodological: string;
  FE?: Readonly<Record<LanguageCode, string>>;
}

export interface Skill_Config {
  /** Stable UUID, assigned once in a separate *.ids.ts file. */
  id: SkillId;
  /** One non-empty name for every supported language. */
  name: Readonly<Record<LanguageCode, string>>;
  /** Required for code-authoritative entries; optional during legacy migration. */
  description?: SkillDescription_Config;
}

/**
 * A registered skill, enriched with its source file's repository-relative path.
 * The fileLocation comes from a generated source index, not from handwritten skill config.
 */
export interface Skill extends Skill_Config {
  readonly collection: Extract<Collection, 'skill'>;
  fileLocation: string;
}
