import { buildSkillGroupConfig } from '@/utils';
import { perimeter_SkillGroup_Ids } from './perimeter.ids';
import { perimeter_Skills_Ids } from './skills/index.ids';

export const perimeter_SkillGroup_Data = buildSkillGroupConfig({
  id: perimeter_SkillGroup_Ids.perimeter,
  name: {
    en: "Perimeter",
    "lt": "Perimetras",
    "lv": "Perimetrs",
    "et": "Ümbermõõt",
    "be": "Пэрымэтар",
    "ka": "პერიმეტრი",
    "kk": "Периметр",
    zh: "周长",
    hi: "परिमाप",
    es: "Perímetro",
    ar: "المحيط",
    fr: "Périmètre",
    bn: "পরিসীমা",
    pt: "Perímetro",
    ur: "محیط",
    id: "Keliling",
    de: "Umfang",
    ja: "周の長さ",
    ko: "둘레",
    tr: "Çevre",
    vi: "Chu vi",
    ta: "சுற்றளவு",
    te: "చుట్టుకొలత",
    mr: "परिमिती",
    ms: "Perimeter",
    he: "היקף",
    pl: "Obwód",
    uk: "Периметр",
  },
  skillIds: perimeter_Skills_Ids,
});
