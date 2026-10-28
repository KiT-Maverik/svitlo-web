export const locale = {
  steps: { navigation: "Сабақ кезеңдері" },
  quiz: {
    test: "Тест", finish: "Сабақты аяқтау", nextQuestion: "Келесі сұрақ",
    sound: "Аяқтау дыбысы", skipped: "Тест өткізілді. Сабақты тестті орындағаннан кейін ғана аяқтауға болады.", resumeQuiz: "Тестке оралу", saveError: "Нәтижені сақтау мүмкін болмады. Тестті қайта аяқтап көріңіз.",
  },
  celebration: {
    title: "Құттықтаймыз! Сіз бұл сабақты аяқтадыңыз!", description: "Теория, практика, оқу карточкалары мен тест — барлық кезеңдер аяқталды.", correctAnswers: "Дұрыс жауаптар:",
    score: (score: number, total: number) => `${score} / ${total}`,
    note: "Сабақты аяқтау барлық жауап дұрыс болды дегенді білдірмейді — материалға әрқашан қайта орала аласыз.", home: "Басты бетке",
  },
  questionProgress: {
    navigation: "Сұрақтар күйі",
    status: { correct: "Дұрыс жауап", incorrect: "Қате жауап", unanswered: "Әлі жауап берілмеген", deferred: "Кейінге қалдырылған" },
  },
} as const;
