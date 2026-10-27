import { buildSkillGroupConfig } from '@/utils';
import { figures_SkillGroup_Ids } from './figures.ids';
import { figures_Skills_Ids } from './skills/index.ids';

export const figures_SkillGroup_Data = buildSkillGroupConfig({
  id: figures_SkillGroup_Ids.figures,
  name: {
    en: "Plane figures",
    zh: "平面图形",
    hi: "समतलीय आकृतियाँ",
    es: "Figuras planas",
    ar: "الأشكال المستوية",
    fr: "Figures planes",
    bn: "সমতল আকৃতি",
    pt: "Figuras planas",
    ur: "مسطح اشکال",
    id: "Bangun datar",
    de: "Ebene Figuren",
    ja: "平面図形",
    ko: "평면도형",
    tr: "Düzlemsel şekiller",
    vi: "Hình phẳng",
    ta: "தள வடிவங்கள்",
    te: "సమతల ఆకృతులు",
    mr: "सपाट आकृत्या",
    ms: "Bentuk satah",
    he: "צורות מישוריות",
    pl: "Figury płaskie",
    uk: "Плоскі фігури",
  },
  skillIds: figures_Skills_Ids,
});
