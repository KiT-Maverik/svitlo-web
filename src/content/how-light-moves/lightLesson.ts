import type { Lesson_Config } from '@types';
import { createTextResource } from '@/utils';
import { practiceSectionConfig } from './sections/practice/sectionConfig';
import { quizSectionConfig } from './sections/quiz/sectionConfig';
import { theorySectionConfig } from './sections/theory/sectionConfig';
import { locales as rayLocales } from './scenes/LightRayDiagram/lightRayDiagram.locale';
import { locales as simulationLocales } from './scenes/LightPropagationSimulation/lightPropagationSimulation.locale';
import { locales as checkpointLocales } from './sections/theory/knowledgeCheckpoint.locale';
import { locales as practiceLocales } from './scenes/MediumPractice/MediumPractice.locale';

export const lightLesson = {
  id: 'd3048d21-8690-5255-b62c-984c69ac272c',
  slug: 'how-light-moves',
  title: createTextResource(
    'd5ee2ac8-0d95-5f98-8f16-31400ea7a85b',
    {
      'en-US': 'How Light Travels',
      'zh-Hans-CN': '光是如何传播的',
      'hi-IN': 'प्रकाश कैसे चलता है',
      'es-ES': 'Cómo se propaga la luz',
      'ar-SA': 'كيف ينتشر الضوء',
      'fr-FR': 'Comment la lumière se propage',
      'bn-BD': 'আলো কীভাবে চলাচল করে',
      'pt-BR': 'Como a luz se propaga',
      'ur-PK': 'روشنی کیسے سفر کرتی ہے',
      'id-ID': 'Bagaimana Cahaya Merambat',
      'de-DE': 'Wie sich Licht ausbreitet',
      'ja-JP': '光はどのように進むのか',
      'ko-KR': '빛은 어떻게 이동할까',
      'tr-TR': 'Işık Nasıl Yayılır?',
      'vi-VN': 'Ánh sáng truyền đi như thế nào',
      'ta-IN': 'ஒளி எவ்வாறு பயணிக்கிறது',
      'te-IN': 'కాంతి ఎలా ప్రయాణిస్తుంది',
      'mr-IN': 'प्रकाश कसा प्रवास करतो',
      'ms-MY': 'Bagaimana Cahaya Bergerak',
      'he-IL': 'כיצד האור מתקדם',
      'pl-PL': 'Jak rozchodzi się światło',
      'uk-UA': 'Як рухається світло',
    },
  ),
  requireQuiz: true,
  sceneLocales: {
    ray: rayLocales,
    simulation: simulationLocales,
    checkpoint: checkpointLocales,
    practice: practiceLocales,
  },
  sections: {
    allowNavigation: true,
    allowSkipping: true,
    showIndexes: true,
    content: [theorySectionConfig, practiceSectionConfig, quizSectionConfig],
  },
} satisfies Lesson_Config;
