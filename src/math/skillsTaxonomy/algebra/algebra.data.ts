import { buildSkillDomainConfig } from '@/utils';
import { algebra_SkillDomain_Ids } from './algebra.ids';
import { algebra_SkillGroups_Ids } from './index.ids';

export const algebra_SkillDomain_Data = buildSkillDomainConfig({
  id: algebra_SkillDomain_Ids.algebra,
  name: {
    en: "Algebra",
    "lt": "Algebra",
    "lv": "Algebra",
    "et": "Algebra",
    "be": "Альгебра",
    "ka": "ალგებრა",
    "kk": "Алгебра",
    zh: "代数",
    hi: "बीजगणित",
    es: "Álgebra",
    ar: "الجبر",
    fr: "Algèbre",
    bn: "বীজগণিত",
    pt: "Álgebra",
    ur: "الجبرا",
    id: "Aljabar",
    de: "Algebra",
    ja: "代数",
    ko: "대수",
    tr: "Cebir",
    vi: "Đại số",
    ta: "இயற்கணிதம்",
    te: "బీజగణితం",
    mr: "बीजगणित",
    ms: "Algebra",
    he: "אלגברה",
    pl: "Algebra",
    uk: "Алгебра",
  },
  groupIds: algebra_SkillGroups_Ids,
});
