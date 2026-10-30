import { buildSkillConfig } from '@svitlo/engine/taxonomy';
import { general_Skills_Ids } from './index.ids';

export const chooseAppropriateUnit_Skill_Data = buildSkillConfig({
  id: general_Skills_Ids.chooseAppropriateUnit,
  name: {
    "en": "Choosing suitable units for length, mass or capacity",
    "lt": "Tinkamų ilgio, masės ar talpos matavimo vienetų pasirinkimas",
    "lv": "Piemērotu garuma, masas vai tilpuma mērvienību izvēle",
    "et": "Sobivate pikkuse, massi või mahutavuse ühikute valimine",
    "be": "Выбар прыдатных адзінак даўжыні, масы ці ўмяшчальнасьці",
    "ka": "სიგრძის, მასის ან ტევადობის შესაბამისი ერთეულების შერჩევა",
    "kk": "Ұзындық, масса немесе сыйымдылыққа сай өлшем бірліктерін таңдау",
    "zh": "为长度、质量或容量选择合适单位",
    "hi": "लंबाई, द्रव्यमान या धारिता के लिए सही इकाई चुनना",
    "es": "Elegir unidades adecuadas para longitud, masa o capacidad",
    "ar": "اختيار وحدات مناسبة للطول أو الكتلة أو السعة",
    "fr": "Choisir une unité adaptée à la longueur, à la masse ou à la capacité",
    "bn": "দৈর্ঘ্য, ভর বা ধারণক্ষমতার উপযুক্ত একক বেছে নেওয়া",
    "pt": "Escolher unidades adequadas de comprimento, massa ou capacidade",
    "ur": "لمبائی، کمیت یا گنجائش کے لیے مناسب اکائی چننا",
    "id": "Memilih satuan yang sesuai untuk panjang, massa, atau kapasitas",
    "de": "Passende Einheiten für Länge, Masse oder Fassungsvermögen wählen",
    "ja": "長さ・質量・容量に適切な単位を選ぶ",
    "ko": "길이·질량·용량에 알맞은 단위 고르기",
    "tr": "Uzunluk, kütle veya kapasite için uygun birim seçme",
    "vi": "Chọn đơn vị phù hợp cho độ dài, khối lượng hoặc dung tích",
    "ta": "நீளம், நிறை அல்லது கொள்ளளவுக்குப் பொருத்தமான அலகைத் தேர்வு செய்தல்",
    "te": "పొడవు, ద్రవ్యరాశి లేదా ధారితకు సరైన ప్రమాణం ఎంచుకోవడం",
    "mr": "लांबी, वस्तुमान किंवा क्षमतेसाठी योग्य एकक निवडणे",
    "ms": "Memilih unit yang sesuai untuk panjang, jisim atau kapasiti",
    "he": "בחירת יחידות מתאימות לאורך, למסה או לקיבולת",
    "pl": "Dobieranie jednostek długości, masy lub pojemności",
    "uk": "Вибір доречних одиниць довжини, маси чи місткості"
  },
  description: { methodological: "Choose a measurement unit based on the physical quantity, size of the object, and needed precision. The choice must be justified without mixing dimensions or copying a conventional example uncritically." },
});
