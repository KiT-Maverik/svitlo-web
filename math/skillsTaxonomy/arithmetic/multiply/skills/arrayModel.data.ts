import { buildSkillConfig } from '@/utils';
import { multiply_Skills_Ids } from './index.ids';

export const arrayModel_Skill_Data = buildSkillConfig({
  id: multiply_Skills_Ids.arrayModel,
  name: {
    en: 'Multiplication — Array model',
    zh: '乘法 — 阵列模型',
    hi: 'गुणा — आयताकार सरणी',
    es: 'Multiplicación — Modelo de matriz',
    ar: 'الضرب — نموذج المصفوفة',
    fr: 'Multiplication — Modèle rectangulaire',
    bn: 'গুণ — আয়তাকার বিন্যাস',
    pt: 'Multiplicação — Modelo de matriz',
    ur: 'ضرب — مستطیلی ترتیب',
    id: 'Perkalian — Model larik',
    de: 'Multiplikation — Rechteckanordnung',
    ja: '乗法 — 配列モデル',
    ko: '곱셈 — 배열 모델',
    tr: 'Çarpma — Dizi modeli',
    vi: 'Phép nhân — Mô hình mảng',
    ta: 'பெருக்கல் — வரிசை மாதிரி',
    te: 'గుణకారం — అరే నమూనా',
    mr: 'गुणाकार — चौकोनी मांडणी',
    ms: 'Pendaraban — Model tatasusunan',
    he: 'כפל — מערך מלבני',
    pl: 'Mnożenie — Model tablicowy',
    uk: 'Множення — Прямокутний масив',
  },
});
