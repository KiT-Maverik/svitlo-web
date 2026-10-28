export const locale = {
  steps: { navigation: "Pamokos etapai" },
  quiz: {
    test: "Testas", finish: "Baigti pamoką", nextQuestion: "Kitas klausimas",
    sound: "Baigimo garsas", skipped: "Testas praleistas. Pamoką galima baigti tik atlikus testą.", resumeQuiz: "Grįžti prie testo", saveError: "Nepavyko išsaugoti rezultato. Bandykite baigti testą dar kartą.",
  },
  celebration: {
    title: "Sveikiname! Baigėte šią pamoką!", description: "Teorija, praktika, mokymosi kortelės ir testas — visi etapai baigti.", correctAnswers: "Teisingų atsakymų:",
    score: (score: number, total: number) => `${score} iš ${total}`,
    note: "Pamokos baigimas nereiškia, kad visi atsakymai buvo teisingi — visada galite grįžti prie medžiagos.", home: "Į pradžią",
  },
  questionProgress: {
    navigation: "Klausimų būsena",
    status: { correct: "Teisingas atsakymas", incorrect: "Neteisingas atsakymas", unanswered: "Dar neatsakyta", deferred: "Atidėta" },
  },
} as const;
