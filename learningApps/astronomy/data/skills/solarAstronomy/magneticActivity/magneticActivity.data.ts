import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  coronalMassEjections_Skill_Data,
  solarActivityCycle_Skill_Data,
  solarFlares_Skill_Data,
  sunspots_Skill_Data,
} from './skills';

export const magneticActivity_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'magneticActivity',
  id: '477e03be-7e47-4d37-b428-ac6c4066addd',
  name: {
    en: 'Magnetic Activity',
    uk: 'Магнітна активність Сонця',
    pl: 'Aktywność magnetyczna Słońca',
    es: 'Actividad magnética solar',
    fr: 'Activité magnétique solaire',
    de: 'Magnetische Sonnenaktivität',
    pt: 'Atividade magnética solar',
    id: 'Aktivitas magnetik Matahari',
    tr: 'Güneş\'in manyetik etkinliği',
    zh: '太阳磁活动',
    ja: '太陽の磁気活動',
    ko: '태양의 자기 활동',
    ar: 'النشاط المغناطيسي للشمس',
    hi: 'सूर्य की चुंबकीय गतिविधि',
    he: 'הפעילות המגנטית של השמש',
    vi: 'Hoạt động từ tính của Mặt Trời',
  },
  skills: {
    coronalMassEjections: coronalMassEjections_Skill_Data,
    solarActivityCycle: solarActivityCycle_Skill_Data,
    solarFlares: solarFlares_Skill_Data,
    sunspots: sunspots_Skill_Data,
  },
  description: {
    methodological:
      'Magnetic fields in solar plasma produce time-variable surface features and energetic events rather than a perfectly steady star.',
    frontend: {
      en: 'Explore how changing solar magnetic fields produce spots and energetic events.',
      uk: 'Досліджуй, як зміни магнітних полів Сонця спричиняють появу плям і потужні спалахи.',
      pl: 'Odkryj, jak zmiany pól magnetycznych Słońca powodują powstawanie plam i gwałtownych zjawisk.',
      es: 'Explora cómo los cambios en los campos magnéticos solares producen manchas y fenómenos energéticos.',
      fr: 'Découvre comment les variations des champs magnétiques du Soleil produisent des taches et des phénomènes énergétiques.',
      de: 'Erkunde, wie veränderliche Magnetfelder auf der Sonne Flecken und energiereiche Ereignisse erzeugen.',
      pt: 'Explore como as mudanças nos campos magnéticos do Sol produzem manchas e eventos energéticos.',
      id: 'Jelajahi bagaimana perubahan medan magnet Matahari menyebabkan bintik dan peristiwa berenergi tinggi.',
      tr: 'Güneş\'in değişen manyetik alanlarının lekeleri ve yüksek enerjili olayları nasıl oluşturduğunu keşfet.',
      zh: '探索太阳磁场的变化如何形成太阳黑子并引发高能事件。',
      ja: '太陽の磁場の変化が黒点や高エネルギー現象を生み出す仕組みを調べよう。',
      ko: '태양 자기장의 변화가 흑점과 고에너지 현상을 어떻게 일으키는지 알아보세요.',
      ar: 'استكشف كيف تؤدي تغيرات المجالات المغناطيسية للشمس إلى ظهور البقع وحدوث ظواهر شديدة الطاقة.',
      hi: 'जानें कि सूर्य के बदलते चुंबकीय क्षेत्र धब्बे और उच्च-ऊर्जा घटनाएँ कैसे पैदा करते हैं।',
      he: 'גלה כיצד שינויים בשדות המגנטיים של השמש יוצרים כתמים ואירועים עתירי אנרגיה.',
      vi: 'Khám phá cách những thay đổi trong từ trường Mặt Trời tạo ra vết đen và các hiện tượng năng lượng cao.',
    },
  },
});
