import { buildSkillGroupConfig } from '@/utils';
import { capacity_SkillGroup_Ids } from './capacity.ids';
import { capacity_Skills_Ids } from './skills/index.ids';

export const capacity_SkillGroup_Data = buildSkillGroupConfig({
  id: capacity_SkillGroup_Ids.capacity,
  name: {
    en: 'Capacity',
    zh: '容量',
    hi: 'धारिता',
    es: 'Capacidad',
    ar: 'السعة',
    fr: 'Capacité',
    bn: 'ধারণক্ষমতা',
    pt: 'Capacidade',
    ur: 'گنجائش',
    id: 'Kapasitas',
    de: 'Fassungsvermögen',
    ja: '容量',
    ko: '들이',
    tr: 'Kapasite',
    vi: 'Dung tích',
    ta: 'கொள்ளளவு',
    te: 'ధారిత',
    mr: 'क्षमता',
    ms: 'Kapasiti',
    he: 'קיבולת',
    pl: 'Pojemność',
    uk: 'Місткість',
  },
  skillIds: capacity_Skills_Ids,
});
