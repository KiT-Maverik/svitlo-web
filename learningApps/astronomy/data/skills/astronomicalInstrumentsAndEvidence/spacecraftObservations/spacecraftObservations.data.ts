import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  flybyMeasurements_Skill_Data,
  landersAndRoversAsScientificProbes_Skill_Data,
  orbitalMeasurements_Skill_Data,
  sampleReturnEvidence_Skill_Data,
} from './skills';

export const spacecraftObservations_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'spacecraftObservations',
  id: 'c6f1e706-cd72-4036-b85f-2ee7e37b22f8',
  name: {
    en: 'Spacecraft Observations',
    uk: 'Спостереження з космічних апаратів',
    pl: 'Obserwacje za pomocą sond kosmicznych',
    es: 'Observaciones con sondas espaciales',
    fr: 'Observations par sondes spatiales',
    de: 'Beobachtungen mit Raumsonden',
    pt: 'Observações com sondas espaciais',
    id: 'Pengamatan dengan wahana antariksa',
    tr: 'Uzay araçlarıyla gözlemler',
    zh: '航天器观测',
    ja: '宇宙探査機による観測',
    ko: '우주 탐사선 관측',
    ar: 'الرصد بواسطة المركبات الفضائية',
    hi: 'अंतरिक्ष यानों से अवलोकन',
    he: 'תצפיות באמצעות חלליות',
    vi: 'Quan sát bằng tàu thăm dò không gian',
  },
  skills: {
    flybyMeasurements: flybyMeasurements_Skill_Data,
    landersAndRoversAsScientificProbes: landersAndRoversAsScientificProbes_Skill_Data,
    orbitalMeasurements: orbitalMeasurements_Skill_Data,
    sampleReturnEvidence: sampleReturnEvidence_Skill_Data,
  },
  description: {
    methodological:
      'Remote flybys, orbiters, landers and sample-return missions provide different access to remote worlds. These competencies concern scientific evidence, temporal coverage, sampling limits and interpretation; they exclude the engineering design of the vehicles.',
    frontend: {
      en: 'Explore what different spacecraft missions can measure about distant worlds.',
      uk: 'Досліджуй, що різні космічні місії можуть виміряти на далеких світах.',
      pl: 'Poznaj, co różne misje kosmiczne mogą zmierzyć na odległych światach.',
      es: 'Descubre qué pueden medir distintas misiones espaciales en mundos lejanos.',
      fr: 'Découvre ce que différentes missions spatiales peuvent mesurer sur des mondes lointains.',
      de: 'Erkunde, was verschiedene Raumfahrtmissionen über ferne Welten messen können.',
      pt: 'Explore o que diferentes missões espaciais podem medir em mundos distantes.',
      id: 'Jelajahi apa yang dapat diukur oleh berbagai misi antariksa di dunia yang jauh.',
      tr: 'Farklı uzay görevlerinin uzak dünyalarda neleri ölçebildiğini keşfet.',
      zh: '探索不同的太空任务可以测量遥远天体的哪些特征。',
      ja: 'さまざまな宇宙探査ミッションが遠い天体について何を測定できるか調べよう。',
      ko: '다양한 우주 탐사 임무가 먼 천체에서 무엇을 측정할 수 있는지 알아보세요.',
      ar: 'استكشف ما تستطيع البعثات الفضائية المختلفة قياسه في العوالم البعيدة.',
      hi: 'जानें कि अलग-अलग अंतरिक्ष अभियान दूरस्थ संसारों के बारे में क्या माप सकते हैं।',
      he: 'גלה מה משימות חלל שונות יכולות למדוד בעולמות רחוקים.',
      vi: 'Khám phá những gì các sứ mệnh không gian khác nhau có thể đo đạc trên các thế giới xa xôi.',
    },
  },
});
