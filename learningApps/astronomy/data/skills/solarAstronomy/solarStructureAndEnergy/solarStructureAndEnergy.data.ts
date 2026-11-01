import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  solarAtmosphere_Skill_Data,
  solarInterior_Skill_Data,
  solarLuminosity_Skill_Data,
  solarNuclearFusion_Skill_Data,
} from './skills';

export const solarStructureAndEnergy_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'solarStructureAndEnergy',
  id: 'd007c001-5fe3-42fd-951c-3e5507073f31',
  name: {
    en: 'Solar Structure and Energy',
    uk: 'Будова й енергія Сонця',
    pl: 'Budowa Słońca i jego energia',
    es: 'Estructura y energía del Sol',
    fr: 'Structure et énergie du Soleil',
    de: 'Aufbau und Energie der Sonne',
    pt: 'Estrutura e energia do Sol',
    id: 'Struktur dan energi Matahari',
    tr: 'Güneş\'in yapısı ve enerjisi',
    zh: '太阳的结构与能量',
    ja: '太陽の構造とエネルギー',
    ko: '태양의 구조와 에너지',
    ar: 'بنية الشمس وطاقتها',
    hi: 'सूर्य की संरचना और ऊर्जा',
    he: 'מבנה השמש והאנרגיה שלה',
    vi: 'Cấu trúc và năng lượng Mặt Trời',
  },
  skills: {
    solarAtmosphere: solarAtmosphere_Skill_Data,
    solarInterior: solarInterior_Skill_Data,
    solarLuminosity: solarLuminosity_Skill_Data,
    solarNuclearFusion: solarNuclearFusion_Skill_Data,
  },
  description: {
    methodological:
      'Solar radiation originates from processes in the interior and travels outward through distinct plasma and atmospheric regions.',
    frontend: {
      en: 'Learn how energy moves from deep inside the Sun to the space around it.',
      uk: 'Дізнайся, як енергія проходить із глибин Сонця до навколишнього космосу.',
      pl: 'Dowiedz się, jak energia przemieszcza się z wnętrza Słońca do otaczającej je przestrzeni.',
      es: 'Descubre cómo la energía viaja desde el interior del Sol hasta el espacio que lo rodea.',
      fr: 'Découvre comment l’énergie passe des profondeurs du Soleil à l’espace qui l’entoure.',
      de: 'Erfahre, wie Energie aus dem Inneren der Sonne in den umgebenden Weltraum gelangt.',
      pt: 'Descubra como a energia se desloca do interior do Sol até o espaço ao seu redor.',
      id: 'Pelajari bagaimana energi bergerak dari bagian dalam Matahari menuju ruang angkasa di sekitarnya.',
      tr: 'Enerjinin Güneş\'in derinliklerinden çevresindeki uzaya nasıl taşındığını öğren.',
      zh: '了解能量如何从太阳内部传递到周围太空。',
      ja: '太陽の奥深くから周囲の宇宙空間へエネルギーが伝わる仕組みを学ぼう。',
      ko: '태양 깊은 내부에서 주변 우주 공간으로 에너지가 어떻게 이동하는지 알아보세요.',
      ar: 'تعرّف كيف تنتقل الطاقة من أعماق الشمس إلى الفضاء المحيط بها.',
      hi: 'जानें कि ऊर्जा सूर्य के भीतर से बाहर आसपास के अंतरिक्ष तक कैसे पहुँचती है।',
      he: 'גלה כיצד אנרגיה נעה ממעמקי השמש אל החלל שסביבה.',
      vi: 'Tìm hiểu cách năng lượng truyền từ sâu bên trong Mặt Trời ra không gian xung quanh.',
    },
  },
});
