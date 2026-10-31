/** Crimean Tatar (Svitlo qm), Latin script. Requires native-speaker linguistic review. */
export const locale = {
  steps: { navigation: 'Dersniñ basamaqları' },
  quiz: {
    test: 'Sınav',
    finish: 'Dersni bitir',
    nextQuestion: 'Nevbetteki sual',
    sound: 'Tamamlanma sesi',
    skipped: 'Sınav atlanıldı. Dersni bitirmek içün sınavdan keçmek kerek.',
    resumeQuiz: 'Sınavğa qayt',
    saveError: 'Neticeni saqlamaq mümkün olmadı. Sınavnı yañıdan bitirip baq.',
  },
  celebration: {
    title: 'Tebrikler, sen bu dersni bitirdiñ!',
    description: 'Nazariye, ameliyat, bilgi kartları ve sınav — bütün basamaqlar artında qaldı.',
    correctAnswers: 'Doğru cevaplarnıñ sayısı:',
    score: (score: number, total: number) => `${score} / ${total}`,
    note: 'Dersni bitirüv bütün cevaplarnıñ doğru olğanını bildirmey. Malümatqa er vaqıt qaytıp ola bilirsiñ.',
    home: 'Baş saifege',
  },
  questionProgress: {
    navigation: 'Suallerniñ alı',
    status: {
      correct: 'Doğru cevap',
      incorrect: 'Yañlış cevap',
      unanswered: 'Cevap berilmedi',
      deferred: 'Soñrağa qaldırıldı',
    },
  },
} as const;
