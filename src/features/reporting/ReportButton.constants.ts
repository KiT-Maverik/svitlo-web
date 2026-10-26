import { locale } from './locales/uk-UA';
export const aria = {
  trigger: (title: string) => `${locale.triggerPrefix} ${title}`,
  dialog: locale.title,
} as const;
