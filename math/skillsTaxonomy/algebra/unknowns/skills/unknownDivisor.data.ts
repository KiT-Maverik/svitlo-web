import { buildSkillConfig } from '@/utils';
import { unknowns_Skills_Ids } from './index.ids';

export const unknownDivisor_Skill_Data = buildSkillConfig({
  id: unknowns_Skills_Ids.unknownDivisor,
  name: {
    en: 'Finding an unknown divisor',
    zh: '求未知除数',
    hi: 'अज्ञात भाजक ज्ञात करना',
    es: 'Hallar un divisor desconocido',
    ar: 'إيجاد المقسوم عليه المجهول',
    fr: 'Trouver un diviseur inconnu',
    bn: 'অজানা ভাজক নির্ণয়',
    pt: 'Encontrar um divisor desconhecido',
    ur: 'نامعلوم مقسوم علیہ معلوم کرنا',
    id: 'Mencari pembagi yang tidak diketahui',
    de: 'Einen unbekannten Divisor finden',
    ja: '未知の除数を求める',
    ko: '모르는 제수 구하기',
    tr: 'Bilinmeyen böleni bulma',
    vi: 'Tìm số chia chưa biết',
    ta: 'தெரியாத வகுஎண்ணைக் காணுதல்',
    te: 'తెలియని భాజకాన్ని కనుగొనడం',
    mr: 'अज्ञात भाजक शोधणे',
    ms: 'Mencari pembahagi yang tidak diketahui',
    he: 'מציאת המחלק הלא ידוע',
    pl: 'Znajdowanie nieznanego dzielnika',
    uk: 'Знаходження невідомого дільника',
  },
});
