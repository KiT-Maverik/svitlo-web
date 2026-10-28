import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';
import { parity_SkillGroup_Ids } from './parity.ids';
import { parity_Skills_Ids } from './skills/index.ids';

export const parity_SkillGroup_Data = buildSkillGroupConfig({
  id: parity_SkillGroup_Ids.parity,
  name: {
    en: "Even and odd numbers",
    "lt": "Lyginiai ir nelyginiai skaičiai",
    "lv": "Pāra un nepāra skaitļi",
    "et": "Paaris- ja paaritud arvud",
    "be": "Цотныя і няцотныя лікі",
    "ka": "ლუწი და კენტი რიცხვები",
    "kk": "Жұп және тақ сандар",
    zh: "奇数与偶数",
    hi: "सम और विषम संख्याएँ",
    es: "Paridad",
    ar: "الزوجية والفردية",
    fr: "Parité",
    bn: "জোড় ও বিজোড় সংখ্যা",
    pt: "Paridade",
    ur: "جفت اور طاق اعداد",
    id: "Bilangan genap dan ganjil",
    de: "Gerade und ungerade Zahlen",
    ja: "偶数と奇数",
    ko: "짝수와 홀수",
    tr: "Tek ve çift sayılar",
    vi: "Số chẵn và số lẻ",
    ta: "இரட்டை மற்றும் ஒற்றை எண்கள்",
    te: "సరి మరియు బేసి సంఖ్యలు",
    mr: "सम व विषम संख्या",
    ms: "Nombor genap dan ganjil",
    he: "מספרים זוגיים ואי־זוגיים",
    pl: "Liczby parzyste i nieparzyste",
    uk: "Парність",
  },
  skillIds: parity_Skills_Ids,
});
