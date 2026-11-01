import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  extremophileAnalogues_Skill_Data,
  habitability_Skill_Data,
  habitabilityThroughTime_Skill_Data,
  prebioticChemistry_Skill_Data,
} from './skills';

export const conditionsForLife_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'conditionsForLife',
  id: 'dfc0e071-5101-4aaa-b24f-691b32dd77f4',
  name: {
    en: 'Conditions for Life',
    uk: 'Умови для життя',
    pl: 'Warunki dla życia',
    es: 'Condiciones para la vida',
    fr: 'Conditions nécessaires à la vie',
    de: 'Bedingungen für Leben',
    pt: 'Condições para a vida',
    id: 'Syarat bagi kehidupan',
    tr: 'Yaşam için koşullar',
    zh: '生命存在的条件',
    ja: '生命が存在する条件',
    ko: '생명체가 존재할 조건',
    ar: 'شروط وجود الحياة',
    hi: 'जीवन के लिए परिस्थितियाँ',
    he: 'תנאים לקיום חיים',
    vi: 'Điều kiện cho sự sống',
  },
  skills: {
    extremophileAnalogues: extremophileAnalogues_Skill_Data,
    habitability: habitability_Skill_Data,
    habitabilityThroughTime: habitabilityThroughTime_Skill_Data,
    prebioticChemistry: prebioticChemistry_Skill_Data,
  },
  description: {
    methodological:
      'Evaluating environments for life requires explicit biological and geochemical assumptions; familiar Earth conditions are useful evidence, not universal proof.',
    frontend: {
      en: 'Consider the environments and chemistry that might allow life to exist.',
      uk: 'Поміркуй, які середовища й хімічні процеси можуть дозволити життю існувати.',
      pl: 'Rozważ, jakie środowiska i procesy chemiczne mogą umożliwiać istnienie życia.',
      es: 'Considera qué entornos y procesos químicos podrían permitir la existencia de vida.',
      fr: 'Réfléchis aux environnements et aux processus chimiques qui pourraient permettre à la vie d’exister.',
      de: 'Überlege, welche Umgebungen und chemischen Prozesse Leben ermöglichen könnten.',
      pt: 'Considere quais ambientes e processos químicos poderiam permitir a existência de vida.',
      id: 'Pertimbangkan lingkungan dan proses kimia apa yang mungkin memungkinkan kehidupan.',
      tr: 'Hangi ortamların ve kimyasal süreçlerin yaşamı mümkün kılabileceğini düşün.',
      zh: '思考哪些环境和化学过程可能使生命得以存在。',
      ja: 'どのような環境や化学反応なら生命が存在できるか考えよう。',
      ko: '어떤 환경과 화학 과정이 생명체의 존재를 가능하게 할지 생각해 보세요.',
      ar: 'تأمّل البيئات والعمليات الكيميائية التي قد تسمح بوجود الحياة.',
      hi: 'विचार करें कि कौन-से पर्यावरण और रासायनिक प्रक्रियाएँ जीवन को संभव बना सकती हैं।',
      he: 'חשוב אילו סביבות ותהליכים כימיים עשויים לאפשר לחיים להתקיים.',
      vi: 'Xem xét những môi trường và quá trình hóa học có thể cho phép sự sống tồn tại.',
    },
  },
});
