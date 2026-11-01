import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  abioticFalsePositives_Skill_Data,
  biosignatures_Skill_Data,
  lifeDetectionEvidenceStandards_Skill_Data,
  planetaryProtection_Skill_Data,
  technosignatures_Skill_Data,
} from './skills';

export const evidenceOfLife_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'evidenceOfLife',
  id: 'b6aa9935-9b82-4753-8abe-678b2c459f8b',
  name: {
    en: 'Evidence of Life',
    uk: 'Докази існування життя',
    pl: 'Dowody istnienia życia',
    es: 'Pruebas de vida',
    fr: 'Indices de vie',
    de: 'Belege für Leben',
    pt: 'Evidências de vida',
    id: 'Bukti adanya kehidupan',
    tr: 'Yaşamın kanıtları',
    zh: '生命存在的证据',
    ja: '生命の証拠',
    ko: '생명 존재의 증거',
    ar: 'أدلة وجود الحياة',
    hi: 'जीवन के प्रमाण',
    he: 'ראיות לקיום חיים',
    vi: 'Bằng chứng về sự sống',
  },
  skills: {
    abioticFalsePositives: abioticFalsePositives_Skill_Data,
    biosignatures: biosignatures_Skill_Data,
    lifeDetectionEvidenceStandards: lifeDetectionEvidenceStandards_Skill_Data,
    planetaryProtection: planetaryProtection_Skill_Data,
    technosignatures: technosignatures_Skill_Data,
  },
  description: {
    methodological:
      'A proposed sign of life must be weighed against nonbiological processes and the limits of the measuring instrument.',
    frontend: {
      en: 'Learn how to distinguish possible signs of life from nonliving explanations.',
      uk: 'Навчися відрізняти можливі ознаки життя від пояснень, що не потребують живих організмів.',
      pl: 'Naucz się odróżniać możliwe oznaki życia od wyjaśnień niezwiązanych z organizmami żywymi.',
      es: 'Aprende a distinguir posibles señales de vida de explicaciones que no implican seres vivos.',
      fr: 'Apprends à distinguer les signes possibles de vie des explications ne faisant pas intervenir le vivant.',
      de: 'Lerne, mögliche Lebenszeichen von Erklärungen durch unbelebte Vorgänge zu unterscheiden.',
      pt: 'Aprenda a distinguir possíveis sinais de vida de explicações que não envolvem organismos vivos.',
      id: 'Pelajari cara membedakan kemungkinan tanda kehidupan dari penjelasan yang tidak melibatkan makhluk hidup.',
      tr: 'Olası yaşam belirtilerini canlı olmayan süreçlerin yol açtığı açıklamalardan ayırt etmeyi öğren.',
      zh: '学习区分可能的生命迹象与无需生命活动也能解释的现象。',
      ja: '生命の可能性を示す兆候と、生物なしでも説明できる現象を区別しよう。',
      ko: '생명체가 있다는 징후와 생명체 없이도 설명할 수 있는 현상을 구별해 보세요.',
      ar: 'تعلّم التمييز بين علامات الحياة المحتملة والتفسيرات التي لا تتطلب وجود كائنات حية.',
      hi: 'जीवन के संभावित संकेतों और निर्जीव प्रक्रियाओं से मिलने वाली व्याख्याओं में अंतर करना सीखें।',
      he: 'למד להבחין בין סימנים אפשריים לחיים לבין הסברים שאינם מחייבים קיום יצורים חיים.',
      vi: 'Học cách phân biệt dấu hiệu có thể cho thấy sự sống với những lời giải thích không liên quan đến sinh vật.',
    },
  },
});
