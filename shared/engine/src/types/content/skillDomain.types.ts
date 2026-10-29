import type { Collection } from '../misc.types';
import type { LanguageCode } from '../languages';
import type { SkillGroup } from './skillGroup.types';

export interface SkillDomain_Config {
  id: SkillGroup['id'];
  name: Readonly<Record<LanguageCode, string>>;
  groupIds: Readonly<Record<string, SkillGroup['id']>>;
}

/** fileLocation is added by a build-time source registry. */
export interface SkillDomain extends SkillDomain_Config {
  readonly collection: Extract<Collection, 'skillDomain'>;
  fileLocation: string;
}
