import { buildSkillConfig } from '@/utils';
import { cardinality_Skills_Ids } from './index.ids';

export const zero_Skill_Data = buildSkillConfig({
  id: cardinality_Skills_Ids.zero,
  name: {
    en: 'Understanding zero as an empty quantity',
    zh: '理解零表示没有物品',
    hi: 'शून्य को खाली मात्रा के रूप में समझना',
    es: 'Comprender el cero como cantidad nula',
    ar: 'فهم الصفر بوصفه كمية معدومة',
    fr: 'Comprendre zéro comme une quantité nulle',
    bn: 'শূন্যকে কোনো বস্তু না থাকার পরিমাণ হিসেবে বোঝা',
    pt: 'Compreender o zero como ausência de quantidade',
    ur: 'صفر کو خالی مقدار کے طور پر سمجھنا',
    id: 'Memahami nol sebagai jumlah yang kosong',
    de: 'Null als leere Menge verstehen',
    ja: 'ゼロを何もない数量として理解する',
    ko: '0을 아무것도 없는 수량으로 이해하기',
    tr: 'Sıfırı boş miktar olarak anlama',
    vi: 'Hiểu số không là số lượng bằng không',
    ta: 'பூஜ்ஜியத்தைப் பொருள்கள் இல்லாத அளவாகப் புரிந்துகொள்ளுதல்',
    te: 'సున్నాను వస్తువులు లేని పరిమాణంగా అర్థం చేసుకోవడం',
    mr: 'शून्य म्हणजे रिकामी संख्या समजणे',
    ms: 'Memahami sifar sebagai kuantiti kosong',
    he: 'הבנת אפס ככמות ריקה',
    pl: 'Rozumienie zera jako braku elementów',
    uk: 'Розуміння нуля як порожньої кількості',
  },
});
