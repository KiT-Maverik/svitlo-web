import { buildSkillDomainConfig } from '@/utils';
import { problemSolving_SkillDomain_Ids } from './problemSolving.ids';
import { problemSolving_SkillGroups_Ids } from './index.ids';

export const problemSolving_SkillDomain_Data = buildSkillDomainConfig({
  id: problemSolving_SkillDomain_Ids.problemSolving,
  name: {
    en: 'Problem solving',
    zh: '解决问题',
    hi: 'समस्या समाधान',
    es: 'Resolución de problemas',
    ar: 'حل المسائل',
    fr: 'Résolution de problèmes',
    bn: 'সমস্যা সমাধান',
    pt: 'Resolução de problemas',
    ur: 'مسئلہ حل کرنا',
    id: 'Pemecahan masalah',
    de: 'Sachaufgaben lösen',
    ja: '問題解決',
    ko: '문제 해결',
    tr: 'Problem çözme',
    vi: 'Giải quyết vấn đề',
    ta: 'சிக்கல் தீர்த்தல்',
    te: 'సమస్య పరిష్కారం',
    mr: 'समस्या सोडवणे',
    ms: 'Penyelesaian masalah',
    he: 'פתרון בעיות',
    pl: 'Rozwiązywanie zadań',
    uk: 'Розв’язування задач',
  },
  groupIds: problemSolving_SkillGroups_Ids,
});
