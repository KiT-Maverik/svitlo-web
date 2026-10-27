import { buildSkillConfig } from '@/utils';
import { cardinality_Skills_Ids } from './index.ids';

export const groupAndCount_Skill_Data = buildSkillConfig({
  id: cardinality_Skills_Ids.groupAndCount,
  name: {
    "en-US": "Counting objects in groups of tens or hundreds",
    "zh-Hans-CN": "按十个或一百个分组计数",
    "hi-IN": "दहाइयों या सैकड़ों में समूह बनाकर गिनना",
    "es-ES": "Contar objetos agrupándolos en decenas o centenas",
    "ar-SA": "عد الأشياء في مجموعات من عشرات أو مئات",
    "fr-FR": "Compter des objets par groupes de dizaines ou de centaines",
    "bn-BD": "দশক বা শতকের দলে সাজিয়ে বস্তু গণনা",
    "pt-BR": "Contar objetos agrupados em dezenas ou centenas",
    "ur-PK": "دسیوں یا سینکڑوں کے گروہوں میں اشیا کی گنتی",
    "id-ID": "Menghitung benda dalam kelompok puluhan atau ratusan",
    "de-DE": "Gegenstände in Zehner- oder Hundertergruppen zählen",
    "ja-JP": "10個や100個ずつまとめて数える",
    "ko-KR": "물건을 10개 또는 100개씩 묶어 세기",
    "tr-TR": "Nesneleri onluk veya yüzlük gruplarla sayma",
    "vi-VN": "Đếm đồ vật theo nhóm chục hoặc trăm",
    "ta-IN": "பத்துகள் அல்லது நூறுகள் கொண்ட குழுக்களாக எண்ணுதல்",
    "te-IN": "పదులు లేదా వందల సమూహాలుగా వస్తువులను లెక్కించడం",
    "mr-IN": "वस्तूंचे दहाच्या किंवा शंभराच्या गटांनी मोजणे",
    "ms-MY": "Membilang objek dalam kumpulan puluh atau ratus",
    "he-IL": "ספירת פריטים בקבוצות של עשרות או מאות",
    "pl-PL": "Liczenie przedmiotów w grupach po dziesięć lub sto",
    "uk-UA": "Лічба предметів групами по десятках або сотнях",
  },
});
