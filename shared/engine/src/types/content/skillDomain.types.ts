import type { Collection } from '../misc.types';
import type { LanguageCode } from '../languages';
import type { SkillGroup } from './skillGroup.types';
import type { Skill } from './skill.types';

export interface SkillDomain_Config {
  id: SkillGroup['id'];
  name: Readonly<Record<LanguageCode, string>>;
  /** Existing group membership. Use {} for a Domain with only directly attached Skills. */
  groupIds: Readonly<Record<string, SkillGroup['id']>>;
  /**
   * Optional direct membership for small cohesive Domains that do not warrant a SkillGroup.
   * Authoring invariant: nonempty direct Skills must not be mixed with nonempty groups.
   * Editors should prefer Groups when multiple meaningful subdomains exist.
   * Note: this is a type-level contract; downstream loaders/UI still require an integration audit.
   */
  skillIds?: Readonly<Record<string, Skill['id']>>;
}

/** fileLocation is added by a build-time source registry. */
export interface SkillDomain extends SkillDomain_Config {
  readonly collection: Extract<Collection, 'skillDomain'>;
  fileLocation: string;
}
