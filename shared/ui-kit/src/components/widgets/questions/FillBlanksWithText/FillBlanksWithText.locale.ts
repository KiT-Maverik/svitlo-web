const uk = { blankInput: 'Заповнити пропуск' };

export type FillBlanksWithText_Locale = typeof uk;
const lt = { blankInput: 'Užpildyti tarpą' } satisfies FillBlanksWithText_Locale;
const lv = { blankInput: 'Aizpildīt tukšumu' } satisfies FillBlanksWithText_Locale;
const et = { blankInput: 'Täida lünk' } satisfies FillBlanksWithText_Locale;
const be = { blankInput: 'Запоўніць пропуск' } satisfies FillBlanksWithText_Locale;
const ka = { blankInput: 'შეავსე გამოტოვებული ადგილი' } satisfies FillBlanksWithText_Locale;
const kk = { blankInput: 'Бос орынды толтыру' } satisfies FillBlanksWithText_Locale;
const qm = { blankInput: 'Boş yerni toldur' } satisfies FillBlanksWithText_Locale;
export const locales = { uk, lt, lv, et, be, ka, kk, qm } as const;
