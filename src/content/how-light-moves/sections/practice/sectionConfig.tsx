import type { LessonSection_Config } from '@types';
import { createTextResource } from '@/utils/createTextResource/createTextResource';
import MediumPractice from '@/components/lesson/MediumPractice';

const name = createTextResource(
  '3b5ac8f2-e075-59ed-bc54-04b3697f8635',
  {
    'en-US': 'Practice',
    'zh-Hans-CN': '练习',
    'hi-IN': 'अभ्यास',
    'es-ES': 'Práctica',
    'ar-SA': 'تدريب',
    'fr-FR': 'Pratique',
    'bn-BD': 'অনুশীলন',
    'pt-BR': 'Prática',
    'ur-PK': 'مشق',
    'id-ID': 'Latihan',
    'de-DE': 'Übung',
    'ja-JP': '練習',
    'ko-KR': '연습',
    'tr-TR': 'Alıştırma',
    'vi-VN': 'Luyện tập',
    'ta-IN': 'பயிற்சி',
    'te-IN': 'అభ్యాసం',
    'mr-IN': 'सराव',
    'ms-MY': 'Latihan',
    'he-IL': 'תרגול',
    'pl-PL': 'Ćwiczenie',
    'uk-UA': 'Практика',
  },
);

const task = createTextResource(
  '6e9b3471-a055-546f-8502-87df18302f6f',
  {
    'en-US': 'Compare the speed of light in vacuum, air and water.',
    'zh-Hans-CN': '比较光在真空、空气和水中的传播速度。',
    'hi-IN': 'निर्वात, हवा और पानी में प्रकाश की गति की तुलना करें।',
    'es-ES': 'Compara la velocidad de la luz en el vacío, el aire y el agua.',
    'ar-SA': 'قارِن سرعة الضوء في الفراغ والهواء والماء.',
    'fr-FR': 'Compare la vitesse de la lumière dans le vide, l’air et l’eau.',
    'bn-BD': 'শূন্যস্থান, বায়ু ও পানিতে আলোর গতির তুলনা করো।',
    'pt-BR': 'Compare a velocidade da luz no vácuo, no ar e na água.',
    'ur-PK': 'خلا، ہوا اور پانی میں روشنی کی رفتار کا موازنہ کریں۔',
    'id-ID': 'Bandingkan kecepatan cahaya di ruang hampa, udara, dan air.',
    'de-DE': 'Vergleiche die Lichtgeschwindigkeit im Vakuum, in Luft und in Wasser.',
    'ja-JP': '真空、空気、水の中での光の速さを比べましょう。',
    'ko-KR': '진공, 공기, 물에서 빛의 속도를 비교해 보세요.',
    'tr-TR': 'Işığın boşlukta, havada ve suda yayılma hızını karşılaştır.',
    'vi-VN': 'So sánh tốc độ ánh sáng trong chân không, không khí và nước.',
    'ta-IN': 'வெற்றிடம், காற்று மற்றும் நீரில் ஒளியின் வேகத்தை ஒப்பிடுங்கள்.',
    'te-IN': 'శూన్యం, గాలి మరియు నీటిలో కాంతి వేగాన్ని పోల్చండి.',
    'mr-IN': 'निर्वात, हवा आणि पाण्यातील प्रकाशाच्या वेगाची तुलना करा.',
    'ms-MY': 'Bandingkan kelajuan cahaya dalam vakum, udara dan air.',
    'he-IL': 'השוו את מהירות האור בריק, באוויר ובמים.',
    'pl-PL': 'Porównaj prędkość światła w próżni, powietrzu i wodzie.',
    'uk-UA': 'Порівняй швидкість світла у вакуумі, повітрі та воді.',
  },
);

export const practiceSectionConfig: LessonSection_Config = {
  id: '60032520-2238-5600-a38c-02b7ac0b8695',
  name,
  skippable: true,
  content: [task, <MediumPractice key="medium-practice" />],
};
