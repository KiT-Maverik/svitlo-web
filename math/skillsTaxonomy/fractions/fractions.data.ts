import { buildSkillDomainConfig } from '@/utils';
import { fractions_SkillDomain_Ids } from './fractions.ids';
import { fractions_SkillGroups_Ids } from './index.ids';

export const fractions_SkillDomain_Data = buildSkillDomainConfig({
  id: fractions_SkillDomain_Ids.fractions,
  name: {
    en: "Fractions",
    zh: "分数",
    hi: "भिन्न",
    es: "Fracciones",
    ar: "الكسور",
    fr: "Fractions",
    bn: "ভগ্নাংশ",
    pt: "Frações",
    ur: "کسریں",
    id: "Pecahan",
    de: "Brüche",
    ja: "分数",
    ko: "분수",
    tr: "Kesirler",
    vi: "Phân số",
    ta: "பின்னங்கள்",
    te: "భిన్నాలు",
    mr: "अपूर्णांक",
    ms: "Pecahan",
    he: "שברים",
    pl: "Ułamki",
    uk: "Дроби",
  },
  groupIds: fractions_SkillGroups_Ids,
});
