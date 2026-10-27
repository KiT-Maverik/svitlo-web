import { buildSkillGroupConfig } from '@/utils';
import { comparison_SkillGroup_Ids } from './comparison.ids';
import { comparison_Skills_Ids } from './skills/index.ids';

export const comparison_SkillGroup_Data = buildSkillGroupConfig({
  id: comparison_SkillGroup_Ids.comparison,
  name: {
    en: 'Comparing numbers',
    zh: '比较数字大小',
    hi: 'संख्याओं की तुलना',
    es: 'Comparación de números',
    ar: 'مقارنة الأعداد',
    fr: 'Comparaison des nombres',
    bn: 'সংখ্যার তুলনা',
    pt: 'Comparação de números',
    ur: 'اعداد کا موازنہ',
    id: 'Perbandingan bilangan',
    de: 'Zahlen vergleichen',
    ja: '数の比較',
    ko: '수의 비교',
    tr: 'Sayıları karşılaştırma',
    vi: 'So sánh các số',
    ta: 'எண்களை ஒப்பிடுதல்',
    te: 'సంఖ్యల పోలిక',
    mr: 'संख्यांची तुलना',
    ms: 'Perbandingan nombor',
    he: 'השוואת מספרים',
    pl: 'Porównywanie liczb',
    uk: 'Порівняння чисел',
  },
  skillIds: comparison_Skills_Ids,
});
