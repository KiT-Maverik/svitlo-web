import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { astronomicalSpectra_SkillGroup_Data } from './astronomicalSpectra/astronomicalSpectra.data';
import { distancesAndPhysicalProperties_SkillGroup_Data } from './distancesAndPhysicalProperties/distancesAndPhysicalProperties.data';
import { evidenceAndInterpretation_SkillGroup_Data } from './evidenceAndInterpretation/evidenceAndInterpretation.data';
import { gravitationalAndParticleProbes_SkillGroup_Data } from './gravitationalAndParticleProbes/gravitationalAndParticleProbes.data';
import { spacecraftObservations_SkillGroup_Data } from './spacecraftObservations/spacecraftObservations.data';
import { telescopesAndDetectors_SkillGroup_Data } from './telescopesAndDetectors/telescopesAndDetectors.data';

export const astronomicalInstrumentsAndEvidence_SkillDomain_Data = buildSkillDomainConfig({
  slug: 'astronomicalInstrumentsAndEvidence',
  id: 'bf04eb18-9dd9-462c-8c83-7269bdc4d17d',
  name: {
    en: 'Astronomical Instruments and Evidence',
    es: 'Instrumentos y pruebas astronómicas',
    fr: 'Instruments et preuves astronomiques',
    de: 'Astronomische Instrumente und Beobachtungsbelege',
    pt: 'Instrumentos e evidências astronômicas',
    id: 'Instrumen dan bukti astronomi',
    tr: 'Astronomik araçlar ve kanıtlar',
    zh: '天文仪器与观测证据',
    ja: '天文観測の機器と証拠',
    ko: '천문 관측 장비와 증거',
    ar: 'الأدوات والأدلة الفلكية',
    hi: 'खगोलीय उपकरण और प्रमाण',
    he: 'כלים וראיות אסטרונומיים',
    vi: 'Thiết bị và bằng chứng thiên văn',
    uk: 'Астрономічні інструменти та докази',
    pl: 'Instrumenty astronomiczne i dowody obserwacyjne',
  },
  groups: {
    astronomicalSpectra: astronomicalSpectra_SkillGroup_Data,
    distancesAndPhysicalProperties: distancesAndPhysicalProperties_SkillGroup_Data,
    evidenceAndInterpretation: evidenceAndInterpretation_SkillGroup_Data,
    gravitationalAndParticleProbes: gravitationalAndParticleProbes_SkillGroup_Data,
    spacecraftObservations: spacecraftObservations_SkillGroup_Data,
    telescopesAndDetectors: telescopesAndDetectors_SkillGroup_Data,
  },
  description: {
    methodological:
      'Astronomy infers properties of remote objects from electromagnetic radiation, gravitational effects, particles and spacecraft observations. This domain covers what an observation can reveal, how instruments and methods constrain the evidence, and how competing interpretations are evaluated, not the engineering construction of observatories and spacecraft.',
    frontend: {
      en: 'Discover how astronomers gather evidence from light, gravity, particles and space missions to study distant worlds.',
      es: 'Descubre cómo los astrónomos reúnen pruebas a partir de la luz, la gravedad, las partículas y las misiones espaciales para estudiar mundos lejanos.',
      fr: 'Découvre comment les astronomes recueillent des indices grâce à la lumière, à la gravitation, aux particules et aux missions spatiales pour étudier des mondes lointains.',
      de: 'Entdecke, wie Forschende Licht, Gravitation, Teilchen und Weltraummissionen nutzen, um Belege über ferne Welten zu sammeln.',
      pt: 'Descubra como astrônomos reúnem evidências usando luz, gravidade, partículas e missões espaciais para estudar mundos distantes.',
      id: 'Temukan bagaimana astronom mengumpulkan bukti dari cahaya, gravitasi, partikel, dan misi antariksa untuk mempelajari dunia yang jauh.',
      tr: 'Gökbilimcilerin uzak dünyaları incelemek için ışık, kütleçekim, parçacıklar ve uzay görevlerinden nasıl kanıt topladığını keşfet.',
      zh: '探索天文学家如何利用光、引力、粒子和太空任务收集证据，研究遥远的世界。',
      ja: '光、重力、粒子、宇宙探査から証拠を集め、遠い天体を調べる方法を学ぼう。',
      ko: '천문학자들이 빛, 중력, 입자, 우주 탐사를 통해 먼 천체에 관한 증거를 수집하는 방법을 알아보세요.',
      ar: 'اكتشف كيف يجمع الفلكيون أدلة من الضوء والجاذبية والجسيمات والبعثات الفضائية لدراسة العوالم البعيدة.',
      hi: 'जानें कि खगोलविद दूरस्थ संसारों के अध्ययन के लिए प्रकाश, गुरुत्वाकर्षण, कणों और अंतरिक्ष अभियानों से प्रमाण कैसे जुटाते हैं।',
      he: 'גלה כיצד אסטרונומים אוספים ראיות מאור, כבידה, חלקיקים ומשימות חלל כדי לחקור עולמות רחוקים.',
      vi: 'Khám phá cách các nhà thiên văn thu thập bằng chứng từ ánh sáng, lực hấp dẫn, các hạt và nhiệm vụ không gian để nghiên cứu những thế giới xa xôi.',
      uk: 'Дізнайся, як астрономи збирають свідчення за допомогою світла, гравітації, частинок і космічних місій, щоб досліджувати далекі світи.',
      pl: 'Odkryj, jak astronomowie badają odległe światy, zbierając dane ze światła, grawitacji, cząstek i misji kosmicznych.',
    },
  },
});
