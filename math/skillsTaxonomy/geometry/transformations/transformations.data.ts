import { buildSkillGroupConfig } from '@/utils';
import { transformations_SkillGroup_Ids } from './transformations.ids';
import { transformations_Skills_Ids } from './skills/index.ids';

export const transformations_SkillGroup_Data = buildSkillGroupConfig({
  id: transformations_SkillGroup_Ids.transformations,
  name: {
    en: "Geometric transformations",
    zh: "几何变换",
    hi: "ज्यामितीय रूपांतरण",
    es: "Transformaciones geométricas",
    ar: "التحويلات الهندسية",
    fr: "Transformations géométriques",
    bn: "জ্যামিতিক রূপান্তর",
    pt: "Transformações geométricas",
    ur: "ہندسی تبدیلیاں",
    id: "Transformasi geometri",
    de: "Geometrische Transformationen",
    ja: "図形の変換",
    ko: "도형의 변환",
    tr: "Geometrik dönüşümler",
    vi: "Phép biến hình",
    ta: "வடிவியல் மாற்றங்கள்",
    te: "రేఖాగణిత పరివర్తనలు",
    mr: "भूमितीय रूपांतरे",
    ms: "Transformasi geometri",
    he: "העתקות גאומטריות",
    pl: "Przekształcenia geometryczne",
    uk: "Геометричні перетворення",
  },
  skillIds: transformations_Skills_Ids,
});
