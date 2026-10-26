export const locale = {
  shell: {
    brand: 'Світло',
    navigation: 'Кабінети',
    links: { student: 'Учень', teacher: 'Учитель', admin: 'Адміністратор' },
    demo: 'Демонстраційний режим',
    notice: 'Це попередній перегляд кабінетів із демонстраційними даними. Авторизацію й постійне зберігання ще не підключено.',
  },
  student: {
    completedSteps: 'Пройдено кроків',
    completedLessons: 'Завершено уроків',
    myPrograms: 'Мої програми',
    continueLearning: 'Продовжити навчання',
    noLessons: 'Уроків поки немає.',
    continue: 'Продовжити',
    progress: (percent: number, completed: number, total: number) => `${percent}% · ${completed} із ${total} кроків`,
    progressLabel: (title: string) => `Прогрес: ${title}`,
    programLessons: (count: number) => `Уроків: ${count} · демонстраційна програма`,
  },
} as const;
