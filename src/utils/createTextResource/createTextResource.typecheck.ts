import type { TextResource_AllLanguages_Config, TextResource_ChosenLanguages_Config } from '@types';
import type { LanguageCode } from '@types';
import { createTextResource } from '@/utils';

declare const allValues: TextResource_AllLanguages_Config;
const all = createTextResource('title', allValues);
const allLocales: true = all.allLocales;
const english: string = all.value['en'];
// @ts-expect-error Resource metadata is readonly.
all.id = 'other';
// @ts-expect-error Localized values are readonly.
all.value['en'] = 'Other';

const chosen = createTextResource(
  'title',
  { uk: 'Світло', pl: 'Światło' },
  {
    locales: { only: ['uk', 'pl'] },
  },
);
const chosenLocales: false = chosen.allLocales;
const ukrainian: string = chosen.value['uk'];
const polish: string = chosen.value['pl'];
// @ts-expect-error Chosen locale values are readonly.
chosen.value['uk'] = 'Other';
// @ts-expect-error Other locales are not present in the result.
const excluded = chosen.value['en'];

// @ts-expect-error Every selected locale needs a value.
createTextResource('title', { uk: 'Світло' }, { locales: { only: ['uk', 'pl'] } });
// @ts-expect-error A locale outside only is not part of this value object.
createTextResource('title', { uk: 'Світло', en: 'Light' }, { locales: { only: ['uk'] } });
// @ts-expect-error Only cannot be combined with include or exclude.
createTextResource('title', { uk: 'Світло' }, { locales: { only: ['uk'], include: ['pl'] } });

declare const withoutEnglish: TextResource_ChosenLanguages_Config<Exclude<LanguageCode, 'en'>>;
const filtered = createTextResource('title', withoutEnglish, { locales: { exclude: ['en'] } });
// @ts-expect-error Excluded locales are not present in the result.
const filteredEnglish = filtered.value['en'];

void [allLocales, english, chosenLocales, ukrainian, polish, excluded, filteredEnglish];
