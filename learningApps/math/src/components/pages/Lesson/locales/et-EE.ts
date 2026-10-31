export const locale = {
  steps: { navigation: 'Tunni etapid' },
  quiz: {
    test: 'Test',
    finish: 'Lõpeta tund',
    nextQuestion: 'Järgmine küsimus',
    sound: 'Lõpetamise heli',
    skipped: 'Test jäeti vahele. Tunni saab lõpetada pärast testi sooritamist.',
    resumeQuiz: 'Tagasi testi juurde',
    saveError: 'Tulemust ei õnnestunud salvestada. Proovige test uuesti lõpetada.',
  },
  celebration: {
    title: 'Palju õnne! Olete selle tunni lõpetanud!',
    description: 'Teooria, praktika, õppekaardid ja test — kõik etapid on läbitud.',
    correctAnswers: 'Õigeid vastuseid:',
    score: (score: number, total: number) => `${score} / ${total}`,
    note: 'Tunni lõpetamine ei tähenda, et kõik vastused olid õiged — materjali juurde saab alati tagasi tulla.',
    home: 'Avalehele',
  },
  questionProgress: {
    navigation: 'Küsimuste olek',
    status: {
      correct: 'Õige vastus',
      incorrect: 'Vale vastus',
      unanswered: 'Veel vastamata',
      deferred: 'Edasi lükatud',
    },
  },
} as const;
