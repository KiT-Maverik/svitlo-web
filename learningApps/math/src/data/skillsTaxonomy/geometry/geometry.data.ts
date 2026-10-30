import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';
import { geometry_SkillDomain_Ids } from './geometry.ids';
import { geometry_SkillGroups_Ids } from './index.ids';

export const geometry_SkillDomain_Data = buildSkillDomainConfig({
  id: geometry_SkillDomain_Ids.geometry,
  name: {
    en: "Geometry",
    "lt": "Geometrija",
    "lv": "Ģeometrija",
    "et": "Geomeetria",
    "be": "Геамэтрыя",
    "ka": "გეომეტრია",
    "kk": "Геометрия",
    zh: "几何",
    hi: "ज्यामिति",
    es: "Geometría",
    ar: "الهندسة",
    fr: "Géométrie",
    bn: "জ্যামিতি",
    pt: "Geometria",
    ur: "ہندسہ",
    id: "Geometri",
    de: "Geometrie",
    ja: "幾何学",
    ko: "기하학",
    tr: "Geometri",
    vi: "Hình học",
    ta: "வடிவியல்",
    te: "జ్యామితి",
    mr: "भूमिती",
    ms: "Geometri",
    he: "גאומטריה",
    pl: "Geometria",
    uk: "Геометрія",
  },
  groupIds: geometry_SkillGroups_Ids,
  description: { methodological: "Spatial relationships, properties of plane figures and solids, lines and angles, geometric transformations, and measurement of perimeter and area." },
});
