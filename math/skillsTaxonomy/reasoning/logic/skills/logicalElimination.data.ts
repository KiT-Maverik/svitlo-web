import { buildSkillConfig } from '@/utils';
import { logic_Skills_Ids } from './index.ids';

export const logicalElimination_Skill_Data = buildSkillConfig({
  id: logic_Skills_Ids.logicalElimination,
  name: {
    en: "Eliminating impossible options in a logical problem",
    zh: "在逻辑问题中排除不可能的选项",
    hi: "तार्किक प्रश्न में असंभव विकल्प हटाना",
    es: "Descartar opciones imposibles en un problema lógico",
    ar: "استبعاد الخيارات المستحيلة في مسألة منطقية",
    fr: "Éliminer les possibilités impossibles dans un problème logique",
    bn: "যুক্তির সমস্যায় অসম্ভব বিকল্প বাদ দেওয়া",
    pt: "Eliminar opções impossíveis em um problema lógico",
    ur: "منطقی مسئلے میں ناممکن اختیارات کو خارج کرنا",
    id: "Mengeliminasi pilihan yang tidak mungkin dalam soal logika",
    de: "Unmögliche Möglichkeiten in einer Logikaufgabe ausschließen",
    ja: "論理問題で不可能な選択肢を除外する",
    ko: "논리 문제에서 불가능한 선택지 제거하기",
    tr: "Mantık probleminde imkânsız seçenekleri eleme",
    vi: "Loại trừ phương án không thể xảy ra trong bài toán logic",
    ta: "தர்க்கச் சிக்கலில் சாத்தியமற்ற தேர்வுகளை நீக்குதல்",
    te: "తార్కిక సమస్యలో అసాధ్యమైన ఎంపికలను తొలగించడం",
    mr: "तर्कशास्त्रीय प्रश्नात अशक्य पर्याय वगळणे",
    ms: "Menyingkirkan pilihan mustahil dalam masalah logik",
    he: "שלילת אפשרויות בלתי אפשריות בבעיה לוגית",
    pl: "Eliminowanie niemożliwych opcji w zadaniu logicznym",
    uk: "Виключення неможливих варіантів у логічній задачі",
  },
});
