import { buildSkillConfig } from '@/utils';
import { circles_Skills_Ids } from './index.ids';

export const drawCircle_Skill_Data = buildSkillConfig({
  id: circles_Skills_Ids.drawCircle,
  name: {
    en: "Drawing circles of a given radius with a compass",
    zh: "用圆规画指定半径的圆",
    hi: "परकार से दी गई त्रिज्या का वृत्त बनाना",
    es: "Trazar circunferencias con compás y radio dado",
    ar: "رسم دوائر بنصف قطر محدد بالفرجار",
    fr: "Tracer des cercles au compas avec un rayon donné",
    bn: "কম্পাস দিয়ে নির্দিষ্ট ব্যাসার্ধের বৃত্ত আঁকা",
    pt: "Traçar circunferências de raio dado com compasso",
    ur: "پرکار سے دیے گئے نصف قطر کا دائرہ بنانا",
    id: "Menggambar lingkaran berjari-jari tertentu dengan jangka",
    de: "Kreise mit vorgegebenem Radius zeichnen",
    ja: "コンパスで指定した半径の円を描く",
    ko: "컴퍼스로 주어진 반지름의 원 그리기",
    tr: "Pergelle verilen yarıçapta çember çizme",
    vi: "Vẽ đường tròn bán kính cho trước bằng compa",
    ta: "கவராயத்தால் கொடுக்கப்பட்ட ஆரத்தில் வட்டம் வரைதல்",
    te: "కంపాస్‌తో ఇచ్చిన వ్యాసార్థంలో వృత్తం గీయడం",
    mr: "कंपासने दिलेल्या त्रिज्येचे वर्तुळ काढणे",
    ms: "Melukis bulatan berjejari diberi dengan jangka lukis",
    he: "שרטוט מעגל ברדיוס נתון במחוגה",
    pl: "Rysowanie okręgów o zadanym promieniu cyrklem",
    uk: "Побудова кола заданого радіуса циркулем",
  },
});
