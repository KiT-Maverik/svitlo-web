import { buildSkillConfig } from '@/utils';
import { transactions_Skills_Ids } from './index.ids';

export const budgetConstraint_Skill_Data = buildSkillConfig({
  id: transactions_Skills_Ids.budgetConstraint,
  name: {
    en: 'Choosing purchases within a budget',
    zh: '在预算范围内选择购买商品',
    hi: 'बजट के भीतर खरीदारी चुनना',
    es: 'Elegir compras dentro de un presupuesto',
    ar: 'اختيار المشتريات ضمن ميزانية محددة',
    fr: 'Choisir des achats dans la limite d’un budget',
    bn: 'বাজেটের মধ্যে কেনাকাটা বেছে নেওয়া',
    pt: 'Escolher compras dentro de um orçamento',
    ur: 'بجٹ کے اندر خریداری کا انتخاب کرنا',
    id: 'Memilih pembelian sesuai anggaran',
    de: 'Einkäufe innerhalb eines Budgets auswählen',
    ja: '予算内で買うものを選ぶ',
    ko: '예산에 맞춰 구매할 물건 고르기',
    tr: 'Bütçeye uygun alışverişleri seçme',
    vi: 'Chọn hàng mua trong phạm vi ngân sách',
    ta: 'வரவுசெலவுத் திட்டத்திற்குள் பொருட்களைத் தேர்ந்தெடுத்தல்',
    te: 'బడ్జెట్‌కు లోబడి కొనుగోళ్లను ఎంచుకోవడం',
    mr: 'बजेटमध्ये बसणाऱ्या खरेदी निवडणे',
    ms: 'Memilih pembelian mengikut bajet',
    he: 'בחירת קניות במסגרת תקציב',
    pl: 'Wybieranie zakupów w ramach budżetu',
    uk: 'Вибір покупок у межах бюджету',
  },
});
