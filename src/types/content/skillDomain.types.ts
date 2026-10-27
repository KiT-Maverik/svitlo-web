import type { Locale } from '../languages';
import type { SkillGroup } from './skillGroup.types';

export interface SkillDomain_Config {
  id: string;
  name: Readonly<Record<Locale, string>>;
  groupIds: readonly SkillGroup['id'][];
}

/** fileLocation is added by a build-time source registry. */
export interface SkillDomain extends SkillDomain_Config {
  fileLocation: string;
}
