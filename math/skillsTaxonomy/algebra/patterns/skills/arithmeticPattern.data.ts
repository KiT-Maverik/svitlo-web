import { buildSkillConfig } from '@/utils';
import { patterns_Skills_Ids } from './index.ids';

export const arithmeticPattern_Skill_Data = buildSkillConfig({
  id: patterns_Skills_Ids.arithmeticPattern,
  name: {
    en: 'Continuing numerical patterns with a constant step',
    zh: '按固定步长续写数列',
    hi: 'निश्चित अंतर वाली संख्या श्रृंखला आगे बढ़ाना',
    es: 'Continuar patrones numéricos de paso constante',
    ar: 'إكمال الأنماط العددية ذات الفرق الثابت',
    fr: 'Prolonger des suites numériques à pas constant',
    bn: 'নির্দিষ্ট ব্যবধানে সংখ্যার ধারা চালিয়ে যাওয়া',
    pt: 'Continuar sequências numéricas de passo constante',
    ur: 'مستقل فرق والے عددی سلسلے کو آگے بڑھانا',
    id: 'Melanjutkan pola bilangan dengan selisih tetap',
    de: 'Zahlenmuster mit konstanter Schrittweite fortsetzen',
    ja: '一定の間隔の数列を続ける',
    ko: '일정한 간격의 수열 이어가기',
    tr: 'Sabit adımlı sayı örüntülerini sürdürme',
    vi: 'Tiếp tục dãy số có bước nhảy không đổi',
    ta: 'நிலையான இடைவெளியுள்ள எண் முறையைத் தொடர்தல்',
    te: 'స్థిర అంతరం గల సంఖ్యా నమూనాను కొనసాగించడం',
    mr: 'स्थिर फरक असलेला संख्या क्रम पुढे चालू ठेवणे',
    ms: 'Menyambung pola nombor dengan beza tetap',
    he: 'המשך סדרות מספרים בהפרש קבוע',
    pl: 'Kontynuowanie ciągów liczbowych o stałym kroku',
    uk: 'Продовження числової закономірності зі сталим кроком',
  },
});
