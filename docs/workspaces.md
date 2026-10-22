# Кабінети та reporting — поточна реалізація й план підключення

## Що відкрити

| Сторінка | Можливості зараз |
| --- | --- |
| `/student` | Демонстраційний прогрес за кроками, наступний крок, список програм |
| `/teacher` | Пошук у каталозі, вибір уроків, назва та порядок програми, завантаження прикладу в локальну чернетку |
| `/admin/lessons` | Пошук/фільтр, перегляд, форми підготовки редагування й видалення |
| `/lessons/light` | Огляд чотирьох секцій відомого уроку; Flag біля кожної секції |
| `/questions` | Flag для кожного з демонстраційних запитань через публічний actions slot |

Це не авторизовані кабінети: ролі поки показані як навігація між демонстраціями. Прогрес та список збережених програм — явно позначені приклади. Чернетка вчителя існує в React state до перезавантаження. Успішне серверне збереження, редагування чи видалення не імітуються: mutation-порти повертають `not-configured`, списки не змінюються. Діалог адміністратора поки редагує метадані, а не Markdown.

Реальний урок `light` знайдено в іншій відкритій гілці: PR #1 `feat/first-markdown-topic`, ревізія `7542e82dd87550acdd93b6cf85bb027ad5491a5b`, `src/content/lightLesson.ts`. Ці зміни не зливалися автоматично. Тому в цій гілці створено локальний огляд `/lessons/light`, а не посилання на ще відсутній `/topics/light`. Каталог містить рівно цей відомий урок; вигадані уроки не видаються за наявні. Коли об’єднаємо гілки, каталог і URL повного уроку треба підключити до єдиного індексу контенту.

## Межі й підключення CRUD

`src/types/workspaces` описує LessonSummary, LearningProgram, ProgramDraft, LessonProgress та async repository-порти. `features/workspaces/catalog.ts` — початковий адаптер індексу; `repositories.ts` — demo read і явні заглушки мутацій. Компоненти отримують списки через пропси. `selectors.ts` незалежно рахує прогрес і перевіряє чернетку програми. Замінювати потрібно адаптери, а не переносити запити до БД у компоненти.

### Запланована модель

- **Git-контент:** стабільні lesson/section ID, locale, назва, subject, статус, sourcePath і revision. Індекс генерується з репозиторію; БД не стає другим незалежним джерелом тексту уроків.
- **User / roles:** користувач і набір ролей; одна людина може бути учнем та вчителем.
- **Program:** id, ownerId, title, version, timestamps, статус draft/published/archived.
- **ProgramLesson:** programId, lessonId, position; унікальні `(programId, lessonId)` і `(programId, position)`. Порядок не залежить від заголовків уроків.
- **Enrollment:** userId, programId, programVersion; зміни програми не повинні непомітно змінювати вже призначену версію.
- **LessonProgress:** userId, lessonId, contentRevision, completedSectionIds, updatedAt/version. Завершення уроку та оцінка тесту — різні поля/сутності.
- **ContentReport:** requestId, contentId, contentRevision, issueNumber, state, timestamps; спільна idempotency/outbox при кількох інстансах.

### Послідовність реалізації

1. Об’єднати індекс реальних уроків і забезпечити стабільні ID та валідні посилання між кроками.
2. Підключити session/auth та серверні перевірки ролей і власника. Приватний прогрес віддавати лише його власнику. Teacher може змінювати власні програми, admin — готувати зміни контенту. Клієнтська навігація не є захистом.
3. Реалізувати PostgreSQL-адаптери програм, enrollment і прогресу та runtime DTO-валідацію. Версії передавати в mutation-командах; конфлікти повертати як 409, а не перезаписувати чужі зміни.
4. Підключити `GET/POST /api/programs`, `GET/PATCH/DELETE /api/programs/:id`, `GET /api/me/progress` і update progress. Точний URL-конвеншен узгодити з рештою backend. Змінити `MutationResult` на повний union успіху/валідації/конфлікту/заборони та додати pending/error/success UI.
5. Адміністративне редагування створює draft Git PR з очікуваною ревізією, preview та перевіркою. Видалення починається з перевірки залежних програм; краще archive/tombstone, якщо урок уже використаний учнями. Публікація проходить CI й review; браузер не отримує GitHub token.
6. Міграції БД зберігати як окремі reviewed файли, перевіряти на тимчасовій БД та staging перед production; резервне копіювання й відновлення налаштувати перед першими даними учнів. Repository integration-тести повинні використовувати реальну тестову БД.

Поточні кнопки підготовки — точки підключення цих команд, а не прихований CRUD.

## Flag → API → GitHub issue

`ReportButton` самостійний і отримує лише contentId/title. Уроковий огляд рендерить його біля секцій. `ReportedQuestion` додає його через actions slot, не прив’язуючи question controller до уроків чи GitHub.

`POST /api/reports` приймає:

```json
{
  "requestId": "client-generated-uuid",
  "contentId": "lesson:light:theory",
  "category": "mistake",
  "message": "Опис проблеми довжиною від 10 до 2000 символів."
}
```

Категорії: mistake, unclear, technical. Сервер сам визначає сторінку, sourcePath, revision і title через `server/reporting/targets.ts`; клієнт не керує репозиторієм, шляхом файлу чи токеном. Поточні lesson targets стосуються саме локального огляду в catalog.ts; upstream джерело повного уроку доступне окремим посиланням у UI. Для точної ревізії огляду/запитань задайте CONTENT_REVISION SHA під час deployment.

Відповіді: 201 із `{status:'created', issueUrl, issueNumber}`; 400 невалідний ввід/невідомий матеріал; 403 чужий або відсутній Origin; 413 завеликий body; 415 не JSON; 409 повторний ID з іншим текстом; 429 ліміт; 503 не налаштовано; 502 upstream помилка/непідтверджене створення. Відповіді no-store, помилки GitHub і секрети клієнту не повертаються. Наявність кнопки Flag не означає, що надсилання вже активоване.

### Налаштування

Використовуйте `.env.example` як зразок серверних env:

```text
GITHUB_REPORTS_ENABLED=true
GITHUB_REPORTS_REPOSITORY=owner/content-repository
GITHUB_REPORTS_TOKEN=<server secret>
CONTENT_REVISION=<deployment commit SHA>
```

Потрібен fine-grained token з **Issues: write** лише для цільового репозиторію, у якому ввімкнені Issues. Жодного NEXT_PUBLIC_ для токена. Виклик API базується на [офіційній документації GitHub](https://docs.github.com/en/rest/issues/issues#create-an-issue). Контент може бути публічним: UI попереджає про публікацію тексту й не збирає email, full URL, query string чи скриншоти.

Без env усе працює як форма з чесним 503: текст залишається введеним, success-посилання не показується. Перевіряйте в браузері після налаштування; тестові прогони не створюють справжніх issue.

### Поточні обмеження reporting

- Однакові requestId/payload і паралельні повтори використовують одну promise у межах одного процесу протягом 10 хвилин. Зміна payload із тим самим ID дає 409. Невизначений результат після timeout не запускає автоматичний повтор.
- Процес локально обмежує 5 нових запитів на адресу і 30 загалом за 10 хвилин; пам’ять обмежена. Глобальний cap не покладається на довіру до X-Forwarded-For. Для публічного масштабованого сервісу потрібні спільні rate-limit/idempotency store, надійна proxy-конфігурація та механізм протидії ботам.
- Origin повинен дорівнювати зовнішньому origin маршруту: production reverse proxy має коректно передавати host/scheme.
- Це свідомо opt-in anonymous reporting до появи auth; API за замовчуванням вимкнений. Auth для кабінетів не імітується.

## Перевірки

`npm run typecheck`, `npm test`, `npm run lint`, `npm run build`, `npm run test:e2e`.

Unit-тести перевіряють прогрес, валідацію програми, незмінність CRUD-заглушок, контракт GitHub POST, захист джерела, валідацію розміру/типу/Origin, safe errors, idempotency та rate limits. E2E перевіряє кабінети, збереження введення при 503, незмінність каталогу після заглушок та підтверджений success UI з перехопленою API-відповіддю. Справжні GitHub issue під час тестів не створюються.
