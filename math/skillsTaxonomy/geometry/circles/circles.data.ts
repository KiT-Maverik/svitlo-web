import { buildSkillGroupConfig } from '@/utils';
import { circles_SkillGroup_Ids } from './circles.ids';
import { circles_Skills_Ids } from './skills/index.ids';

export const circles_SkillGroup_Data = buildSkillGroupConfig({
  id: circles_SkillGroup_Ids.circles,
  name: {
    en: "Circles and disks",
    zh: "圆周与圆面",
    hi: "वृत्त और चक्र",
    es: "Circunferencias y círculos",
    ar: "الدوائر والأقراص",
    fr: "Cercles et disques",
    bn: "বৃত্ত ও বৃত্তাকার ক্ষেত্র",
    pt: "Circunferências e círculos",
    ur: "دائرے اور گول سطحیں",
    id: "Lingkaran dan daerah lingkaran",
    de: "Kreise und Kreisflächen",
    ja: "円周と円",
    ko: "원과 원판",
    tr: "Çember ve daire",
    vi: "Đường tròn và hình tròn",
    ta: "வட்டக் கோடும் வட்டப் பரப்பும்",
    te: "వృత్త రేఖలు మరియు వృత్త ప్రాంతాలు",
    mr: "वर्तुळे आणि वर्तुळाकार क्षेत्रे",
    ms: "Bulatan dan cakera",
    he: "מעגלים ועיגולים",
    pl: "Okręgi i koła",
    uk: "Коло та круг",
  },
  skillIds: circles_Skills_Ids,
});
