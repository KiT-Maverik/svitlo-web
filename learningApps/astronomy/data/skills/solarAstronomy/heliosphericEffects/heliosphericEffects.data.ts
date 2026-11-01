import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  auroralProcesses_Skill_Data,
  heliosphere_Skill_Data,
  solarWind_Skill_Data,
  spaceWeather_Skill_Data,
} from './skills';

export const heliosphericEffects_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'heliosphericEffects',
  id: 'f02ffa81-886b-4ba4-acd1-cfffe28487a9',
  name: {
    en: 'Heliospheric Effects',
    uk: 'Вплив геліосфери',
    pl: 'Oddziaływanie heliosfery',
    es: 'Efectos heliosféricos',
    fr: 'Effets héliosphériques',
    de: 'Auswirkungen der Heliosphäre',
    pt: 'Efeitos heliosféricos',
    id: 'Pengaruh heliosfer',
    tr: 'Heliosferin etkileri',
    zh: '日球层的影响',
    ja: '太陽圏の影響',
    ko: '태양권의 영향',
    ar: 'تأثيرات الغلاف الشمسي',
    hi: 'सौरमंडलीय प्रभाव',
    he: 'השפעות ההליוספירה',
    vi: 'Ảnh hưởng của nhật quyển',
  },
  skills: {
    auroralProcesses: auroralProcesses_Skill_Data,
    heliosphere: heliosphere_Skill_Data,
    solarWind: solarWind_Skill_Data,
    spaceWeather: spaceWeather_Skill_Data,
  },
  description: {
    methodological:
      'Solar material and magnetic fields extend outward and can influence planetary space environments even far from the solar surface.',
    frontend: {
      en: "Investigate how the Sun's particles and magnetic fields affect surrounding space.",
      uk: 'Досліджуй, як сонячні частинки та магнітні поля впливають на навколишній космічний простір.',
      pl: 'Zbadaj, jak cząstki pochodzące ze Słońca i pola magnetyczne wpływają na otaczającą przestrzeń kosmiczną.',
      es: 'Investiga cómo las partículas solares y los campos magnéticos afectan al espacio circundante.',
      fr: 'Étudie comment les particules du Soleil et les champs magnétiques influencent l’espace environnant.',
      de: 'Untersuche, wie Teilchen von der Sonne und Magnetfelder den umgebenden Weltraum beeinflussen.',
      pt: 'Investigue como as partículas solares e os campos magnéticos afetam o espaço ao redor.',
      id: 'Selidiki bagaimana partikel dari Matahari dan medan magnet memengaruhi ruang angkasa di sekitarnya.',
      tr: 'Güneş\'ten gelen parçacıkların ve manyetik alanların çevredeki uzayı nasıl etkilediğini araştır.',
      zh: '研究太阳粒子和磁场如何影响周围的太空环境。',
      ja: '太陽からの粒子や磁場が周囲の宇宙空間にどう影響するか調べよう。',
      ko: '태양에서 나오는 입자와 자기장이 주변 우주 공간에 어떤 영향을 미치는지 알아보세요.',
      ar: 'استكشف كيف تؤثر الجسيمات القادمة من الشمس والمجالات المغناطيسية في الفضاء المحيط.',
      hi: 'पता लगाएँ कि सूर्य से आने वाले कण और चुंबकीय क्षेत्र आसपास के अंतरिक्ष को कैसे प्रभावित करते हैं।',
      he: 'חקור כיצד חלקיקים מהשמש ושדות מגנטיים משפיעים על החלל שסביבה.',
      vi: 'Tìm hiểu cách các hạt từ Mặt Trời và từ trường ảnh hưởng đến không gian xung quanh.',
    },
  },
});
