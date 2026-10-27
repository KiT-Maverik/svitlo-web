import type { SkillGroup_Config } from '../../../types/content/skillGroup.types';
import { buildSkillGroupConfig } from './buildSkillGroupConfig.utils';
import { buildSkillDomainConfig } from './buildSkillDomainConfig.utils';

declare const names: SkillGroup_Config['name'];
const group = buildSkillGroupConfig({ id: 'group', name: names, skillIds: ['skill'] as const });
const groupId: 'group' = group.id;
void groupId;
const domain = buildSkillDomainConfig({ id: 'domain', name: names, groupIds: ['group'] as const });
const domainId: 'domain' = domain.id;
void domainId;
// @ts-expect-error Missing localized name.
buildSkillGroupConfig({ id: 'x', skillIds: ['x'] });
// @ts-expect-error Missing group IDs.
buildSkillDomainConfig({ id: 'x', name: names });
// @ts-expect-error Expected a collection of skill IDs.
buildSkillGroupConfig({ id: 'x', name: names, skillIds: 'x' });
