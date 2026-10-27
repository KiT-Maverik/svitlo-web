import { buildSkillDomainConfig } from '@/utils';
import { money_SkillDomain_Ids } from './money.ids';
import { money_SkillGroups_Ids } from './index.ids';

export const money_SkillDomain_Data = buildSkillDomainConfig({
  id: money_SkillDomain_Ids.money,
  name: {
    en: 'Money',
    zh: '货币',
    hi: 'धन',
    es: 'Dinero',
    ar: 'النقود',
    fr: 'Argent',
    bn: 'টাকা',
    pt: 'Dinheiro',
    ur: 'رقم',
    id: 'Uang',
    de: 'Geld',
    ja: 'お金',
    ko: '돈',
    tr: 'Para',
    vi: 'Tiền',
    ta: 'பணம்',
    te: 'డబ్బు',
    mr: 'पैसे',
    ms: 'Wang',
    he: 'כסף',
    pl: 'Pieniądze',
    uk: 'Гроші',
  },
  groupIds: money_SkillGroups_Ids,
});
