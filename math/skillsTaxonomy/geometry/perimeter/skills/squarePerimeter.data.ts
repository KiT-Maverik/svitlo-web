import { buildSkillConfig } from '@/utils';
import { perimeter_Skills_Ids } from './index.ids';

export const squarePerimeter_Skill_Data = buildSkillConfig({
  id: perimeter_Skills_Ids.squarePerimeter,
  name: {
    en: "Calculating the perimeter of a square",
    zh: "计算正方形周长",
    hi: "वर्ग का परिमाप निकालना",
    es: "Calcular el perímetro de un cuadrado",
    ar: "حساب محيط المربع",
    fr: "Calculer le périmètre d’un carré",
    bn: "বর্গক্ষেত্রের পরিসীমা নির্ণয়",
    pt: "Calcular o perímetro de um quadrado",
    ur: "مربع کا محیط معلوم کرنا",
    id: "Menghitung keliling persegi",
    de: "Umfang eines Quadrats berechnen",
    ja: "正方形の周の長さを計算する",
    ko: "정사각형 둘레 계산하기",
    tr: "Karenin çevresini hesaplama",
    vi: "Tính chu vi hình vuông",
    ta: "சதுரத்தின் சுற்றளவைக் கணக்கிடுதல்",
    te: "చతురస్ర పరిధిని లెక్కించడం",
    mr: "चौरसाची परिमिती काढणे",
    ms: "Mengira perimeter segi empat sama",
    he: "חישוב היקף ריבוע",
    pl: "Obliczanie obwodu kwadratu",
    uk: "Обчислення периметра квадрата",
  },
});
