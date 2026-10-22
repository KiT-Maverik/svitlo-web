# Світло

## Перша тема

Після `npm ci` та `npm run dev` відкрийте `/topics/light` або натисніть «Почати навчання» на головній сторінці.

- `public/content/topics/light/uk.md` — навчальний текст у Markdown та HTML-примітка.
- `public/content/topics/light/ray.svg` — ілюстрація.
- `public/content/topics/light/ray-scene.html` — автономна HTML/CSS/JS-сцена з паузою, швидкістю та підтримкою reduced motion. Її можна відкрити напряму за `/content/topics/light/ray-scene.html`.
- `src/components/MarkdownContent.tsx` — завантаження Markdown за URL, повідомлення про помилки та повторна спроба, санітизація HTML. Скрипти дозволені лише в ізольованому iframe для явно дозволеної локальної сцени.

Контент завантажується на клієнті зі статичних файлів; API та обхід каталогу на кожен запит не потрібні. Новий HTML-файл сцени потрібно явно додати до дозволених джерел у рендерері. Формули LaTeX, офлайн-завантаження та embed-оболонка поки не реалізовані.

Перевірки: `npm run lint`, `npm run build`.

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

