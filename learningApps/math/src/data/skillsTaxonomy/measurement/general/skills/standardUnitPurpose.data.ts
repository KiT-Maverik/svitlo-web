import { buildSkillConfig } from '@svitlo/engine/taxonomy';
import { general_Skills_Ids } from './index.ids';

export const standardUnitPurpose_Skill_Data = buildSkillConfig({
  id: general_Skills_Ids.standardUnitPurpose,
  name: {
    "en": "Explaining why common measurement units are needed",
    "lt": "Bendrų matavimo vienetų poreikio aiškinimas",
    "lv": "Kopīgu mērvienību nepieciešamības skaidrošana",
    "et": "Ühiste mõõtühikute vajalikkuse selgitamine",
    "be": "Тлумачэньне патрэбы ў агульных адзінках вымярэньня",
    "ka": "საერთო საზომი ერთეულების საჭიროების ახსნა",
    "kk": "Ортақ өлшем бірліктерінің қажеттілігін түсіндіру",
    "zh": "解释为什么需要统一的测量单位",
    "hi": "एकसमान मापन इकाइयों की ज़रूरत समझाना",
    "es": "Explicar por qué se necesitan unidades comunes de medida",
    "ar": "تفسير الحاجة إلى وحدات قياس موحدة",
    "fr": "Expliquer pourquoi des unités communes sont nécessaires",
    "bn": "একই পরিমাপ একক কেন প্রয়োজন তা ব্যাখ্যা করা",
    "pt": "Explicar por que são necessárias unidades de medida comuns",
    "ur": "مشترکہ پیمائشی اکائیوں کی ضرورت سمجھانا",
    "id": "Menjelaskan perlunya satuan pengukuran yang sama",
    "de": "Erklären, warum einheitliche Maßeinheiten nötig sind",
    "ja": "共通の測定単位が必要な理由を説明する",
    "ko": "공통 측정 단위가 필요한 이유 설명하기",
    "tr": "Ortak ölçü birimlerinin neden gerekli olduğunu açıklama",
    "vi": "Giải thích vì sao cần đơn vị đo thống nhất",
    "ta": "பொதுவான அளவீட்டு அலகுகள் ஏன் தேவை என்பதை விளக்குதல்",
    "te": "ఉమ్మడి కొలత ప్రమాణాలు ఎందుకు అవసరమో వివరించడం",
    "mr": "समान मापन एककांची गरज स्पष्ट करणे",
    "ms": "Menjelaskan sebab unit ukuran seragam diperlukan",
    "he": "הסבר מדוע נחוצות יחידות מדידה מוסכמות",
    "pl": "Wyjaśnianie potrzeby wspólnych jednostek miary",
    "uk": "Пояснення потреби в узгоджених одиницях вимірювання"
  },
  description: { methodological: "Measurements can be compared meaningfully only with their quantities and units. Equivalent units require conversion to a common scale; equal numerals in different units can represent different magnitudes." },
});
