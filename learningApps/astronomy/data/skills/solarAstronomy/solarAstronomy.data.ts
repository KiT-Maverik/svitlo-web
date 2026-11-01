import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { heliosphericEffects_SkillGroup_Data } from './heliosphericEffects/heliosphericEffects.data';
import { magneticActivity_SkillGroup_Data } from './magneticActivity/magneticActivity.data';
import { solarStructureAndEnergy_SkillGroup_Data } from './solarStructureAndEnergy/solarStructureAndEnergy.data';

export const solarAstronomy_SkillDomain_Data = buildSkillDomainConfig({
  slug: 'solarAstronomy',
  id: 'a124b21b-c0a8-4063-bb45-48a8c6264e25',
  name: {
    en: 'Solar Astronomy',
    uk: 'Сонячна астрономія',
    pl: 'Astronomia słoneczna',
    es: 'Astronomía solar',
    fr: 'Astronomie solaire',
    de: 'Sonnenastronomie',
    pt: 'Astronomia solar',
    id: 'Astronomi Matahari',
    tr: 'Güneş astronomisi',
    zh: '太阳天文学',
    ja: '太陽天文学',
    ko: '태양 천문학',
    ar: 'علم الفلك الشمسي',
    hi: 'सौर खगोल विज्ञान',
    he: 'אסטרונומיה של השמש',
    vi: 'Thiên văn học Mặt Trời',
  },
  groups: {
    heliosphericEffects: heliosphericEffects_SkillGroup_Data,
    magneticActivity: magneticActivity_SkillGroup_Data,
    solarStructureAndEnergy: solarStructureAndEnergy_SkillGroup_Data,
  },
  description: {
    methodological:
      "The Sun is examined as a physical star whose radiation, plasma and magnetism affect the Solar System. Stellar populations and the Sun's long-term evolutionary fate are treated in stellar astronomy.",
    frontend: {
      en: 'Study the Sun as a star and explore how its energy and activity influence the Solar System.',
      uk: 'Вивчай Сонце як зорю та досліджуй, як його енергія й активність впливають на Сонячну систему.',
      pl: 'Badaj Słońce jako gwiazdę i odkrywaj, jak jego energia oraz aktywność wpływają na Układ Słoneczny.',
      es: 'Estudia el Sol como una estrella y explora cómo su energía y actividad influyen en el sistema solar.',
      fr: 'Étudie le Soleil en tant qu’étoile et découvre comment son énergie et son activité influencent le Système solaire.',
      de: 'Untersuche die Sonne als Stern und entdecke, wie ihre Energie und Aktivität das Sonnensystem beeinflussen.',
      pt: 'Estude o Sol como uma estrela e explore como sua energia e atividade influenciam o Sistema Solar.',
      id: 'Pelajari Matahari sebagai bintang dan jelajahi bagaimana energi serta aktivitasnya memengaruhi Tata Surya.',
      tr: 'Güneş\'i bir yıldız olarak incele; enerjisinin ve etkinliğinin Güneş Sistemi\'ni nasıl etkilediğini keşfet.',
      zh: '把太阳作为一颗恒星来研究，探索它的能量和活动如何影响太阳系。',
      ja: '太陽を一つの恒星として学び、そのエネルギーや活動が太陽系にどう影響するか調べよう。',
      ko: '태양을 하나의 별로 탐구하고 태양의 에너지와 활동이 태양계에 어떤 영향을 미치는지 알아보세요.',
      ar: 'ادرس الشمس بوصفها نجمًا، واستكشف كيف تؤثر طاقتها ونشاطها في النظام الشمسي.',
      hi: 'सूर्य का एक तारे के रूप में अध्ययन करें और जानें कि उसकी ऊर्जा और गतिविधियाँ सौर मंडल को कैसे प्रभावित करती हैं।',
      he: 'חקור את השמש ככוכב ולמד כיצד האנרגיה והפעילות שלה משפיעות על מערכת השמש.',
      vi: 'Nghiên cứu Mặt Trời như một ngôi sao và khám phá cách năng lượng cùng hoạt động của nó ảnh hưởng đến Hệ Mặt Trời.',
    },
  },
});
