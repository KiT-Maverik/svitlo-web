import { buildSkillGroupConfig } from '@/utils';
import { models_SkillGroup_Ids } from './models.ids';
import { models_Skills_Ids } from './skills/index.ids';

export const models_SkillGroup_Data = buildSkillGroupConfig({
  id: models_SkillGroup_Ids.models,
  name: {
    en: 'Problem models',
    zh: '问题建模',
    hi: 'समस्या के मॉडल',
    es: 'Modelos de problemas',
    ar: 'نماذج المسائل',
    fr: 'Modélisation des problèmes',
    bn: 'সমস্যার মডেল',
    pt: 'Modelagem de problemas',
    ur: 'مسائل کے نمونے',
    id: 'Model masalah',
    de: 'Aufgabenmodelle',
    ja: '問題のモデル化',
    ko: '문제 모델링',
    tr: 'Problem modelleri',
    vi: 'Mô hình bài toán',
    ta: 'சிக்கல் மாதிரிகள்',
    te: 'సమస్య నమూనాలు',
    mr: 'समस्यांची प्रतिमाने',
    ms: 'Model masalah',
    he: 'מודלים לבעיות',
    pl: 'Modele zadań',
    uk: 'Моделювання задач',
  },
  skillIds: models_Skills_Ids,
});
