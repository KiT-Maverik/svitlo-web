import type { Resource_AllLocales_Config, Resource_ChosenLocales_Config } from '@types';
import type { Locale } from '@types';
import { createTextResource } from '../../src/utils';

declare const allValues: Resource_AllLocales_Config;
const all = createTextResource('title', allValues);
const allLocales: true = all.allLocales;
const english: string = all.value['en-US'];
// @ts-expect-error Resource metadata is readonly.
all.id = 'other';
// @ts-expect-error Localized values are readonly.
all.value['en-US'] = 'Other';

const chosen = createTextResource('title', { 'uk-UA': 'Світло', 'pl-PL': 'Światło' }, {
  locales: { only: ['uk-UA', 'pl-PL'] },
});
const chosenLocales: false = chosen.allLocales;
const ukrainian: string = chosen.value['uk-UA'];
const polish: string = chosen.value['pl-PL'];
// @ts-expect-error Chosen locale values are readonly.
chosen.value['uk-UA'] = 'Other';
// @ts-expect-error Other locales are not present in the result.
const excluded = chosen.value['en-US'];

// @ts-expect-error Every selected locale needs a value.
createTextResource('title', { 'uk-UA': 'Світло' }, { locales: { only: ['uk-UA', 'pl-PL'] } });
// @ts-expect-error A locale outside only is not part of this value object.
createTextResource('title', { 'uk-UA': 'Світло', 'en-US': 'Light' }, { locales: { only: ['uk-UA'] } });
// @ts-expect-error Only cannot be combined with include or exclude.
createTextResource('title', { 'uk-UA': 'Світло' }, { locales: { only: ['uk-UA'], include: ['pl-PL'] } });

declare const withoutEnglish: Resource_ChosenLocales_Config<Exclude<Locale, 'en-US'>>;
const filtered = createTextResource('title', withoutEnglish, { locales: { exclude: ['en-US'] } });
// @ts-expect-error Excluded locales are not present in the result.
const filteredEnglish = filtered.value['en-US'];

void [allLocales, english, chosenLocales, ukrainian, polish, excluded, filteredEnglish];
