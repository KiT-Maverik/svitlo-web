import { buildSkillGroupConfig } from '@/utils';
import { patterns_SkillGroup_Ids } from './patterns.ids';
import { patterns_Skills_Ids } from './skills/index.ids';

export const patterns_SkillGroup_Data = buildSkillGroupConfig({
  id: patterns_SkillGroup_Ids.patterns,
  name: {
    en: 'Patterns',
    zh: '规律',
    hi: 'नियमित क्रम',
    es: 'Patrones',
    ar: 'الأنماط',
    fr: 'Régularités',
    bn: 'বিন্যাসের নিয়ম',
    pt: 'Padrões',
    ur: 'نمونے اور ترتیب',
    id: 'Pola',
    de: 'Muster',
    ja: '規則性',
    ko: '규칙성',
    tr: 'Örüntüler',
    vi: 'Quy luật',
    ta: 'வடிவமைப்பின் விதிகள்',
    te: 'నమూనాలు',
    mr: 'नमुने',
    ms: 'Pola',
    he: 'דפוסים',
    pl: 'Prawidłowości',
    uk: 'Закономірності',
  },
  skillIds: patterns_Skills_Ids,
});
