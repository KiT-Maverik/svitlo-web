import { buildSkillGroupConfig } from '@/utils';
import { interpretation_SkillGroup_Ids } from './interpretation.ids';
import { interpretation_Skills_Ids } from './skills/index.ids';

export const interpretation_SkillGroup_Data = buildSkillGroupConfig({
  id: interpretation_SkillGroup_Ids.interpretation,
  name: {
    en: 'Data interpretation',
    zh: '数据解读',
    hi: 'आँकड़ों की व्याख्या',
    es: 'Interpretación de datos',
    ar: 'تفسير البيانات',
    fr: 'Interprétation des données',
    bn: 'উপাত্ত ব্যাখ্যা',
    pt: 'Interpretação de dados',
    ur: 'اعداد و شمار کی تشریح',
    id: 'Interpretasi data',
    de: 'Dateninterpretation',
    ja: 'データの解釈',
    ko: '자료 해석',
    tr: 'Veri yorumlama',
    vi: 'Diễn giải dữ liệu',
    ta: 'தரவு விளக்கம்',
    te: 'దత్తాంశ వివరణ',
    mr: 'माहितीचे अर्थलक्षण',
    ms: 'Pentafsiran data',
    he: 'פירוש נתונים',
    pl: 'Interpretacja danych',
    uk: 'Інтерпретація даних',
  },
  skillIds: interpretation_Skills_Ids,
});
