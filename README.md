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

Open `/questions` for seven independently controlled examples. See [authoring and API documentation](docs/questions.md) for data definitions, checks, extension points and validation commands.

Question API examples (slots, lifecycle events, automatic grading): `/questions/api`. Domain contracts and module augmentation live in `src/types/questions`.

## Workspaces and content reports

Open `/student`, `/teacher`, `/admin/lessons` and `/lessons/light`. Dashboards and CRUD mutation ports are explicit prototypes. Flag forms use `/api/reports`; configure server-only env from `.env.example` to enable GitHub issue delivery. See [implementation and CRUD plan](docs/workspaces.md).


## Перша тема

Після `npm ci` та `npm run dev` відкрийте `/topics/light` або натисніть «Відкрити урок «Як рухається світло»» на головній сторінці.

- `public/content/topics/light/uk.md` — навчальний текст у Markdown та HTML-примітка.
- `public/content/topics/light/ray.svg` — ілюстрація.
- `public/content/topics/light/ray-scene.html` — автономна HTML/CSS/JS-сцена з паузою, швидкістю та підтримкою reduced motion. Її можна відкрити напряму за `/content/topics/light/ray-scene.html`.
- `src/components/MarkdownContent.tsx` — серверний рендеринг Markdown та санітизація HTML. Скрипти дозволені лише в ізольованому iframe для явно дозволеної локальної сцени.

Серверна сторінка читає Markdown через кешовану функцію; Next.js пререндерить готовий HTML під час збірки. Браузер отримує текст без додаткового fetch після гідратації. Зміни опублікованого контенту доставляються новою збіркою. Новий HTML-файл сцени потрібно явно додати до дозволених джерел у рендерері. Формули LaTeX, офлайн-завантаження та embed-оболонка поки не реалізовані.

## Урок із кроками

`src/content/lightLesson.ts` описує чотири етапи та спільний набір понять для флеш-карток і тесту. `LightLesson` показує теорію, практику, флеш-картки й тест; `LessonProgress` керує доступністю переходів. Лівий список залишається списком уроків/тем, а сегменти зверху перемикають доступні етапи уроку.

- Теорія залишається серверним Markdown-контентом і передається в клієнтський урок як React-вузол.
- Практика використовує `v = c / n`: вакуум `n=1`, повітря `1.000293`, вода `1.333` (приблизні значення з OpenStax). Анімація починається на паузі; її швидкість сильно зменшена, співвідношення збережені.
- Флеш-картка відкриває відповідь натисканням. Після цього доступні «Не пам’ятаю» та «Пам’ятаю»; на сенсорних екранах ці кнопки видимі без hover. Після всіх карток розблоковується тест.
- Тест використовує ті самі питання з варіантами відповідей і зворотним зв’язком. Кожну відповідь можна зарахувати один раз. Завершення означає проходження всіх питань, а не обов’язково 100% правильних відповідей; бал показується окремо.
- Фінал: конфетті з двох боків і короткий синтезований сигнал Web Audio. Це мелодія, а не голосовий запис «вау». Перед завершенням звук можна вимкнути. При reduced motion конфетті та переходи вимкнені.

Прогрес поточного уроку зберігається лише у стані поточної сесії сторінки, без синхронізації або збереження після перезавантаження. Повторний візит до вже відкритих етапів не скидає картки й результат тесту.

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

