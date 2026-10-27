import { buildSkillGroupConfig } from '@/utils';
import { estimation_SkillGroup_Ids } from './estimation.ids';
import { estimation_Skills_Ids } from './skills/index.ids';

export const estimation_SkillGroup_Data = buildSkillGroupConfig({
  id: estimation_SkillGroup_Ids.estimation,
  name: {
    en: 'Estimating numbers',
    zh: '数的估算',
    hi: 'संख्याओं का अनुमान',
    es: 'Estimación numérica',
    ar: 'تقدير الأعداد',
    fr: 'Estimation des nombres',
    bn: 'সংখ্যার আনুমানিক মান',
    pt: 'Estimativa de números',
    ur: 'اعداد کا تخمینہ',
    id: 'Perkiraan bilangan',
    de: 'Zahlen schätzen',
    ja: '数の見積もり',
    ko: '수의 어림',
    tr: 'Sayıları tahmin etme',
    vi: 'Ước lượng số',
    ta: 'எண்களை மதிப்பிடுதல்',
    te: 'సంఖ్యల అంచనా',
    mr: 'संख्यांचा अंदाज',
    ms: 'Anggaran nombor',
    he: 'אומדן מספרים',
    pl: 'Szacowanie liczb',
    uk: 'Оцінювання чисел',
  },
  skillIds: estimation_Skills_Ids,
});
