import type { Quiz_Config } from '@types';
import { createTextResource } from '@/utils/createTextResource/createTextResource';
import { questionBank } from './questions';

export const quizSectionConfig: Quiz_Config = {
  id: '557ced91-32c2-5798-a114-19a63e6d35b6',
  sectionId: '2b17e601-474e-551c-a556-a42a8e653c31',
  feedbackMode: 'immediate',
  grading: { mode: 'percentage', successThreshold: 70 },
  interaction: { retries: -1, showErrors: true, showCorrectAnswers: true, allowExplanations: true, allowDeferring: true, allowQuestionNavigation: true, skippable: true },
  questionBank,
  results: { visibility: 'immediate', showScore: true },
  screen: {
    welcome: {
      resources: [
        createTextResource(
          '485c38a3-25f7-5c47-be4a-bfaa32e9424e',
          {
            'en-US': "Let's check how light travels.",
            'zh-Hans-CN': '让我们检验一下光是如何传播的。',
            'hi-IN': 'आइए जाँचें कि प्रकाश कैसे चलता है।',
            'es-ES': 'Comprobemos cómo se propaga la luz.',
            'ar-SA': 'لنتحقق من كيفية انتشار الضوء.',
            'fr-FR': 'Vérifions comment la lumière se propage.',
            'bn-BD': 'চলুন যাচাই করি আলো কীভাবে চলাচল করে।',
            'pt-BR': 'Vamos conferir como a luz se propaga.',
            'ur-PK': 'آئیے جانچیں کہ روشنی کیسے سفر کرتی ہے۔',
            'id-ID': 'Mari kita periksa bagaimana cahaya merambat.',
            'de-DE': 'Prüfen wir, wie sich Licht ausbreitet.',
            'ja-JP': '光がどのように進むか、確かめましょう。',
            'ko-KR': '빛이 어떻게 이동하는지 확인해 봅시다.',
            'tr-TR': 'Işığın nasıl yayıldığını kontrol edelim.',
            'vi-VN': 'Hãy kiểm tra xem ánh sáng truyền đi như thế nào.',
            'ta-IN': 'ஒளி எவ்வாறு பயணிக்கிறது என்பதைச் சரிபார்ப்போம்.',
            'te-IN': 'కాంతి ఎలా ప్రయాణిస్తుందో పరిశీలిద్దాం.',
            'mr-IN': 'प्रकाश कसा प्रवास करतो ते तपासूया.',
            'ms-MY': 'Mari kita semak bagaimana cahaya bergerak.',
            'he-IL': 'בואו נבדוק כיצד האור מתקדם.',
            'pl-PL': 'Sprawdźmy, jak rozchodzi się światło.',
            'uk-UA': 'Перевірмо, як рухається світло.',
          },
        ),
      ],
    },
    ending: { success: { showDefaultContent: true }, fail: { showDefaultContent: true } },
  },
};
