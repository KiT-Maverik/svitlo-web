export const locale = {
  steps: { navigation: 'Этапы ўроку' },
  quiz: {
    test: 'Тэст',
    finish: 'Скончыць урок',
    nextQuestion: 'Наступнае пытаньне',
    sound: 'Гук завяршэньня',
    skipped: 'Тэст прапушчаны. Урок можна скончыць толькі пасьля праходжаньня тэсту.',
    resumeQuiz: 'Вярнуцца да тэсту',
    saveError: 'Не ўдалося захаваць вынік. Паспрабуйце скончыць тэст яшчэ раз.',
  },
  celebration: {
    title: 'Віншуем! Вы скончылі гэты ўрок!',
    description: 'Тэорыя, практыка, навучальныя карткі і тэст — усе этапы пройдзеныя.',
    correctAnswers: 'Правільных адказаў:',
    score: (score: number, total: number) => `${score} з ${total}`,
    note: 'Завяршэньне ўроку не азначае, што ўсе адказы былі правільнымі — да матэрыялу заўсёды можна вярнуцца.',
    home: 'На галоўную',
  },
  questionProgress: {
    navigation: 'Стан пытаньняў',
    status: {
      correct: 'Правільны адказ',
      incorrect: 'Няправільны адказ',
      unanswered: 'Яшчэ няма адказу',
      deferred: 'Адкладзена',
    },
  },
} as const;
