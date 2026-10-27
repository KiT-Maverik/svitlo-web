import { buildSkillConfig } from '@/utils';
import { models_Skills_Ids } from './index.ids';

export const chooseOperationAddSub_Skill_Data = buildSkillConfig({
  id: models_Skills_Ids.chooseOperationAddSub,
  name: {
    en: 'Choosing addition or subtraction',
    zh: '选择加法或减法',
    hi: 'जोड़ या घटाव चुनना',
    es: 'Elegir suma o resta',
    ar: 'اختيار الجمع أو الطرح',
    fr: 'Choisir addition ou soustraction',
    bn: 'যোগ বা বিয়োগ বেছে নেওয়া',
    pt: 'Escolher adição ou subtração',
    ur: 'جمع یا تفریق کا انتخاب',
    id: 'Memilih penjumlahan atau pengurangan',
    de: 'Addition oder Subtraktion auswählen',
    ja: '加法か減法を選ぶ',
    ko: '덧셈 또는 뺄셈 선택하기',
    tr: 'Toplama veya çıkarma seçme',
    vi: 'Chọn phép cộng hoặc trừ',
    ta: 'கூட்டல் அல்லது கழித்தலைத் தேர்ந்தெடுத்தல்',
    te: 'కూడిక లేదా తీసివేతను ఎంచుకోవడం',
    mr: 'बेरीज किंवा वजाबाकी निवडणे',
    ms: 'Memilih tambah atau tolak',
    he: 'בחירה בין חיבור לחיסור',
    pl: 'Wybór dodawania lub odejmowania',
    uk: 'Вибір додавання або віднімання',
  },
});
