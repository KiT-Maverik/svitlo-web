import type { Collection } from '../misc.types';
import type { SkillDescription_Config, SkillData } from './skill.types';
import type { LanguageCode } from '../languages';

export interface SkillGroup_Config {
  /** Stable editorial slug, matching the entity's data filename. */
  slug: string;
  id: SkillData['id'];
  name: Readonly<Record<LanguageCode, string>>;
  description?: SkillDescription_Config;
  /** Direct child Skill entities, not UUID references. */
  skills: Readonly<Record<string, SkillData>>;
}

/** fileLocation is assigned by the source registry, not the authoring builder. */
export interface SkillGroup extends SkillGroup_Config {
  readonly collection: Extract<Collection, 'skillGroup'>;
  fileLocation: string;
}

/** Built Group entity, before fileLocation is attached by the source registry. */
export type SkillGroupData = Omit<SkillGroup, 'fileLocation'>;
