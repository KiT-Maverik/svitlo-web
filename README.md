# Svitlo monorepo

The current Next.js Playground application lives at `apps/playground/` with its source unchanged. Run `npm ci` and `npm run dev` from the root, or `npm run dev --workspace @svitlo/playground`. Other root build, test, lint and Storybook scripts delegate to the Playground workspace.

Engine is now an independently compiled workspace package. The Math, UI Kit and Server workspaces remain empty placeholders. See `studio/Monorepo Migration.md`.

> Legacy documentation below uses paths relative to Playground. A reference to `src/` now means `apps/playground/src/`.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Interactive questions

Open `/questions` for nine independently controlled examples.

Question API examples (slots, lifecycle events, automatic grading): `/questions/api`. Widget types live in `src/components/widgets/questions/types`; content contracts live in `src/types/content`.

## Урок із конфігурації (data-driven Lesson)

Після `npm ci` та `npm run dev` відкрийте `/topics/light` — урок «Як рухається світло».

- `src/content/howLightMoves/howLightMoves.data.ts` — `Lesson_Config`: ID назви й секцій, параметри навігації, квізу та словники локалізації сцен.
- `src/content/howLightMoves/howLightMoves.catalog.ts` — визначення назви та секцій, доступні за їхніми ID.
- `src/app/topics/light/page.tsx` — тонкий маршрут, який визначає локаль і передає `config`, `catalog`, `locale`, `href` сторінці `Lesson`.
- `src/components/pages/Lesson/Lesson.tsx` — спільний складальник уроків: `buildLesson(config, locale, catalog)`, контексти локалі/сцен/прогресу, layout та рендеринг кроків.
- `src/components/pages/Lesson/LessonSectionContent/` — серверний рендерер текстових, Markdown-ресурсів і сцен. Локалізовані Markdown-файли знаходяться в `src/content/howLightMoves/sections/theory/markdown/`.
- `src/content/howLightMoves/resources/scenes/` — вбудовані інтерактивні сцени як ресурси уроку. Сцени беруть вибрану локаль через `useSceneLocales()`.
- `src/components/widgets/` — незалежні повторно використовувані компоненти, зокрема `Flashcard` і `MarkdownContent`.

Поточний урок має три кроки: теорія, практика (порівняння швидкості світла у вакуумі, повітрі та воді за моделлю `v = c / n`) і тест із шести питань. Конфігурація підтримує довільну послідовність секцій, але теперішній клієнтський адаптер квізу рендерить тільки `select-one-answer` і обмежується одним квізом на урок; для інших типів потрібне розширення адаптера/стану.

Прогрес уроку та відповіді зберігаються в IndexedDB, тому перезавантаження відновлює поточний крок і стан тесту. Для іншого `lesson.id` клієнтський стан монтується заново. Контент Markdown рендериться сервером; під час перемикання локалі сцени отримують відповідний словник із конфігу. Сцена `Practice` має переклади для всіх 22 стандартних мов.

Тестування: `npm run test:components`, `npm run typecheck`, `npm run build`, `npx playwright test src/components/pages/Lesson/Lesson.e2e.spec.ts`.

## Навігація навчальної зони

`TopNavbar` і `BottomNavbar` використовують спільний `Navbar`. `slots.left`, `slots.center`, `slots.right` приймають довільні React-вузли. `slotProps.root/left/center/right` приймають властивості MUI Box, включно з `sx`, `className`, атрибутами та обробниками. Користувацькі стилі застосовуються після стандартних. Центр має власну колонку між двома однаковими за шириною бічними секціями.

```tsx
<TopNavbar
  aria-label="Навігація уроку"
  slots={{ left: <MenuButton />, center: <LessonTitle />, right: <SettingsButton /> }}
  slotProps={{
    root: { sx: { bgcolor: 'background.paper' } },
    left: { sx: { gap: 2 } },
    center: { sx: { fontWeight: 700 } },
    right: { sx: { px: 1 } },
  }}
/>
```

Кнопки «Назад» і «Далі» згруповані в центральному слоті нижнього навбара. У правому слоті верхнього навбара розташовані профіль, Settings та Logout. Профіль і Logout поки неактивні: авторизація ще не підключена. Settings перемикає правий сайдбар із місцем для майбутніх налаштувань; одночасно відкривається лише одна панель.

Гамбургер відкриває та закриває немодальний сайдбар. Escape, кнопка закриття та натискання на затемнену область теж закривають його. Панель і затемнення обмежені областю між навбарами.

Перевірки: `npm run lint`, `npm run build`.
