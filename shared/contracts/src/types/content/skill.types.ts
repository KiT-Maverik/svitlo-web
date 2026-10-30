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
 * fe: complete frontend text for every supported language when provided. 
 * Authored Skills require it; Groups and Domains may still be migrating.
 */
export interface SkillDescription_Config {
  methodological: string;
  fe?: Readonly<Record<LanguageCode, string>>;
}

export interface Skill_Config {
  /** Stable UUID, assigned once in a separate *.ids.ts file. */
  id: SkillId;
  /** Stable English source identifier; optional only for legacy configs not yet migrated. */
  slug?: string;
  /** One non-empty name for every supported language. */
  name: Readonly<Record<LanguageCode, string>>;
  /** Canonical methodological text and complete frontend text are required for every Skill. */
  description: Required<SkillDescription_Config>;
}

/**
 * A registered skill, enriched with its source file's repository-relative path.
 * The fileLocation comes from a generated source index, not from handwritten skill config.
 */
export interface Skill extends Skill_Config {
  readonly collection: Extract<Collection, 'skill'>;
  fileLocation: string;
}
