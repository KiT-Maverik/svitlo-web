import type { Skill_Config } from '../../../types/content/skill.types';
import { buildSkillConfig } from './buildSkillConfig.utils';

const names = {} as Skill_Config['name'];

const valid = buildSkillConfig({ id: 'math.multiply.by-2', name: names });
const literalId: 'math.multiply.by-2' = valid.id;
void literalId;

// @ts-expect-error A partial name dictionary must not satisfy the required locales.
buildSkillConfig({ id: 'math.multiply.by-2', name: { 'uk-UA': 'Множення на 2' } });

// @ts-expect-error A skill must have a stable identifier.
buildSkillConfig({ name: names });

// @ts-expect-error A skill must have a localized name dictionary.
buildSkillConfig({ id: 'math.multiply.by-2' });
