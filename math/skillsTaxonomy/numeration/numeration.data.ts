import { buildSkillDomainConfig } from '@/utils';
import { numeration_SkillDomain_Ids } from './numeration.ids';
import { numeration_SkillGroups_Ids } from './index.ids';

export const numeration_SkillDomain_Data = buildSkillDomainConfig({
  id: numeration_SkillDomain_Ids.numeration,
  name: {
    en: "Natural numbers",
    zh: "自然数",
    hi: "प्राकृतिक संख्याएँ",
    es: "Números naturales",
    ar: "الأعداد الطبيعية",
    fr: "Nombres naturels",
    bn: "স্বাভাবিক সংখ্যা",
    pt: "Números naturais",
    ur: "قدرتی اعداد",
    id: "Bilangan asli",
    de: "Natürliche Zahlen",
    ja: "自然数",
    ko: "자연수",
    tr: "Doğal sayılar",
    vi: "Số tự nhiên",
    ta: "இயல் எண்கள்",
    te: "సహజ సంఖ్యలు",
    mr: "नैसर्गिक संख्या",
    ms: "Nombor asli",
    he: "מספרים טבעיים",
    pl: "Liczby naturalne",
    uk: "Натуральні числа",
  },
  groupIds: numeration_SkillGroups_Ids,
});
