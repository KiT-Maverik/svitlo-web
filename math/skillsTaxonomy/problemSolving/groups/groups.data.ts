import { buildSkillGroupConfig } from '@/utils';
import { groups_SkillGroup_Ids } from './groups.ids';
import { groups_Skills_Ids } from './skills/index.ids';

export const groups_SkillGroup_Data = buildSkillGroupConfig({
  id: groups_SkillGroup_Ids.groups,
  name: {
    en: "Grouping problems",
    zh: "分组类应用题",
    hi: "समूहों की समस्याएँ",
    es: "Problemas de agrupación",
    ar: "مسائل المجموعات",
    fr: "Problèmes de groupement",
    bn: "দলভিত্তিক সমস্যা",
    pt: "Problemas de agrupamento",
    ur: "گروہوں کے مسائل",
    id: "Soal pengelompokan",
    de: "Gruppierungsaufgaben",
    ja: "グループの文章題",
    ko: "묶음 문제",
    tr: "Gruplama problemleri",
    vi: "Bài toán chia nhóm",
    ta: "குழுவாக்கக் கணக்குகள்",
    te: "సమూహ సమస్యలు",
    mr: "गटांच्या समस्या",
    ms: "Masalah pengelompokan",
    he: "בעיות קבוצות",
    pl: "Zadania o grupach",
    uk: "Задачі на групування",
  },
  skillIds: groups_Skills_Ids,
});
