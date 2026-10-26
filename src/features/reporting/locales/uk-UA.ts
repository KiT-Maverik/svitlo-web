export const locale = {
  title: 'Повідомити про помилку',
  triggerPrefix: 'Flag:',
  description: 'Опис буде опублікований у GitHub issue разом з ID і джерелом матеріалу. Не додавайте особисті дані. Посилання сторінки передається без параметрів.',
  fields: {
    category: 'Категорія помилки',
    message: 'Опишіть проблему',
    helper: (length: number) => `${length} / 2000 · щонайменше 10 символів`,
  },
  categories: {
    mistake: 'Помилка у матеріалі',
    unclear: 'Незрозуміле пояснення',
    technical: 'Технічна проблема',
  },
  errors: {
    invalidLength: 'Опишіть проблему: від 10 до 2000 символів.',
    server: 'Не вдалося надіслати повідомлення. Текст залишився у формі.',
    network: 'Не вдалося підтвердити надсилання. Текст збережено у формі; перевірте GitHub перед повторною спробою.',
  },
  success: {
    created: 'Повідомлення створено.',
    openIssue: (number: number) => `Відкрити issue #${number}`,
  },
  actions: {
    done: 'Готово',
    close: 'Закрити',
    sending: 'Надсилання…',
    submit: 'Надіслати повідомлення',
  },
} as const;
