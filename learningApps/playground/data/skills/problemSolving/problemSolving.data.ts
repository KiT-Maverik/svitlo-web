import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { conditions_SkillGroup_Data } from './conditions/conditions.data';
import { models_SkillGroup_Data } from './models/models.data';

import { planning_SkillGroup_Data } from './planning/planning.data';

export const problemSolving_SkillDomain_Data = buildSkillDomainConfig({
  id: '695fd427-aaea-4cbb-bd07-2d1702f36a17',
  name: {
    en: "Problem solving",
    lt: "Uždavinių sprendimas",
    lv: "Uzdevumu risināšana",
    et: "Ülesannete lahendamine",
    be: "Рашэньне задачаў",
    ka: "ამოცანების ამოხსნა",
    kk: "Есептерді шешу",
    zh: "解决问题",
    hi: "समस्या समाधान",
    es: "Resolución de problemas",
    ar: "حل المسائل",
    fr: "Résolution de problèmes",
    bn: "সমস্যা সমাধান",
    pt: "Resolução de problemas",
    ur: "مسئلہ حل کرنا",
    id: "Pemecahan masalah",
    de: "Sachaufgaben lösen",
    ja: "問題解決",
    ko: "문제 해결",
    tr: "Problem çözme",
    vi: "Giải quyết vấn đề",
    ta: "சிக்கல் தீர்த்தல்",
    te: "సమస్య పరిష్కారం",
    mr: "समस्या सोडवणे",
    ms: "Penyelesaian masalah",
    he: "פתרון בעיות",
    pl: "Rozwiązywanie zadań",
    uk: "Розв’язування задач",
  },
  groupIds: {
    planning: planning_SkillGroup_Data.id,
    conditions: conditions_SkillGroup_Data.id,
    models: models_SkillGroup_Data.id,
  },
  description: { methodological: "Translating real-life situations into mathematical models, selecting operations, planning multi-step solutions, and checking whether answers make sense." },
});
