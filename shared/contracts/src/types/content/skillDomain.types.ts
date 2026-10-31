import type { Collection } from '../misc.types';
import type { SkillDescription_Config, SkillData } from './skill.types';
import type { LanguageCode } from '../languages';
import type { SkillGroupData } from './skillGroup.types';

export interface SkillDomain_Config {
  /** Stable editorial slug, matching the entity's data filename. */
  slug: string;
  id: SkillData['id'];
  name: Readonly<Record<LanguageCode, string>>;
  description?: SkillDescription_Config;
  /** Child Group entities, which may coexist with direct Skills. */
  groups: Readonly<Record<string, SkillGroupData>>;
  /** Child Skill entities that have no Group parent. */
  skills?: Readonly<Record<string, SkillData>>;
}

/** fileLocation is assigned by the source registry, not the authoring builder. */
export interface SkillDomain extends SkillDomain_Config {
  readonly collection: Extract<Collection, 'skillDomain'>;
  fileLocation: string;
}

/** Built Domain entity, before fileLocation is attached by the source registry. */
export type SkillDomainData = Omit<SkillDomain, 'fileLocation'>;
