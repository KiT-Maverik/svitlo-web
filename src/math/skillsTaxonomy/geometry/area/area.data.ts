import { buildSkillGroupConfig } from '@/utils';
import { area_SkillGroup_Ids } from './area.ids';
import { area_Skills_Ids } from './skills/index.ids';

export const area_SkillGroup_Data = buildSkillGroupConfig({
  id: area_SkillGroup_Ids.area,
  name: {
    en: 'Area',
    zh: '面积',
    hi: 'क्षेत्रफल',
    es: 'Área',
    ar: 'المساحة',
    fr: 'Aire',
    bn: 'ক্ষেত্রফল',
    pt: 'Área',
    ur: 'رقبہ',
    id: 'Luas',
    de: 'Flächeninhalt',
    ja: '面積',
    ko: '넓이',
    tr: 'Alan',
    vi: 'Diện tích',
    ta: 'பரப்பளவு',
    te: 'వైశాల్యం',
    mr: 'क्षेत्रफळ',
    ms: 'Luas',
    he: 'שטח',
    pl: 'Pole powierzchni',
    uk: 'Площа',
  },
  skillIds: area_Skills_Ids,
});
