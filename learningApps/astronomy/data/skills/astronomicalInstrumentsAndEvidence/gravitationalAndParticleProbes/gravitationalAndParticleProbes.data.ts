import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  gravitationalLensing_Skill_Data,
  gravitationalWaveAstronomy_Skill_Data,
  multimessengerEvidence_Skill_Data,
  neutrinoAstronomy_Skill_Data,
} from './skills';

export const gravitationalAndParticleProbes_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'gravitationalAndParticleProbes',
  id: '13ffe4cf-acb8-40f7-b43a-59b10d38eb18',
  name: {
    en: 'Gravitational and Particle Probes',
    uk: 'Гравітаційні та частинкові методи дослідження',
    pl: 'Badania grawitacyjne i cząstkowe',
    es: 'Observaciones gravitacionales y de partículas',
    fr: 'Observations gravitationnelles et de particules',
    de: 'Gravitations- und Teilchensonden',
    pt: 'Investigações gravitacionais e por partículas',
    id: 'Penyelidikan melalui gravitasi dan partikel',
    tr: 'Kütleçekimsel ve parçacık temelli gözlemler',
    zh: '引力与粒子探测',
    ja: '重力と粒子による観測',
    ko: '중력 및 입자 탐사',
    ar: 'الرصد بالجاذبية والجسيمات',
    hi: 'गुरुत्वीय और कण-आधारित अध्ययन',
    he: 'תצפיות באמצעות כבידה וחלקיקים',
    vi: 'Thăm dò bằng hấp dẫn và hạt',
  },
  skills: {
    gravitationalLensing: gravitationalLensing_Skill_Data,
    gravitationalWaveAstronomy: gravitationalWaveAstronomy_Skill_Data,
    multimessengerEvidence: multimessengerEvidence_Skill_Data,
    neutrinoAstronomy: neutrinoAstronomy_Skill_Data,
  },
  description: {
    methodological:
      'Gravitational lensing, gravitational waves and astrophysical particles supply information that differs from ordinary electromagnetic imaging and spectroscopy; a multimessenger inference combines distinct independent signals. Lensing is observed through light affected by gravity and is not itself a non-electromagnetic measurement.',
    frontend: {
      en: 'Investigate how gravity and particles provide evidence beyond ordinary astronomical images.',
      uk: 'Досліджуй, як гравітація й частинки дають дані, яких не побачиш на звичайних астрономічних знімках.',
      pl: 'Poznaj, jak grawitacja i cząstki dostarczają informacji niedostępnych na zwykłych obrazach astronomicznych.',
      es: 'Investiga cómo la gravedad y las partículas aportan pruebas que van más allá de las imágenes astronómicas habituales.',
      fr: 'Découvre comment la gravitation et les particules apportent des indices que les images astronomiques ordinaires ne montrent pas.',
      de: 'Erfahre, wie Gravitation und Teilchen Hinweise liefern, die gewöhnliche astronomische Bilder nicht zeigen.',
      pt: 'Investigue como a gravidade e as partículas fornecem evidências além das imagens astronômicas comuns.',
      id: 'Selidiki bagaimana gravitasi dan partikel memberi bukti yang tidak tampak pada citra astronomi biasa.',
      tr: 'Kütleçekimin ve parçacıkların sıradan astronomi görüntülerinin ötesinde nasıl kanıt sağladığını keşfet.',
      zh: '探索引力和粒子如何提供普通天文图像之外的证据。',
      ja: '重力や粒子が、通常の天体画像だけでは得られない証拠をどう示すか調べよう。',
      ko: '중력과 입자가 일반적인 천문 영상으로는 알 수 없는 증거를 어떻게 제공하는지 알아보세요.',
      ar: 'استكشف كيف تقدم الجاذبية والجسيمات أدلة تتجاوز الصور الفلكية المعتادة.',
      hi: 'जानें कि गुरुत्वाकर्षण और कण सामान्य खगोलीय तस्वीरों से परे कैसे प्रमाण देते हैं।',
      he: 'גלה כיצד כבידה וחלקיקים מספקים ראיות מעבר למה שרואים בתמונות אסטרונומיות רגילות.',
      vi: 'Tìm hiểu cách lực hấp dẫn và các hạt cung cấp bằng chứng vượt ra ngoài hình ảnh thiên văn thông thường.',
    },
  },
});
