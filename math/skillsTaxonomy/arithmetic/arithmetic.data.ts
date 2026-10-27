import { buildSkillDomainConfig } from '@/utils';
import { arithmetic_SkillDomain_Ids } from './arithmetic.ids';
import { arithmetic_SkillGroups_Ids } from './index.ids';

export const arithmetic_SkillDomain_Data = buildSkillDomainConfig({
  id: arithmetic_SkillDomain_Ids.arithmetic,
  name: {
    en: 'Arithmetic',
    zh: '算术',
    hi: 'अंकगणित',
    es: 'Aritmética',
    ar: 'الحساب',
    fr: 'Arithmétique',
    bn: 'পাটিগণিত',
    pt: 'Aritmética',
    ur: 'حساب',
    id: 'Aritmetika',
    de: 'Arithmetik',
    ja: '算術',
    ko: '산술',
    tr: 'Aritmetik',
    vi: 'Số học',
    ta: 'எண்கணிதம்',
    te: 'అంకగణితం',
    mr: 'अंकगणित',
    ms: 'Aritmetik',
    he: 'חשבון',
    pl: 'Arytmetyka',
    uk: 'Арифметика',
  },
  groupIds: arithmetic_SkillGroups_Ids,
});
