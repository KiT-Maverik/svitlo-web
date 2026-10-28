export const locale = {
  steps: { navigation: 'Етапи уроку' },
  quiz: {
    test: 'Тест',
    finish: 'Завершити урок',
    nextQuestion: 'Наступне питання',
    sound: 'Звук завершення',
    skipped: 'Тест пропущено. Урок можна завершити після проходження тесту.',
    resumeQuiz: 'Повернутися до тесту',
    saveError: 'Не вдалося зберегти результат. Спробуйте завершити тест ще раз.',
  },
  celebration: {
    title: 'Вітаємо, ви завершили роботу з цим уроком!',
    description: 'Теорія, практика, флеш-картки та тест — усі етапи позаду.',
    correctAnswers: 'Правильних відповідей:',
    score: (score: number, total: number) => `${score} із ${total}`,
    note: 'Завершення уроку не означає, що всі відповіді були правильними — до матеріалу завжди можна повернутися.',
    home: 'До головної',
  },
  questionProgress: {
    navigation: 'Статус запитань',
    status: {
      correct: 'Правильна відповідь',
      incorrect: 'Неправильна відповідь',
      unanswered: 'Ще не відповіли',
      deferred: 'Відкладено',
    },
  },
} as const;
