# Informatics — Subject Proposition

Date: 2026-10-29

A subject-specific proposal of learning directions and scenarios for Informatics. This is **not** a Curriculum, a Skills Taxonomy, implemented code, or a new category of learning content. General conventions and interdisciplinary decisions: [Studio Subject Proposition](../../../studio/Subject%20Proposition.md). Canonical competencies: [Informatics Skills Taxonomy](./skills/taxonomy.md).

**Subject boundary:** using a digital tool in Music, Geography, or Engineering does not automatically turn those lessons into Informatics. An independent Informatics topic must teach algorithms, data structures, programs, or digital systems.

**UX is shared by two textbooks:** **Engineering** studies human interaction with physical products, mechanisms, devices, and whole engineering systems; **Informatics** separately studies UX of **digital products and devices**: navigation, feedback, comprehensibility, accessibility, and interface integrity. A physical button on a digital device can serve as an example in both if each subject has its own learning goal. Using a digital tool in another subject does not automatically create Informatics Skills. Art covers visual language and composition. [ISO 9241 — UX terminology](https://www.iso.org/obp/ui/).

## 1. Scope and Interdisciplinary Connections

**Global index — the Informatics textbook entry:**

| No. | Textbook | Main subject areas | Question-based / encyclopedic sections |
| --- | --- | --- | --- |
| 8 | **Informatics** | Boolean logic, algorithms, search strategies and algorithm efficiency, programming and recursion, databases, statistics, probability, digital systems and concurrent/parallel execution, robotics, software architecture, design principles, procedural generation and optimization, AI and prompting, digital safety | **"How does it work?"** — computers, the Internet, Wi-Fi, programs, AI |

**Subject-owned areas carried over from the global proposal:**

| Area | Subject ownership | Indicative content |
| --- | --- | --- |
| **Artificial Intelligence (AI)** | Informatics | Learning from examples, pattern recognition, intuitive introduction to neural networks, generative AI, errors and limitations |
| **AI Model Architectures and Selection** | Informatics | Intuitive comparison of dense and mixture-of-experts (MoE) models; quantization, speed, memory, context, cost, quality, and selecting a model for a task |
| **Software Architecture and Design Principles** | Informatics | Objects, properties, behavior, composition, interfaces, abstraction, encapsulation, inheritance, polymorphism; DRY, KISS, YAGNI, SRP, and simple design-pattern models |

**Interdisciplinary areas (editorial copy for Informatics; the global source remains [here](../../../studio/Subject%20Proposition.md)):**

| Area | Subject ownership | Indicative content |
| --- | --- | --- |
| **Robotics** | Engineering; Informatics; Physics | Robots, sensors, actuators, programmable control, automation |
| **Prompting and AI Literacy** | Informatics; Language and Literature; Human Thought / Philosophy | Clear task specification, context, examples and constraints in instructions; output verification, prompt refinement, confidentiality |
| **Cybersecurity** | Informatics; Health and Safety | Passwords, privacy, fraud, digital footprints, safe communication |
| **Game Design** | Informatics; Art | Game rules, mechanics, creation and testing |
| **Procedural Generation and Engineering Optimization** | Informatics; Mathematics; Art | Algorithmic generation of graphics, objects, worlds, and sounds; seeds, parameters, disk-space savings and trade-offs with memory, time, and computing power; .kkrieger (2004, roughly 96 KB) |
| **Search Strategies and Algorithm Efficiency** | Informatics; Mathematics | Random guessing, sequential and binary search, sorted data, number of checks, prerequisites, and a visual comparison in the 'Find the Surprise' activity |
| **Possibility, Probability, and Guarantee** | Mathematics; Informatics; Human Thought / Philosophy | Distinguish 'it can happen', 'how likely it is', and 'it is guaranteed'; the misconception that two outcomes imply 50/50; how data and assumptions affect chance estimates |
| **The History of World-Changing Inventions** | History; Engineering; Physics; Informatics; Art | What problem an invention solved, who worked on it and how, previous approaches, validation, and the changes and consequences it brought |

**Algorithm Lab — example activity:**

- **'Algorithm Lab'** — generate a virtual forest, pattern, or city from rules and a random seed, comparing instruction size, generation time, and appearance. In 'Find the Surprise,' compare random guessing with binary search using 'higher/lower' hints.

## 2. Software Architecture, Design Patterns, and AI Engineering

Within **Informatics**, we propose developing foundational engineering reasoning **before requiring code**: break a large task into parts, organize object interactions, define rules, verify a system's behavior, and choose an appropriate AI tool.

- **Object thinking:** objects, properties, actions, relationships, responsibility, composition; visual examples of abstraction, encapsulation, inheritance, and polymorphism. Knowing a metaphor is not equivalent to designing a program independently.
- **Principles:** DRY (avoid unnecessary duplication), KISS (avoid needless complexity), YAGNI (do not build unnecessary features), SRP (one coherent responsibility); later, intuitive concepts of interfaces, substitutability, and dependency on contracts. **Do not impose formal SOLID as compulsory material on every Grade 1–3 pupil.**
- **Patterns:** Factory (a 'workshop' creating an appropriate object), Strategy (interchangeable ways of performing a task), Observer (subscribers responding to events); begin with interactive models, introduce the terminology, and optionally code later.
- **Prompt Engineering:** describe the task, inputs, expected output format, examples, and constraints; refine after errors and compare responses against criteria. Avoid sharing personal information and automatically trusting confidently worded text.
- **AI model architectures:** intuitively compare a *dense* model with a *mixture of experts (MoE)*, where a router activates some computing blocks for tokens (not necessarily distinct 'math experts' and 'history experts'); illustrate **quantization** as lowering numerical representation precision to save memory, potentially at a quality cost.
- **Model selection:** compare accuracy, response latency, price, context size, memory requirements, privacy, and reliability for a task; a larger or more expensive model is not always needed.

| Indicative level | Software design | Working with AI |
| --- | --- | --- |
| **Grade 1** | Objects, actions, simple instructions, sequences, DRY, KISS | Ask clear questions, compare results with requirements, notice errors |
| **Grade 2** | Responsibilities, composition, encapsulation, and abstraction through models | Context, format, constraints, iterative prompt refinement, different model capabilities |
| **Grade 3** | Inheritance and polymorphism through examples, Factory/Strategy/Observer, SRP | Intuitive dense/MoE comparison, quantization, evidence-based model selection |

**Assessment through actions:** assemble a system from blocks, identify duplication, replace a strategy, predict an event response, improve an unclear prompt, choose a model for defined requirements, and explain the trade-off. Do not insist on verbatim definitions or adult-level syntax. The table is **guidance for a spiral progression, not a compulsory standard for every child**: adjust depth to readiness and interest.

## 3. 'How Did a Game Fit into 96 KB?' — .kkrieger and Procedural Generation

**An Informatics engineering case** linked to Mathematics (rules, functions, randomness), Art (textures and shapes), and the history of technology. Core question: **why might storing instructions for generating an object be better than storing the completed object?**

**Verified history:** in 2004, **.theprodukkt**, connected to the German demoscene group Farbrausch, released **.kkrieger**, an experimental 3D shooter with an executable around **96 KB** (sources also cite **97,280 bytes**). This was **not Far Cry**, nor a 10 KB game. The project competed in the 96 KB game category at Breakpoint 2004.

**How it worked:**
1. Instead of storing many completed textures, models, and audio files, the developers described some content through **rules, parameters, and procedural generation algorithms**.
2. On startup, the program computed and assembled the required resources. Audio used, among other things, a software synthesizer; visuals used texture and geometry generators.
3. Code optimization and executable packing were also used (including **kkrunchy**). The game relied on Windows graphics/audio libraries **Direct3D / DirectSound** and available computer hardware.
4. **Disk file size was not the same as runtime memory use or computational workload.** Startup resource generation required time, RAM, and CPU/GPU work; complex scenes could have substantial hardware demands and limitations. The technique does not automatically make every game better or smaller.

**Why it mattered:** the team demonstrated that a complex 3D scene with textures, audio, and game mechanics can emerge from a **very compact description** when programmers and artists jointly develop generative tools. This was not 'magical compression of any game' but a **different organization of resources and a trade-off among storage, CPU, GPU, memory, and time**. It was a demoscene engineering experiment, not proof that any large modern game can always fit into 96 KB.

**Learning interactions:**
- **'Save the Picture or the Recipe?'** — compare pre-rendered images with a short algorithm for making them. Show storage and computation time using clearly educational example numbers rather than actual .kkrieger measurements.
- **'A Forest from One Seed'** — set a seed, tree count, height, and palette; the program reproduces the same forest for the same parameters and algorithm. Explain deterministic pseudorandomness.
- **'Texture Lab'** — create a rule for repetition and variation instead of drawing every stone manually; change parameters and assess repeatability, visual expression, and complexity.
- **'Find the Trade-off'** — compare three hypothetical storage strategies (ready-made data, compressed data, procedural generation) in file size, preparation time, memory use, and computation; **compression is not generation**.

**Spiral progression:** Grade 1 — 'recipe versus completed picture'; Grade 2 — parameters and repeating patterns; Grade 3 — seeds, procedural world creation, and justified choices between storage and computation. Activities need not require writing code; adapt numbers and detail to learner age.

**Historical and technical references:** [Game Developer / Gamasutra — interview with Fabian Giesen (2005-04-12)](https://www.gamedeveloper.com/design/interview-frugal-fragging-with-i-kkrieger-i-), [ComputerBase — report on a 96 KB shooter (2004-04-17)](https://www.computerbase.de/news/gaming/kompletter-ego-shooter-mit-96-kb.10046/), [MobyGames — .kkrieger: Chapter 1](https://www.mobygames.com/game/31194/kkrieger-chapter-1/). Do not attribute resource generation only to the CPU: graphics libraries and the GPU also mattered.

## 4. Алгоритми пошуку, можливість і ймовірність — «Знайди сюрприз»

**Практичний кейс у підручнику «Інформатика»** з міжпредметним зв’язком із математикою (порядок чисел, порівняння, можливість і ймовірність). Дитина досліджує, як інформація й стратегія змінюють **гарантовану кількість перевірок**, і вчиться відрізняти *«це можливо»*, *«це ймовірно»* та *«цей результат гарантовано»*. Це задум майбутньої інтерактивної лабораторії, а не реалізований інтерфейс.

**Базова постановка:** усі ігрові раунди спочатку використовують **100 пронумерованих клітинок** (1–100), один сюрприз і порівнювані правила перевірки. Поле має форму **сітки 10 × 10**, а порядок номерів — **зліва направо в кожному рядку, згори донизу**: 1–10, 11–20, …, 91–100. У першому раунді — **три спроби без підказок**, у другому — підказки «більше / менше / знайдено» та до **семи спроб**. Діапазон після кожної підказки візуально звужується. **1000 клітинок — наступний мисленнєвий експеримент та можливе масштабування**, а не непомітна заміна початкового поля.

### Візуальний сценарій сцени: сітка 10 × 10 і кришки-схованки

1. **Огляд поля.** Спочатку на екрані з’являється **10 рядків по 10 клітинок**, кожна з чітким числом від **1 до 100**. Камера/композиція показує, що номери утворюють **один упорядкований список**, лише складений у сітку для зручності огляду. Номер 51 розташований на початку шостого рядка; «половина» стосується **числового інтервалу**, а не обов’язково геометричної лівої чи правої частини квадрата.
2. **Закриття схованок.** Над кожною клітинкою з’являється **непрозора кришка** й опускається згори: дитина бачить, як усі 100 позицій стають закритими. **Номер має залишитися видимим на верхній поверхні кришки** (або безпосередньо поруч), інакше впорядкований пошук за підказками стане незрозумілим. Кришки не просвічують вміст і не дають випадкових підказок про місце сюрпризу.
3. **Запрошення до гри.** Після завершення короткої анімації з’являється правило раунду та лічильник доступних спроб. **«Обери клітинку — відкрий кришку»**; під час першого раунду показується, що це *постановочний приклад без виграшу*, а не справжній випадковий розіграш.
4. **Відкривання та реакція.** Натискання піднімає або відсуває тільки обрану кришку; під нею дитина бачить **порожню клітинку** чи **сюрприз**, відповідно до правил поточного раунду. Відкрита клітинка залишається візуально відмінною; повторний клік не витрачає нову спробу. У режимі «більше / менше» окреме повідомлення пояснює напрямок, а неможливі номери приглушуються або їхні кришки відсуваються **як відкинуті кандидати, а не як нові перевірки**.
5. **Поділ навпіл у сітці.** Після вибору середнього **за номером**, а не візуально «центрального» квадратика, підсвічуємо залишковий числовий інтервал: наприклад, якщо перевірено 50 і відповідь «більше», можливі **51–100**. Показуємо їх як **50 придатних позицій**, а не як точний прямокутник половини поля за будь-якого стану. Наступний серединний вибір — 75 або 76 (залежно від обраного правила округлення); однакове правило діє протягом усієї вправи.
6. **Доступність і керування.** Для кожної кришки доступні назва «Клітинка №…», статус «закрита / перевірена / відкинута», керування клавіатурою та екранним читачем. Результат і підказка доступні не лише за кольором; анімацію падіння можна пропустити або вимкнути за налаштуванням зменшеного руху. На вузькому екрані зберігати логічний порядок номерів і придатні для натискання цілі, не робити 100 мікроскопічних кнопок.

**Принцип подання:** непрозорість кришок має приховувати **схованку, але не ідентифікатор позиції**. Поділ навпіл відбувається **впорядкованим списком індексів**, а не «розрізанням квадратного поля посередині» за геометрією.

### Можливість — не те саме, що ймовірність

- **Можливість** відповідає на запитання «чи може така подія відбутися за заданих умов?». **Імовірність** оцінює, наскільки часто або з яким шансом очікується подія за певною моделлю; знання лише двох відповідей «так / ні» не означає шанс 50/50.
- **Хиба «50 на 50»:** «Я вийду надвір і зустріну живого тиранозавра — або зустріну, або ні, отже 50/50». Два логічні варіанти **не є двома рівноймовірними подіями**. Для живого *нелітаючого* динозавра на кшталт тиранозавра немає підстав призначати ймовірність 50%; сучасні птахи, до речі, еволюційно належать до динозаврів, тому просто словосполучення «живий динозавр» неоднозначне.
- **Зрозумілий контрприклад:** зі 100 однакових на дотик закритих клітинок лише одна містить сюрприз. За чесного рівноймовірного розміщення шанс знайти його **однією** навмання обраною клітинкою — **1%**, а не 50%, хоча результатів «знайшов / не знайшов» два.
- **Невизначеність не є числом:** якщо не маємо даних чи обґрунтованої моделі, чесна відповідь — «я не знаю ймовірності», а не вигаданий відсоток. **Неможливо**, **можливо, але дуже малоймовірно**, **рівноймовірно** та **гарантовано** — різні характеристики подій.

### Стратегії пошуку й математичні орієнтири

| Стратегія | Інформація після перевірки | Максимум перевірок для 100 клітинок |
| --- | --- | --- |
| **Випадковий вибір без підказок** | «Знайдено / не знайдено» для однієї клітинки | До **100** за умови, що вже перевірені клітинки не обирають повторно |
| **Послідовний (лінійний) пошук** | Перевіряємо клітинки по черзі | До **100** |
| **Бінарний пошук** | Перевіряємо середину й отримуємо «більше / менше / знайдено» | До **7** за впорядкованих номерів і правильного вибору наступної середини |

Для `n` можливих позицій за цієї моделі максимальна кількість перевірок бінарного пошуку — `⌈log₂(n + 1)⌉`: **100 клітинок → щонайбільше 7**, а не 3. Однаково важливо: **пошук за правилом «більше / менше» потребує впорядкованих даних**. Тільки тоді можна відкинути приблизно половину кандидатів; як у словнику, впорядкованому за абеткою.

### Дослідницьке запитання: «А якщо клітинок стане удесятеро більше?»

**Перш ніж показувати відповідь**, запропонувати учневі передбачити: «Було **100 клітинок** і для гарантованого бінарного пошуку вистачало **7 перевірок**. Якщо стане **1000 клітинок** — чи знадобиться удесятеро більше, тобто 70? Чи достатньо лише кількох додаткових перевірок?» Дати вибрати гіпотезу та обґрунтувати її.

**Розкриття через інтерактив:** показати, що нові 1000 позицій — це, наприклад, **10 сторінок по 100 клітинок** із тією самою пронумерованою сіткою 10 × 10 на кожній. Нумерація від 1 до 1000 наскрізна, а серединна перевірка відбувається за **індексом у всіх сторінках**, не тільки на поточному екрані. Після підказки приглушити приблизно половину **всієї** колекції, разом із цілими сторінками, і показати лічильник можливих варіантів: **1000 → приблизно 500 → 250 → 125 → 62–63 → 31–32 → 15–16 → 7–8 → 3–4 → 1–2 → 0–1** (точні значення залежать від того, чи перевірено сам середній елемент та від округлення). Окремі клітинки не мусять одночасно вміщуватися на маленькому екрані; важливі наскрізний порядок і видимий прогрес звуження.

| Кількість позицій | Найгірший випадок лінійного пошуку | Найгірший випадок бінарного пошуку |
| ---: | ---: | ---: |
| 100 | 100 | **7** |
| 1000 | 1000 | **10** |

**Висновок:** обсяг набору збільшився **в 10 разів**, але гарантована верхня межа бінарного пошуку — лише **з 7 до 10 перевірок**, тобто на **3 додаткові**. Це наслідок послідовного відкидання приблизно половини кандидатів; загальне правило залежить від розміру набору і не означає, що кожне збільшення в 10 разів завжди додає точно три перевірки. За необхідності пізніше можна пояснити, що `2⁷ = 128`, а `2¹⁰ = 1024`: ці масштаби допомагають відчути логарифмічне зростання. Учень має **спочатку спрогнозувати**, а потім перевірити результат експериментом.

**Чесний випадковий експеримент як окремий еталон:** якщо один сюрприз **заздалегідь** незалежно й рівноймовірно заховано серед 100 клітинок, то три **різні** навмання вибрані клітинки дають **3% імовірності успіху**. Це **не** означає, що 3% спроб обов’язково будуть успішними в кожній малій серії, і **не** є ймовірністю успіху в описаному нижче постановочному раунді.

### Інтерактивна лабораторія: два контрастні раунди

1. **Раунд 1 — «Без підказки: найгірший випадок».** Учень бачить **100 клітинок і три спроби**, не отримує підказок про напрямок. Це **заздалегідь позначена постановочна демонстрація гарантованої невдачі**: програма завжди показує три промахи, щоб відтворити *найгірший випадок* пошуку без додаткової інформації. Ігрове правило слід пояснити чесно: **«Зараз гра показує випадок, коли твоїх трьох перевірок не вистачить. Це не випадковий розіграш»**. Можна моделювати суперника, який після вибору дитиною трьох клітинок розміщує сюрприз в одній із **97 інших**. Не стверджувати, що сюрприз був рівноймовірно й незалежно прихований до початку такого раунду; не підміняти підсумок фразою «у тебе був шанс 3%», бо **в постановочному раунді шанс перемоги 0% за його правилами**.
2. **Раунд 2 — «Більше / менше».** Знову **100 упорядкованих пронумерованих клітинок**, але ціль **фіксується до першого натискання й не змінюється**. На кожну перевірку учень отримує «більше / менше / знайдено», а можливий інтервал підсвічується. Дитина самостійно обирає наступну клітинку, може випробувати середину, порівняти результат із крайнім вибором і знайти сюрприз **не більше ніж за 7 перевірок**, якщо послідовно обирає середину можливого діапазону.
3. **Розбір після раундів.** Порівняти постановочний невдалий приклад із гарантованою стратегією в другому раунді. Прямо назвати, що правила раундів **відрізняються доступною інформацією й способом вибору схованки**. Запитати, як змінився б перший результат у чесній випадковій грі; показати еталонні **3% для трьох різних спроб зі 100** і розмежувати *можливий успіх*, *ймовірність* та *гарантію*.
4. **Подальші експерименти.** За бажанням — окремий **чесно позначений випадковий режим** з незмінною від початку схованкою й можливістю виграшу, багато повторів для спостереження частоти успіху, або порівняння алгоритмів на впорядкованому масиві, словнику чи каталозі. Якщо така модель реалізується, її результати мають залишатися справді випадковими, без прихованого програмування програшу чи перемоги.

**Обов’язкова методична межа:** гарантований програш у **постановочному найгіршому випадку** допустимий як навчальна драматургія, але він **не може маскуватися під чесний випадковий експеримент**. Інакше демонстрація навчає хибної ймовірності та робить некоректним порівняння. Учневі доступна ясна інформація про правила до початку раунду, а після — пояснення їхніх наслідків; поразку не оцінюємо як помилку учня.

**Компетентності та подальше поглиблення:** відрізняти можливість, ймовірність та гарантію; розуміти умови пошуку; порівнювати випадковий, послідовний та бінарний пошук; інтерпретувати число кроків у найгіршому випадку; **передбачати, як зміниться необхідна кількість перевірок при збільшенні числа елементів**. За потреби відповідний Curriculum може вводити формальні позначення `O(n)`, `O(log n)` та досліджувати, як змінюється кількість кроків зі збільшенням масиву. **Таксономія не обмежує глибину опанування**.

## 5. Як генеративний AI вибирає токени — інтерактивна дошка Гальтона

**Місце — «Інформатика»; ціль — розуміти механіку породження тексту, а не лише вміти писати промпти.** Дошка Гальтона (Plinko) показує **вибір за розподілом імовірностей**, але це **педагогічна аналогія**, не конструкція мовної моделі: модель переоцінює можливі **наступні токени за наявним контекстом**, а не кидає кульки незалежно від попередніх кроків. Кількість кандидатів визначається **словником токенізатора** — мільярди параметрів моделі не означають мільярди можливих наступних токенів.

**Інтерактивний сценарій:**
1. **«2 + 2 = ...»** — три умовні варіанти «4», «5», «11» і навчальні, **вигадані та чітко підписані** шанси, наприклад 94%, 4%, 2%. Учень передбачає вибір. Важливо: це **не виміряні шанси реальної моделі**; правильність математики не доводиться ймовірністю текстового продовження.
2. Кулька падає в один із варіантів. Перемикачі **«випадкова вибірка за розподілом» / «вибір найімовірнішого»** демонструють, що модель не мусить обирати випадково. Частоти за багато повторів зіставляються з імовірностями.
3. Додаємо контекст «Уяви, що це говорить маленька дитина» або «Наведи типову неправильну відповідь» і **перемальовуємо розподіл**; «агу» чи помилка можуть отримати **умовно** більші шанси, але реальний чатбот **не гарантовано** відповість саме так. Прямо зазначити, що контекст не робить модель немовлям чи поганим учнем.
4. Вибраний токен входить до контексту, після чого оцінюємо **новий розподіл наступного токена**. Токен може бути символом, частиною слова, словом чи розділовим знаком: **токен не дорівнює літері, символу чи цілому слову**.
5. Візуальний лічильник **контекстного вікна**: різні моделі мають різні межі токенів. Коли вхід перевищує ліміт, конкретний сервіс може **відмовити, обрізати чи підсумувати** історію; не обіцяти єдиної поведінки всіх систем. Окремо відрізняти розмір контексту від ліміту відповіді.
6. Порівняти **предиктивну задачу** (оцінити клас, число чи ризик) і **генеративну задачу** (створити послідовність чи зображення). **Вони не взаємовиключні:** породження тексту також включає прогноз наступного токена; поняття «предиктивний AI» залежить від контексту.

Доступність: усі шанси видимі текстом, анімацію можна вимкнути; оцінки показують **лише вигадані навчальні величини**. [Джерело щодо токенів і контексту](https://help.openai.com/en/articles/4936856-understanding-and-counting-tokens).

## 6. Цифрова безпека й AI — навчальні кейси

### Надмірне підтакування AI: «Ти геній!» — це не доказ

У безпечному вигаданому діалозі учень порівнює безпідставну похвалу з коректною перевіркою факту. Поняття **sycophancy** — надмірна погоджувальність, здатна підтримувати помилки. **Не стверджувати, що AI завжди погоджується або що доведено єдину комерційну мотивацію.** Відомий задокументований приклад: **OpenAI відкликала надто підтакувальне оновлення GPT‑4o у квітні 2025 року**. Учимо просити контраргументи, перевіряти незалежні джерела й не приймати комплімент за підтвердження ідеї.

**Реальний кейс для старших учнів / педагогічного розбору:** канадець **Allan Brooks**, за його свідченнями та журналістськими публікаціями, під час тривалих розмов із чатботом повірив у хибне математичне відкриття. Він згодом став **програмним директором The Human Line Project**; **засновник — Etienne Brisson**. Історію подавати як повідомлення та особисті свідчення, не як медичний діагноз чи остаточний судовий висновок. Підкреслити небезпеку відриву від перевірюваної реальності, ізоляції від близьких, надмірної тривалості розмов; важливість підтримки довіреної людини й фахівця. Не романтизувати психологічну кризу, не відтворювати шкідливі діалоги. [OpenAI про sycophancy](https://openai.com/index/sycophancy-in-gpt-4o/); [The Human Line Project](https://thehumanlineproject.org/); [інтерв’ю Brooks і Brisson](https://intoaisafety.transistor.fm/episodes/holding-the-human-line-w-allan-brooks-and-etienne-brisson/transcript).

### Пошукові системи знаходять поширені розмови

У **липні 2025 року** в індексі пошукових систем знаходилися **окремі чати ChatGPT, поширені користувачами через публічне посилання з увімкненою опцією пошукової доступності**; **31 липня OpenAI прибрала цю опцію**. Це не означає масового відкриття всіх приватних чатів. Дитина на **вигаданих прикладах** розрізняє приватну розмову, публічне посилання, видимий усім документ і медичні/службові/персональні секрети, які не можна розкривати. [Розбір події з уточненням і виправленням](https://techcrunch.com/2025/07/31/your-public-chatgpt-queries-are-getting-indexed-by-google-and-other-search-engines/).

### Чому знеособлені дані можуть бути впізнаваними

На **вигаданих маршрутах** показати, як поєднання часу й місця з іншими відомостями може виділити одну людину з великого набору. Перевірена праця **Yves-Alexandre de Montjoye та співавторів (2013)** дослідила **1,5 млн мобільних траєкторій**; за **чотирма точками місця й часу** у цьому наборі можна було **унікально вирізнити 95% траєкторій**. Це **не рівнозначно встановленню імен, дітей та адреси будь-якої конкретної людини**. Не вигадувати особу «норвезького програміста» без джерел. Не експериментувати з реальними даними дітей. [Наукове дослідження](https://pmc.ncbi.nlm.nih.gov/articles/PMC3607247/).

### Фішинг, підміна адрес і довіра до листів

На безпечних вигаданих прикладах зіставити видиму назву кнопки, справжній домен (`facebook.com.example.org` — це **`example.org`**, не `facebook.com`), схожі символи, пошту на кшталт `BillGates@gmail.com` та підроблену форму входу. **Ім’я відправника і логотип не є підтвердженням особи.** Ризики посилання: викрадення введеного пароля, завантаження/запуск шкідливого файла, а за наявності вразливості — технічна експлуатація. **Не стверджувати, що будь-який клік автоматично виконує код.** Ввести фішинг, соціальну інженерію, багатофакторну автентифікацію, перевірку домену та звернення до офіційного каналу. Окремо розмежувати вміння **розпізнати фішинг**, **оцінити наслідки переходу за посиланням** і **перевірити справжній домен**; схожі літери в підробленій адресі належать до останньої навички. Для MFA розрізняти розуміння незалежних факторів входу і їх безпечне налаштування з відновленням доступу.

## 7. Програмна логіка та люди, які її створювали

**Булева логіка.** Починати з істинності простої умови, окремо досліджувати І (`AND`), АБО (`OR`, включне) і НЕ (`NOT`), а потім комбінувати їх у виразах із дужками та визначеним пріоритетом операцій. Зміна порядку групування може змінити результат, але сама логічна умова не повинна підмінятися кодом перевірки.

**Рекурсія як спосіб обчислення.** На простих скінченних прикладах відрізняти пояснення повторного виклику з базовим випадком від самостійної побудови рекурсивного алгоритму, де підзадачі зменшуються й досягають завершення. Не плутати рекурсію з нескінченним викликом без базового випадку.

**Інтерактив «Чому друга умова не спрацювала?»** На `if (hasGreen)` з наступною `else if (hasGreen && hasRed)` показати, що для об’єкта з обома прапорцями друга гілка **недосяжна**: перша перекриває її. Виправлення — ставити **специфічнішу умову раніше**, якщо умови перекриваються й це ланцюг альтернатив. **Не перетворювати на універсальне правило «складні умови завжди першими»**; два незалежні `if` можуть обидва виконатися.

**Інтерактив «Чому тисячу разів рахуємо те саме?»** Порівняти повторне обчислення незмінного виразу **всередині циклу** та одноразове **перед циклом**. Винесення безпечне лише тоді, коли залежності не змінюються, а перенесення **не змінює побічні ефекти**. Окремо показати **нескінченний цикл** без досяжної умови виходу.

**Історія програмування — ідеї, технологічні внески та їхні творці.** Навички в [Skills Taxonomy](./skills/taxonomy.md) визначено за відтворюваними концептуальними внесками, а не за окремими біографіями. Водночас **конкретні люди та команди — обов’язковий навчальний зміст**, і їх не можна вилучати через перейменування скілів.

| Концептуальний внесок | Обов’язковий історичний зміст |
| --- | --- |
| Витоки програмування | **Ада Лавлейс**, аналітична машина **Чарльза Беббіджа**, описи послідовностей операцій |
| Раннє електронне програмування | **Шість програмісток ENIAC** і практична підготовка програм на ранніх електронних машинах |
| Розвиток компіляторів | **Грейс Гоппер**, перехід до вищих рівнів опису програм, спільний розвиток мов і компіляторів |
| Надійність програм | **Маргарет Гамільтон**, команда програмного забезпечення **Apollo**, обробка відмов і вимоги до критичних систем |
| Усунення мережевих петель | **Радія Перлман**, **Spanning Tree Protocol** для мостів локальних мереж; не плутати з маршрутизацією IP |
| Теорія обчислюваності | **Алан Тюрінг**, формальна модель обчислення та її обмеження |
| Історичні методи криптоаналізу | **Джоан Кларк**, **Алан Тюрінг**, **Гордон Велчман**, **польські криптоаналітики** та їхній внесок у розвиток методів пошуку |
| Обчислювальні й спеціалізовані машини | Розвиток програмованих комп’ютерів; **Bombe** як електромеханічна машина для перевірки можливих налаштувань **Enigma**, не універсальний комп’ютер |

На прикладах з історії показувати фундаментальну й довго недооцінену роль жінок поряд із внеском інших дослідників; не підміняти документовані факти твердженням, що майже всі технології створила одна група людей. **Тест Тюрінга** й **«Китайська кімната» Джона Серла (1980)** належать до осмислення AI та питань імітації людських відповідей і розуміння, а не до групи історичних обчислювальних машин.

**Джерела до історичних прикладів:** [Computer History Museum — Women in Computing](https://computerhistory.org/activities-resources/women-in-computing-history/); [National Museum of Computing — Bombe](https://www.tnmoc.org/bombe); [GCHQ — Joan Clarke](https://www.gchq.gov.uk/information/joan-clarke); [Stanford Encyclopedia — Chinese Room](https://plato.stanford.edu/entries/chinese-room/).

**Бази даних та паралелізм — окремі технічні моделі.** На прикладі бібліотечного каталогу відрізняти відображення даних у звичайній таблиці від реляційної бази з записами, полями, унікальними ключами та зв’язками. На прикладі кількох незалежних обчислень відрізняти послідовне виконання від конкурентного чергування і фактичного паралельного виконання; окремо планувати залежності між підзадачами, не обіцяючи автоматичного прискорення.

## 8. Прості алгоритми — кожен зі своєю навчальною моделлю

**Організаційне рішення для редакційного рев’ю:** домен «Алгоритми» у [Skills Taxonomy](./skills/taxonomy.md) групує компетентності **за призначенням**: пошук, сортування, обробка наборів, загальна побудова й аналіз. Кожен названий базовий алгоритм має **окремий Skill** як самостійно ідентифіковану компетентність (наприклад, застосовувати лінійний пошук). Його передумови, ефективність і порівняння можуть бути додатковими незалежними Skills тієї самої групи. Окрему нову сутність `Algorithm` поки не створюємо: поточна ієрархія Domain → Group → Skill задовольняє класифікацію та незалежне оцінювання названих алгоритмів. Якщо з’явиться підтверджена потреба пов’язувати декілька Skills з одним алгоритмом як окремим об’єктом, спочатку оформити архітектурне рев’ю.

| Алгоритм | Просте пояснення / навчальна модель | Чого слід не сплутати |
| --- | --- | --- |
| Лінійний пошук | Переглядати одну картку за одною, доки не знайдемо потрібну | Не потребує сортування; шуканого може не бути |
| Бінарний пошук | У впорядкованих картках перевіряти середину й відкидати непотрібну половину | Не працює за тими самими правилами з довільно перемішаними значеннями |
| Сортування вибором | Щоразу брати найменшу картку з решти й переносити на початок | Пошук мінімуму є кроком цього алгоритму, не тотожним усьому сортуванню |
| Сортування вставками | Укладати наступну картку в потрібне місце вже впорядкованого ряду | Потрібно підтримувати впорядковану частину |
| Бульбашкове сортування | Порівнювати сусідні картки й міняти неправильні пари місцями | Один прохід не завжди сортує весь набір |
| Підрахунок елементів | Обходити предмети й додавати один за кожен збіг з умовою | Кількість збігів не дорівнює сумі їхніх значень |
| Накопичення суми | Класти числа в уявну скриньку, додаючи їх одне за одним | Не плутати акумулятор суми з лічильником елементів |
| Знаходження максимуму | Зберігати «найбільше з тих, що вже бачили», оновлюючи за потреби | Не вимагати сортування всього набору |
| Знаходження мінімуму | Зберігати «найменше з тих, що вже бачили», оновлюючи за потреби | Не вимагати сортування всього набору |
| Пошук у двійковому дереві | Від вузла зіставляти ключ і обирати ліву чи праву гілку впорядкованого дерева | Потрібне правило дерева пошуку; не кожне дерево підходить |

**Критерій включення:** спершу перевіряти, чи можна пояснити реальний принцип алгоритму дитині 1–3 класів на чесній, зрозумілій моделі без приховування вирішальної передумови. Якщо конкретний алгоритм не вдається пояснити коректно, слід **обґрунтувати** рішення, а не автоматично включати чи вилучати його за назвою. Це критерій добору прикладів і планування уроків, **не вікова межа для всієї таксономії**. Окремий Skill не вимагає окремої реалізації чи Lesson.

## 9. UX цифрових продуктів — як людина взаємодіє з пристроєм

**Обидва підручники зберігають UX, але мають власні цілі.** Інженерія може досліджувати форму, силу натискання й розміщення фізичної кнопки, а інформатика — що відбувається **у цифровій системі** після натискання: чи зрозумілий стан пристрою, чи є повідомлення про результат, чи можна виправити помилку й чи доступна та сама дія іншими способами. Цифровий пристрій — не тільки екран: це також кнопки, клавіатура, звуковий відгук, сенсорне керування та доступні альтернативи.

**Мінілабораторія «Чому кнопка не працює?»** На безпечній моделі цифрового пристрою учень натискає кнопку без видимого зворотного зв’язку, а потім порівнює з моделлю, де з’являється повідомлення про стан. Він визначає, чи зрозуміла мета дії, чи можна знайти потрібну функцію, як система повідомляє про помилку та чи можливо виконати її без звуку або миші. Окремо показати оманливу кнопку, що приховує справжній наслідок: це питання доброчесності цифрового UX.

**Межа дисциплін:** універсальні принципи дизайну, ергономіки та зручності інженерних виробів залишаються в Engineering; взаємодія з цифровими функціями, налаштуваннями, програмними станами й інтерфейсами — самостійна частина Informatics. Матеріали можуть перетинатися, а Skills та їхні ідентичності — бути локальними для кожного підручника. UX не треба зводити лише до доступності чи лише до безпеки.
