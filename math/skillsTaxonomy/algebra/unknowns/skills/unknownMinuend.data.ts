import { buildSkillConfig } from '@/utils';
import { unknowns_Skills_Ids } from './index.ids';

export const unknownMinuend_Skill_Data = buildSkillConfig({
  id: unknowns_Skills_Ids.unknownMinuend,
  name: {
    en: "Finding an unknown minuend",
    zh: "求未知被减数",
    hi: "अज्ञात घट्य ज्ञात करना",
    es: "Hallar un minuendo desconocido",
    ar: "إيجاد المطروح منه المجهول",
    fr: "Trouver un nombre de départ inconnu dans une soustraction",
    bn: "অজানা বিয়োজ্য নির্ণয়",
    pt: "Encontrar um minuendo desconhecido",
    ur: "نامعلوم منفی منہ معلوم کرنا",
    id: "Mencari bilangan yang dikurangi",
    de: "Einen unbekannten Minuenden finden",
    ja: "未知の被減数を求める",
    ko: "모르는 피감수 구하기",
    tr: "Bilinmeyen eksileni bulma",
    vi: "Tìm số bị trừ chưa biết",
    ta: "தெரியாத கழிக்கப்படும் எண்ணைக் காணுதல்",
    te: "తెలియని వియోజ్యాన్ని కనుగొనడం",
    mr: "अज्ञात वज्य संख्या शोधणे",
    ms: "Mencari nombor yang ditolak",
    he: "מציאת המחוסר הלא ידוע",
    pl: "Znajdowanie nieznanej odjemnej",
    uk: "Знаходження невідомого зменшуваного",
  },
});
