import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  absoluteMagnitude_Skill_Data,
  apparentMagnitude_Skill_Data,
  astronomicalDistanceUnits_Skill_Data,
  cosmicDistanceLadder_Skill_Data,
  standardCandles_Skill_Data,
  stellarParallax_Skill_Data,
} from './skills';

export const distancesAndPhysicalProperties_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'distancesAndPhysicalProperties',
  id: '5c0ef873-fe6c-4cd8-9633-c2e27dd267d8',
  name: {
    en: 'Distances and Physical Properties',
    es: 'Distancias y propiedades físicas',
    fr: 'Distances et propriétés physiques',
    de: 'Entfernungen und physikalische Eigenschaften',
    pt: 'Distâncias e propriedades físicas',
    id: 'Jarak dan sifat fisik',
    tr: 'Uzaklıklar ve fiziksel özellikler',
    zh: '距离与物理性质',
    ja: '距離と物理的性質',
    ko: '거리와 물리적 특성',
    ar: 'المسافات والخصائص الفيزيائية',
    hi: 'दूरियाँ और भौतिक गुण',
    he: 'מרחקים ותכונות פיזיקליות',
    vi: 'Khoảng cách và tính chất vật lý',
    uk: 'Відстані та фізичні властивості',
    pl: 'Odległości i właściwości fizyczne',
  },
  skills: {
    absoluteMagnitude: absoluteMagnitude_Skill_Data,
    apparentMagnitude: apparentMagnitude_Skill_Data,
    astronomicalDistanceUnits: astronomicalDistanceUnits_Skill_Data,
    cosmicDistanceLadder: cosmicDistanceLadder_Skill_Data,
    standardCandles: standardCandles_Skill_Data,
    stellarParallax: stellarParallax_Skill_Data,
  },
  description: {
    methodological:
      'Astronomical measurements connect remote observations to inferred size, distance and energy output using explicit models rather than direct contact.',
    frontend: {
      en: 'Explore how astronomers estimate properties they cannot measure directly.',
      es: 'Explora cómo los astrónomos estiman propiedades que no pueden medir directamente.',
      fr: 'Découvre comment les astronomes estiment des propriétés qu’ils ne peuvent pas mesurer directement.',
      de: 'Entdecke, wie Astronomen Eigenschaften abschätzen, die sie nicht direkt messen können.',
      pt: 'Explore como astrônomos estimam propriedades que não podem medir diretamente.',
      id: 'Pelajari bagaimana astronom memperkirakan sifat yang tidak dapat mereka ukur secara langsung.',
      tr: 'Gökbilimcilerin doğrudan ölçemedikleri özellikleri nasıl tahmin ettiklerini keşfet.',
      zh: '探索天文学家如何估算无法直接测量的天体性质。',
      ja: '直接測定できない天体の性質を、天文学者がどう推定するか調べよう。',
      ko: '천문학자들이 직접 측정할 수 없는 특성을 어떻게 추정하는지 살펴보세요.',
      ar: 'استكشف كيف يقدّر الفلكيون خصائص لا يستطيعون قياسها مباشرة.',
      hi: 'जानें कि खगोलविद उन गुणों का अनुमान कैसे लगाते हैं जिन्हें सीधे मापा नहीं जा सकता।',
      he: 'גלה כיצד אסטרונומים מעריכים תכונות שאי אפשר למדוד ישירות.',
      vi: 'Khám phá cách các nhà thiên văn ước tính những đặc điểm không thể đo trực tiếp.',
      uk: 'Досліджуй, як астрономи оцінюють властивості об’єктів, які неможливо виміряти безпосередньо.',
      pl: 'Poznaj sposoby, w jakie astronomowie szacują właściwości, których nie mogą zmierzyć bezpośrednio.',
    },
  },
});
