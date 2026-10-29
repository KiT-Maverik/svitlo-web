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

## 4. Search Algorithms, Possibility, and Probability — 'Find the Surprise'

**An Informatics learning case**, connected to Mathematics (numerical order, comparison, possibility, and probability). Students investigate how information and strategy change the **guaranteed number of checks** and distinguish *'possible'*, *'likely'*, and *'guaranteed'*. This is a proposal for a future interactive lab, not an implemented interface.

**Initial setup:** the first rounds use **100 numbered cells** (1–100), one hidden surprise, and comparable checking rules. The field is a **10 × 10 grid**, numbered **left to right across each row, top to bottom**: 1–10, 11–20, …, 91–100. The first round gives **three tries without hints**; the second provides 'higher/lower/found' hints and up to **seven tries**. The remaining range visibly narrows after each hint. **1,000 cells are a later thought experiment and possible scaling**, not an unannounced replacement of the initial grid.

### Visual Scene Plan: a 10 × 10 Grid with Hiding-Place Covers

1. **Introduce the field.** First show **10 rows of 10 cells**, each clearly numbered **1 to 100**. The camera/composition conveys that the numbers form **one ordered list**, arranged as a grid only for easier viewing. Cell 51 begins the sixth row. 'Half' refers to a **numerical interval**, not necessarily the geometric left or right half of the square.
2. **Cover the hiding places.** An **opaque cover** appears above each cell and descends, visibly closing all 100 positions. The **number must stay visible on top of or next to the cover**; otherwise ordered search with hints is hard to understand. Covers neither reveal their contents nor accidentally hint at the surprise's location.
3. **Invite the learner to play.** After a short animation, show the round's rules and the remaining attempt count. **'Choose a cell — open the cover.'** The first round explicitly identifies itself as a *scripted no-win demonstration*, not a genuinely random draw.
4. **Opening and feedback.** A click raises or moves only the selected cover. Underneath is an **empty cell** or **the surprise**, according to the current round's rules. An opened cell remains visually distinct, and repeated clicks do not consume another attempt. In the 'higher/lower' mode, a separate message specifies direction; impossible numbers become dimmed or their covers move aside **as eliminated candidates, not additional checks**.
5. **Halving within a grid.** After selecting the middle **by number**, not the visually central square, highlight the remaining numerical interval. If 50 was checked and the answer is 'higher', the candidates are **51–100**. Display these as **50 eligible positions**, not necessarily as an exact rectangular half of the field. The next midpoint may be 75 or 76 depending on the rounding convention; use the same convention throughout.
6. **Accessibility and controls.** Every cover needs a name such as 'Cell no. …', a status ('closed/checked/eliminated'), keyboard operation, and screen-reader support. Results and hints must not depend on color alone. The falling animation should be skippable or respect reduced-motion settings. On narrow screens retain logical numerical order and usable targets; do not render 100 microscopic buttons.

**Presentation principle:** opaque covers conceal **the hiding place, not its position identifier**. Halving applies to **the ordered index list**, not geometrically cutting the square field in half.

### Possibility Is Not Probability

- **Possibility** asks 'can this happen under the stated conditions?' **Probability** estimates how frequently or with what chance an event is expected under a model. Knowing only the answers 'yes/no' does not make the odds 50/50.
- **The '50/50' fallacy:** 'I may go outside and encounter a living Tyrannosaurus rex—or not—so the odds are 50/50.' Two logical outcomes are **not necessarily equally likely**. There is no basis for assigning a 50% chance of encountering a living *non-avian* dinosaur such as T. rex. Modern birds are evolutionarily dinosaurs, so 'living dinosaur' alone is ambiguous.
- **A clear counterexample:** only one of 100 identically covered cells contains a surprise. If its placement is fair and uniform, a single random guess has a **1%** chance, not 50%, despite the two labels 'found/not found'.
- **Uncertainty is not a number:** without evidence or a justified model, 'I do not know the probability' is better than an invented percentage. **Impossible**, **possible but very unlikely**, **equally likely**, and **guaranteed** describe different properties of events.

### Search Strategies and Mathematical Benchmarks

| Strategy | Information after a check | Maximum checks for 100 cells |
| --- | --- | --- |
| **Random choice without hints** | 'Found/not found' for one cell | Up to **100**, provided already checked cells are not chosen again |
| **Sequential (linear) search** | Check cells in order | Up to **100** |
| **Binary search** | Check the midpoint and receive 'higher/lower/found' | Up to **7** with ordered numbers and correct midpoint selection |

For `n` potential positions under this model, the maximum number of binary-search checks is `⌈log₂(n + 1)⌉`: **100 cells → at most 7**, not 3. Crucially, **higher/lower search requires ordered data**. Only then may roughly half the candidates be eliminated, as with an alphabetically ordered dictionary.

### Investigation: 'What If There Are Ten Times as Many Cells?'

**Before revealing the answer**, ask learners to predict: 'With **100 cells**, guaranteed binary search needed no more than **7 checks**. If there are **1,000 cells**, does it need ten times as many—70 checks—or only a few extra?' Invite them to choose and justify a hypothesis.

**Interactive reveal:** show 1,000 positions as, for example, **10 pages of 100 cells** with the same numbered 10 × 10 grid per page. Numbering continues from 1 to 1,000; the midpoint is chosen by **index across all pages**, not merely the visible page. After each hint, dim roughly half of the **entire** collection, including whole pages, and show remaining candidates: **1,000 → about 500 → 250 → 125 → 62–63 → 31–32 → 15–16 → 7–8 → 3–4 → 1–2 → 0–1** (exact values depend on whether the midpoint itself was tested and the rounding convention). Not every cell needs to fit on a small screen simultaneously; global order and visible narrowing progress matter.

| Number of positions | Linear search, worst case | Binary search, worst case |
| ---: | ---: | ---: |
| 100 | 100 | **7** |
| 1000 | 1000 | **10** |

**Conclusion:** the collection grows **tenfold**, but the guaranteed upper bound for binary search rises only **from 7 to 10 checks**, or **3 additional** checks. This follows from repeatedly eliminating roughly half the candidates. The general rule depends on dataset size; a tenfold increase does not always add exactly three checks. Later, `2⁷ = 128` and `2¹⁰ = 1024` can make logarithmic growth more intuitive. Learners should **predict first** and then test the result.

**A fair random experiment as a separate benchmark:** if one surprise is placed **in advance**, independently and uniformly among 100 cells, three **distinct** random choices have a **3% probability of success**. This does **not** mean precisely 3% of guesses must succeed in each small sample, and it is **not** the probability of winning in the scripted round described below.

### Interactive Lab: Two Contrasting Rounds

1. **Round 1 — 'No hints: worst case.'** Learners see **100 cells and three attempts** with no directional hints. This is an **explicitly labeled scripted demonstration of guaranteed failure**: the program always shows three misses to illustrate the *worst case* without additional information. Explain the rule plainly: **'This round demonstrates a case where three checks are not enough. It is not a random draw.'** One model uses an adversary who, after the three choices, puts the surprise in one of the **other 97** cells. Do not claim it was independently and uniformly hidden before the round; do not say 'you had a 3% chance', because **the scripted round has a 0% chance of winning by design**.
2. **Round 2 — 'Higher/Lower.'** Again use **100 ordered numbered cells**, but fix the hidden target **before the first click and never change it**. Every check gives a 'higher/lower/found' hint and highlights the remaining possible interval. Learners choose the next cell themselves, can try the midpoint and compare it with an endpoint guess, and can find the surprise **within 7 checks** if they consistently choose the midpoint of the feasible range.
3. **Debrief.** Compare the scripted failure with the strategy that guarantees success in Round 2. Explicitly note that the rounds **differ in the available information and how the hiding place is chosen**. Ask what Round 1 would look like in a fair random game, show the **3% benchmark for three distinct guesses out of 100**, and distinguish *possible success*, *probability*, and *guarantee*.
4. **Further experiments.** Optionally provide a **clearly labeled fair random mode** with an unchanging preselected hiding place and a chance of success, repeat the experiment to observe frequencies, or compare algorithms on a sorted array, dictionary, or catalog. If implemented, outcomes must remain genuinely randomized without covertly programming wins or losses.

**Essential pedagogical boundary:** guaranteed loss in a **scripted worst-case** is acceptable teaching dramaturgy, but **must not be misrepresented as a fair random experiment**. Doing so would teach incorrect probability and invalidate the comparison. Learners must know the rules before each round and receive an explanation afterward; losing does not count as a learner error.

**Competencies and further depth:** distinguish possibility, probability, and certainty; understand search preconditions; compare random, sequential, and binary searches; interpret worst-case operation counts; **predict how the number of checks changes as the number of elements grows**. A Curriculum may later introduce `O(n)`, `O(log n)`, and investigate scaling with collection size. **The taxonomy does not impose a maximum learning depth.**

## 5. How Generative AI Selects Tokens — Interactive Galton Board

**Subject: Informatics; objective: understand text generation mechanisms, not merely learn prompt writing.** A Galton board (Plinko) illustrates **sampling from a probability distribution** but is a **pedagogical analogy**, not the structure of a language model. A model evaluates possible **next tokens from the current context**, not independent ball drops. The number of candidates follows the **tokenizer vocabulary**; billions of model parameters do not mean billions of possible next tokens.

**Interactive scenario:**
1. **'2 + 2 = ...'** — offer three illustrative continuations ('4', '5', '11') with clearly labeled **invented educational probabilities**, for example 94%, 4%, and 2%. Learners predict a selection. These are **not probabilities measured from a real model**, and mathematical truth is not established by likely text continuations.
2. A ball falls into one outcome. Switch between **'sample from the distribution'** and **'select the most likely'** to show that a model need not sample randomly. Compare observed frequencies across repetitions with the supplied probabilities.
3. Add context such as 'Pretend this is spoken by a toddler' or 'Give a typical wrong answer' and **redraw the distribution**; a baby-like sound or wrong response may receive **illustratively** more probability, but a real chatbot is **not guaranteed** to behave that way. Context does not turn the model into an infant or an unsuccessful student.
4. Include the chosen token in the context, then calculate a **new distribution for the next token**. A token may be a symbol, a fragment, a word, or punctuation: **a token is not the same as a letter, character, or whole word**.
5. Show a visual **context window counter**. Models have different token limits. When input exceeds a limit, a service may **reject, truncate, or summarize** history; do not promise one behavior for every system. Distinguish context capacity from response length limits.
6. Compare a **predictive task** (estimate a category, number, or risk) with a **generative task** (produce a sequence or image). **They are not mutually exclusive:** text generation includes next-token prediction, so 'predictive AI' depends on the context in which the term is used.

**Accessibility:** all probabilities are shown as text, animations can be disabled, and probabilities are **invented teaching values only**. [Reference on tokens and context](https://help.openai.com/en/articles/4936856-understanding-and-counting-tokens).

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
