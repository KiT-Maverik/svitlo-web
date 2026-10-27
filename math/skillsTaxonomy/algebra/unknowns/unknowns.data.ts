import { buildSkillGroupConfig } from '@/utils';
import { unknowns_SkillGroup_Ids } from './unknowns.ids';
import { unknowns_Skills_Ids } from './skills/index.ids';

export const unknowns_SkillGroup_Data = buildSkillGroupConfig({
  id: unknowns_SkillGroup_Ids.unknowns,
  name: {
    en: 'Unknown values',
    zh: '未知数',
    hi: 'अज्ञात मान',
    es: 'Valores desconocidos',
    ar: 'القيم المجهولة',
    fr: 'Valeurs inconnues',
    bn: 'অজানা মান',
    pt: 'Valores desconhecidos',
    ur: 'نامعلوم اقدار',
    id: 'Nilai yang tidak diketahui',
    de: 'Unbekannte Werte',
    ja: '未知の値',
    ko: '미지의 값',
    tr: 'Bilinmeyen değerler',
    vi: 'Giá trị chưa biết',
    ta: 'தெரியாத மதிப்புகள்',
    te: 'తెలియని విలువలు',
    mr: 'अज्ञात मूल्ये',
    ms: 'Nilai tidak diketahui',
    he: 'ערכים נעלמים',
    pl: 'Wartości niewiadome',
    uk: 'Невідомі величини',
  },
  skillIds: unknowns_Skills_Ids,
});
