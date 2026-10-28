export const locale = {
  steps: { navigation: "Nodarbības posmi" },
  quiz: {
    test: "Tests", finish: "Pabeigt nodarbību", nextQuestion: "Nākamais jautājums",
    sound: "Pabeigšanas skaņa", skipped: "Tests izlaists. Nodarbību var pabeigt tikai pēc testa izpildes.", resumeQuiz: "Atgriezties pie testa", saveError: "Neizdevās saglabāt rezultātu. Mēģiniet pabeigt testu vēlreiz.",
  },
  celebration: {
    title: "Apsveicam! Nodarbība pabeigta!", description: "Teorija, prakse, mācību kartītes un tests — visi posmi ir aiz muguras.", correctAnswers: "Pareizās atbildes:",
    score: (score: number, total: number) => `${score} no ${total}`,
    note: "Nodarbības pabeigšana nenozīmē, ka visas atbildes bija pareizas — pie materiāla vienmēr var atgriezties.", home: "Uz sākumu",
  },
  questionProgress: {
    navigation: "Jautājumu statuss",
    status: { correct: "Pareiza atbilde", incorrect: "Nepareiza atbilde", unanswered: "Vēl nav atbildēts", deferred: "Atlikts" },
  },
} as const;
