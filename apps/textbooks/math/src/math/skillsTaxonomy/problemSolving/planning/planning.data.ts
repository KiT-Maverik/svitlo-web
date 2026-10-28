import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';
import { planning_SkillGroup_Ids } from './planning.ids';
import { planning_Skills_Ids } from './skills/index.ids';

export const planning_SkillGroup_Data = buildSkillGroupConfig({
  id: planning_SkillGroup_Ids.planning,
  name: {
    en: "Solution planning",
    "lt": "Sprendimo planavimas",
    "lv": "Risinājuma plānošana",
    "et": "Lahenduse kavandamine",
    "be": "Плянаваньне рашэньня",
    "ka": "ამოხსნის დაგეგმვა",
    "kk": "Шешімді жоспарлау",
    zh: "解题规划",
    hi: "समाधान की योजना",
    es: "Planificación de soluciones",
    ar: "تخطيط الحل",
    fr: "Planification de la résolution",
    bn: "সমাধানের পরিকল্পনা",
    pt: "Planejamento de soluções",
    ur: "حل کی منصوبہ بندی",
    id: "Perencanaan penyelesaian",
    de: "Lösungsplanung",
    ja: "解決手順の計画",
    ko: "풀이 계획",
    tr: "Çözüm planlama",
    vi: "Lập kế hoạch giải",
    ta: "தீர்வைத் திட்டமிடுதல்",
    te: "పరిష్కార ప్రణాళిక",
    mr: "उपायाचे नियोजन",
    ms: "Perancangan penyelesaian",
    he: "תכנון פתרון",
    pl: "Planowanie rozwiązania",
    uk: "Планування розв’язання",
  },
  skillIds: planning_Skills_Ids,
});
