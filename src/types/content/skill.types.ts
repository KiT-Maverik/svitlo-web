import type { Locale } from '../languages';

/**
 * A content-authoring skill descriptor.
 * Relationships to lessons, questions and curricula are declared externally.
 */
export interface Skill_Config {
  /** Stable semantic identifier; uniqueness is checked by the eventual registry. */
  id: string;
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
