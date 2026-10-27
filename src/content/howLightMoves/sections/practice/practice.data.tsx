import type { LessonSection_Config } from '@types';
import { createTextResource } from '@/utils';
import { scene } from '../../resources/scenes';
import { id } from '../../howLightMoves.constants';

const name = createTextResource(
  '3b5ac8f2-e075-59ed-bc54-04b3697f8635',
  {
    en: 'Practice',
    zh: '练习',
    hi: 'अभ्यास',
    es: 'Práctica',
    ar: 'تدريب',
    fr: 'Pratique',
    bn: 'অনুশীলন',
    pt: 'Prática',
    ur: 'مشق',
    id: 'Latihan',
    de: 'Übung',
    ja: '練習',
    ko: '연습',
    tr: 'Alıştırma',
    vi: 'Luyện tập',
    ta: 'பயிற்சி',
    te: 'అభ్యాసం',
    mr: 'सराव',
    ms: 'Latihan',
    he: 'תרגול',
    pl: 'Ćwiczenie',
    uk: 'Практика',
  },
);

const task = createTextResource(
  '6e9b3471-a055-546f-8502-87df18302f6f',
  {
    en: 'Compare the speed of light in vacuum, air and water.',
    zh: '比较光在真空、空气和水中的传播速度。',
    hi: 'निर्वात, हवा और पानी में प्रकाश की गति की तुलना करें।',
    es: 'Compara la velocidad de la luz en el vacío, el aire y el agua.',
    ar: 'قارِن سرعة الضوء في الفراغ والهواء والماء.',
    fr: 'Compare la vitesse de la lumière dans le vide, l’air et l’eau.',
    bn: 'শূন্যস্থান, বায়ু ও পানিতে আলোর গতির তুলনা করো।',
    pt: 'Compare a velocidade da luz no vácuo, no ar e na água.',
    ur: 'خلا، ہوا اور پانی میں روشنی کی رفتار کا موازنہ کریں۔',
    id: 'Bandingkan kecepatan cahaya di ruang hampa, udara, dan air.',
    de: 'Vergleiche die Lichtgeschwindigkeit im Vakuum, in Luft und in Wasser.',
    ja: '真空、空気、水の中での光の速さを比べましょう。',
    ko: '진공, 공기, 물에서 빛의 속도를 비교해 보세요.',
    tr: 'Işığın boşlukta, havada ve suda yayılma hızını karşılaştır.',
    vi: 'So sánh tốc độ ánh sáng trong chân không, không khí và nước.',
    ta: 'வெற்றிடம், காற்று மற்றும் நீரில் ஒளியின் வேகத்தை ஒப்பிடுங்கள்.',
    te: 'శూన్యం, గాలి మరియు నీటిలో కాంతి వేగాన్ని పోల్చండి.',
    mr: 'निर्वात, हवा आणि पाण्यातील प्रकाशाच्या वेगाची तुलना करा.',
    ms: 'Bandingkan kelajuan cahaya dalam vakum, udara dan air.',
    he: 'השוו את מהירות האור בריק, באוויר ובמים.',
    pl: 'Porównaj prędkość światła w próżni, powietrzu i wodzie.',
    uk: 'Порівняй швидкість світла у вакуумі, повітрі та воді.',
  },
);

export const practice: LessonSection_Config = {
  id: id.section.practice,
    lessonId: id.lesson,
  name,
  skippable: true,
  content: [task, scene.mediumPractice],
};
