import { buildSkillConfig } from '@/utils';
import { verification_Skills_Ids } from './index.ids';

export const checkReasonableness_Skill_Data = buildSkillConfig({
  id: verification_Skills_Ids.checkReasonableness,
  name: {
    en: "Assessing whether an answer is reasonable in context and magnitude",
    zh: "结合情境和数量级判断答案是否合理",
    hi: "संदर्भ और परिमाण के अनुसार उत्तर की उचितता जाँचना",
    es: "Evaluar si una respuesta es razonable por su contexto y magnitud",
    ar: "تقييم معقولية الإجابة بحسب السياق وحجم الكمية",
    fr: "Évaluer la vraisemblance d’une réponse selon le contexte et l’ordre de grandeur",
    bn: "প্রসঙ্গ ও পরিমাণ অনুযায়ী উত্তর যুক্তিসংগত কি না যাচাই করা",
    pt: "Avaliar se uma resposta é razoável pelo contexto e pela ordem de grandeza",
    ur: "سیاق و مقدار کے لحاظ سے جواب کی معقولیت جانچنا",
    id: "Menilai kewajaran jawaban berdasarkan konteks dan besarannya",
    de: "Ein Ergebnis anhand von Kontext und Größenordnung auf Plausibilität prüfen",
    ja: "文脈や数量の大きさから答えの妥当性を判断する",
    ko: "상황과 크기를 고려해 답의 타당성 판단하기",
    tr: "Yanıtın bağlama ve büyüklüğe göre makul olup olmadığını değerlendirme",
    vi: "Đánh giá tính hợp lý của đáp án theo ngữ cảnh và độ lớn",
    ta: "சூழல் மற்றும் அளவின் அடிப்படையில் விடையின் நியாயத்தன்மையை மதிப்பிடுதல்",
    te: "సందర్భం మరియు పరిమాణాన్ని బట్టి సమాధానం సమంజసమో అంచనా వేయడం",
    mr: "संदर्भ आणि परिमाणानुसार उत्तर कितपत वाजवी आहे हे तपासणे",
    ms: "Menilai kewajaran jawapan berdasarkan konteks dan magnitud",
    he: "הערכת סבירות התשובה לפי ההקשר וסדר הגודל",
    pl: "Ocena sensowności odpowiedzi w kontekście i skali wielkości",
    uk: "Оцінювання правдоподібності відповіді за змістом і порядком величини",
  },
});
