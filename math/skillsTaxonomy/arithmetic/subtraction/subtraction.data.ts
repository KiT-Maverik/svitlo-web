import { buildSkillGroupConfig } from '@/utils';
import { subtraction_SkillGroup_Ids } from './subtraction.ids';
import { subtraction_Skills_Ids } from './skills/index.ids';

export const subtraction_SkillGroup_Data = buildSkillGroupConfig({
  id: subtraction_SkillGroup_Ids.subtraction,
  name: {
    en: 'Subtraction',
    zh: '减法',
    hi: 'घटाव',
    es: 'Resta',
    ar: 'الطرح',
    fr: 'Soustraction',
    bn: 'বিয়োগ',
    pt: 'Subtração',
    ur: 'تفریق',
    id: 'Pengurangan',
    de: 'Subtraktion',
    ja: '減法',
    ko: '뺄셈',
    tr: 'Çıkarma',
    vi: 'Phép trừ',
    ta: 'கழித்தல்',
    te: 'తీసివేత',
    mr: 'वजाबाकी',
    ms: 'Penolakan',
    he: 'חיסור',
    pl: 'Odejmowanie',
    uk: 'Віднімання',
  },
  skillIds: subtraction_Skills_Ids,
});
