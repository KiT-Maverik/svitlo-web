import type { SkillGroup_Config } from '../../../types/content/skillGroup.types';
import { buildSkillGroupConfig } from './buildSkillGroupConfig.utils';
import { buildSkillDomainConfig } from './buildSkillDomainConfig.utils';

declare const names: SkillGroup_Config['name'];
const group = buildSkillGroupConfig({ id: 'ae3a76b3-47eb-47b6-92df-2ffa7da52ceb', name: names, skillIds: { basic: '9de735b7-4bcd-4b58-8832-d2d5d15846cd' } as const });
const groupId: 'ae3a76b3-47eb-47b6-92df-2ffa7da52ceb' = group.id;
void groupId;
const domain = buildSkillDomainConfig({ id: '9de735b7-4bcd-4b58-8832-d2d5d15846cd', name: names, groupIds: { group: group.id } });
const domainId: '9de735b7-4bcd-4b58-8832-d2d5d15846cd' = domain.id;
void domainId;
// @ts-expect-error Missing localized name.
buildSkillGroupConfig({ id: 'ae3a76b3-47eb-47b6-92df-2ffa7da52ceb', skillIds: { basic: '9de735b7-4bcd-4b58-8832-d2d5d15846cd' } });
// @ts-expect-error Missing group references.
buildSkillDomainConfig({ id: '9de735b7-4bcd-4b58-8832-d2d5d15846cd', name: names });
// @ts-expect-error Reference lists must be keyed objects.
buildSkillGroupConfig({ id: 'ae3a76b3-47eb-47b6-92df-2ffa7da52ceb', name: names, skillIds: ['9de735b7-4bcd-4b58-8832-d2d5d15846cd'] });
// @ts-expect-error Semantic slugs are not UUID values.
buildSkillDomainConfig({ id: '9de735b7-4bcd-4b58-8832-d2d5d15846cd', name: names, groupIds: { bad: 'math.counting' } });
