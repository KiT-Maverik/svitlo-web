import { buildSkillGroupConfig } from '@/utils';
import { portions_SkillGroup_Ids } from './portions.ids';
import { portions_Skills_Ids } from './skills/index.ids';

export const portions_SkillGroup_Data = buildSkillGroupConfig({
  id: portions_SkillGroup_Ids.portions,
  name: {
    en: "Fractional parts of quantities",
    "lt": "Dydžių dalys",
    "lv": "Lielumu daļas",
    "et": "Suuruste osad",
    "be": "Долі велічыняў",
    "ka": "სიდიდეების ნაწილები",
    "kk": "Шамалардың бөліктері",
    zh: "数量的几分之一",
    hi: "राशियों के भिन्नात्मक भाग",
    es: "Partes fraccionarias de cantidades",
    ar: "الأجزاء الكسرية من الكميات",
    fr: "Fractions de quantités",
    bn: "পরিমাণের ভগ্নাংশ",
    pt: "Partes fracionárias de quantidades",
    ur: "مقداروں کے کسری حصے",
    id: "Bagian pecahan dari kuantitas",
    de: "Bruchteile von Größen",
    ja: "量の分数部分",
    ko: "양의 분수 부분",
    tr: "Çoklukların kesirli parçaları",
    vi: "Phần phân số của đại lượng",
    ta: "அளவுகளின் பின்னப் பகுதிகள்",
    te: "పరిమాణాల భిన్న భాగాలు",
    mr: "राशींचे अपूर्णांकी भाग",
    ms: "Bahagian pecahan bagi kuantiti",
    he: "חלקים שבריים של כמויות",
    pl: "Ułamkowe części wielkości",
    uk: "Частини величини",
  },
  skillIds: portions_Skills_Ids,
});
