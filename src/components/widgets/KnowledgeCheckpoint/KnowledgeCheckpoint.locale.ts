import type { DefaultSupportedLanguage } from '@types';

export type KnowledgeCheckpoint_Locale = { title: string; check: string; checked: string };

export const en = { title: 'Check your knowledge', check: 'Check', checked: 'Checked' } satisfies KnowledgeCheckpoint_Locale;

export const zh = { title: '检验你的知识', check: '确认', checked: '已确认' } satisfies KnowledgeCheckpoint_Locale;

export const hi = { title: 'अपना ज्ञान जाँचें', check: 'जाँचें', checked: 'जाँचा गया' } satisfies KnowledgeCheckpoint_Locale;

export const es = { title: 'Comprueba lo que sabes', check: 'Confirmar', checked: 'Confirmado' } satisfies KnowledgeCheckpoint_Locale;

export const ar = { title: 'اختبر معلوماتك', check: 'تأكيد', checked: 'تم التأكيد' } satisfies KnowledgeCheckpoint_Locale;

export const fr = { title: 'Vérifie tes connaissances', check: 'Valider', checked: 'Validé' } satisfies KnowledgeCheckpoint_Locale;

export const bn = { title: 'তোমার জ্ঞান যাচাই করো', check: 'নিশ্চিত করুন', checked: 'নিশ্চিত হয়েছে' } satisfies KnowledgeCheckpoint_Locale;

export const pt = { title: 'Confira seus conhecimentos', check: 'Confirmar', checked: 'Confirmado' } satisfies KnowledgeCheckpoint_Locale;

export const ur = { title: 'اپنا علم جانچیں', check: 'تصدیق کریں', checked: 'تصدیق شدہ' } satisfies KnowledgeCheckpoint_Locale;

export const id = { title: 'Periksa pemahamanmu', check: 'Konfirmasi', checked: 'Dikonfirmasi' } satisfies KnowledgeCheckpoint_Locale;

export const de = { title: 'Prüfe dein Wissen', check: 'Bestätigen', checked: 'Bestätigt' } satisfies KnowledgeCheckpoint_Locale;

export const ja = { title: '理解度を確認', check: '確認', checked: '確認済み' } satisfies KnowledgeCheckpoint_Locale;

export const ko = { title: '이해도 확인', check: '확인', checked: '확인됨' } satisfies KnowledgeCheckpoint_Locale;

export const tr = { title: 'Bilgini kontrol et', check: 'Onayla', checked: 'Onaylandı' } satisfies KnowledgeCheckpoint_Locale;

export const vi = { title: 'Kiểm tra kiến thức', check: 'Xác nhận', checked: 'Đã xác nhận' } satisfies KnowledgeCheckpoint_Locale;

export const ta = { title: 'உங்கள் அறிவைச் சரிபாருங்கள்', check: 'உறுதிப்படுத்து', checked: 'உறுதிப்படுத்தப்பட்டது' } satisfies KnowledgeCheckpoint_Locale;

export const te = { title: 'మీ జ్ఞానాన్ని పరీక్షించుకోండి', check: 'నిర్ధారించు', checked: 'నిర్ధారించబడింది' } satisfies KnowledgeCheckpoint_Locale;

export const mr = { title: 'तुमचे ज्ञान तपासा', check: 'पुष्टी करा', checked: 'पुष्टी झाली' } satisfies KnowledgeCheckpoint_Locale;

export const ms = { title: 'Semak pengetahuan anda', check: 'Sahkan', checked: 'Disahkan' } satisfies KnowledgeCheckpoint_Locale;

export const he = { title: 'בדקו את הידע שלכם', check: 'אישור', checked: 'אושר' } satisfies KnowledgeCheckpoint_Locale;

export const pl = { title: 'Sprawdź swoją wiedzę', check: 'Potwierdź', checked: 'Potwierdzono' } satisfies KnowledgeCheckpoint_Locale;

export const uk = { title: 'Перевір свої знання', check: 'Підтвердити', checked: 'Підтверджено' } satisfies KnowledgeCheckpoint_Locale;

export const locales = {
  en,
  zh,
  hi,
  es,
  ar,
  fr,
  bn,
  pt,
  ur,
  id,
  de,
  ja,
  ko,
  tr,
  vi,
  ta,
  te,
  mr,
  ms,
  he,
  pl,
  uk,
} satisfies Record<DefaultSupportedLanguage['language'], KnowledgeCheckpoint_Locale>;
