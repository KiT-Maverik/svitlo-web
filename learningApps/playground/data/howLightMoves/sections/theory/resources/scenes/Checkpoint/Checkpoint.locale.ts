import type { DefaultSupportedLanguage } from '@svitlo/engine/localization';

export type TheoryKnowledgeCheckpoint_Locale = {
  title: string;
  items: readonly { question: string; answer: string }[];
};

const en = {
  title: 'Try to explain',
  items: [
    { question: 'Where is the light source in the scene?', answer: 'The source is on the left.' },
    {
      question: 'Does the path change when you change the animation speed?',
      answer: 'The control changes only the animation speed; the path stays straight.',
    },
    {
      question: 'What happens if you put an opaque object between the source and the screen?',
      answer: 'An opaque object blocks some of the light and casts a shadow behind it.',
    },
  ],
} satisfies TheoryKnowledgeCheckpoint_Locale;

const zh = {
  title: '试着解释',
  items: [
    { question: '场景中的光源在哪里？', answer: '光源在左侧。' },
    { question: '改变动画速度时，路径会改变吗？', answer: '调节器只改变动画速度，传播路径仍是直线。' },
    {
      question: '如果在光源和屏幕之间放置不透明物体，会发生什么？',
      answer: '不透明物体会挡住部分光线，并在后方形成影子。',
    },
  ],
} satisfies TheoryKnowledgeCheckpoint_Locale;

const hi = {
  title: 'समझाने की कोशिश करें',
  items: [
    { question: 'दृश्य में प्रकाश का स्रोत कहाँ है?', answer: 'स्रोत बाईं ओर है।' },
    {
      question: 'ऐनिमेशन की गति बदलने पर क्या उसका रास्ता बदलता है?',
      answer: 'नियंत्रण केवल ऐनिमेशन की गति बदलता है; रास्ता सीधा रहता है।',
    },
    {
      question: 'स्रोत और पर्दे के बीच अपारदर्शी वस्तु रखने पर क्या होगा?',
      answer: 'अपारदर्शी वस्तु कुछ प्रकाश रोक देती है और उसके पीछे छाया बनती है।',
    },
  ],
} satisfies TheoryKnowledgeCheckpoint_Locale;

const es = {
  title: 'Intenta explicarlo',
  items: [
    { question: '¿Dónde está la fuente de luz en la escena?', answer: 'La fuente está a la izquierda.' },
    {
      question: '¿Cambia la trayectoria al modificar la velocidad de la animación?',
      answer: 'El control solo cambia la velocidad de la animación; la trayectoria sigue siendo recta.',
    },
    {
      question: '¿Qué ocurre si colocas un objeto opaco entre la fuente y la pantalla?',
      answer: 'Un objeto opaco bloquea parte de la luz y produce una sombra detrás de él.',
    },
  ],
} satisfies TheoryKnowledgeCheckpoint_Locale;

const ar = {
  title: 'حاول أن تشرح',
  items: [
    { question: 'أين يقع مصدر الضوء في المشهد؟', answer: 'المصدر على اليمين.' },
    {
      question: 'هل يتغير المسار عندما تغيّر سرعة الحركة؟',
      answer: 'يغيّر عنصر التحكم سرعة العرض فقط؛ ويبقى المسار مستقيمًا.',
    },
    {
      question: 'ماذا يحدث إذا وضعت جسمًا معتمًا بين المصدر والشاشة؟',
      answer: 'يحجب الجسم المعتم جزءًا من الضوء فتتكوّن خلفه ظلال.',
    },
  ],
} satisfies TheoryKnowledgeCheckpoint_Locale;

const fr = {
  title: "Essaie d'expliquer",
  items: [
    { question: 'Où se trouve la source de lumière dans la scène ?', answer: 'La source est à gauche.' },
    {
      question: "La trajectoire change-t-elle quand tu modifies la vitesse de l'animation ?",
      answer: "Le réglage change seulement la vitesse de l'animation ; la trajectoire reste droite.",
    },
    {
      question: "Que se passe-t-il si tu places un objet opaque entre la source et l'écran ?",
      answer: 'Un objet opaque bloque une partie de la lumière et crée une ombre derrière lui.',
    },
  ],
} satisfies TheoryKnowledgeCheckpoint_Locale;

const bn = {
  title: 'ব্যাখ্যা করার চেষ্টা করো',
  items: [
    { question: 'দৃশ্যে আলোর উৎস কোথায়?', answer: 'উৎসটি বাঁ দিকে।' },
    {
      question: 'অ্যানিমেশনের গতি বদলালে কি পথ বদলে যায়?',
      answer: 'নিয়ন্ত্রণটি শুধু অ্যানিমেশনের গতি বদলায়; পথ সোজাই থাকে।',
    },
    {
      question: 'উৎস ও পর্দার মাঝখানে অস্বচ্ছ বস্তু রাখলে কী হবে?',
      answer: 'অস্বচ্ছ বস্তু কিছু আলো আটকে দেয় এবং তার পেছনে ছায়া তৈরি হয়।',
    },
  ],
} satisfies TheoryKnowledgeCheckpoint_Locale;

const pt = {
  title: 'Tente explicar',
  items: [
    { question: 'Onde está a fonte de luz na cena?', answer: 'A fonte está à esquerda.' },
    {
      question: 'A trajetória muda quando você altera a velocidade da animação?',
      answer: 'O controle altera apenas a velocidade da animação; a trajetória continua reta.',
    },
    {
      question: 'O que acontece se você colocar um objeto opaco entre a fonte e a tela?',
      answer: 'Um objeto opaco bloqueia parte da luz e forma uma sombra atrás dele.',
    },
  ],
} satisfies TheoryKnowledgeCheckpoint_Locale;

const ur = {
  title: 'وضاحت کرنے کی کوشش کریں',
  items: [
    { question: 'منظر میں روشنی کا منبع کہاں ہے؟', answer: 'منبع دائیں طرف ہے۔' },
    {
      question: 'حرکت کی رفتار بدلنے سے کیا راستہ بدلتا ہے؟',
      answer: 'کنٹرول صرف حرکت کی رفتار بدلتا ہے؛ راستہ سیدھا رہتا ہے۔',
    },
    {
      question: 'منبع اور پردے کے درمیان غیر شفاف چیز رکھنے سے کیا ہوگا؟',
      answer: 'غیر شفاف چیز کچھ روشنی روک دیتی ہے اور اس کے پیچھے سایہ بن جاتا ہے۔',
    },
  ],
} satisfies TheoryKnowledgeCheckpoint_Locale;

const id = {
  title: 'Coba jelaskan',
  items: [
    { question: 'Di mana letak sumber cahaya pada adegan?', answer: 'Sumber ada di sebelah kiri.' },
    {
      question: 'Apakah lintasan berubah ketika kecepatan animasi diubah?',
      answer: 'Pengatur hanya mengubah kecepatan animasi; lintasannya tetap lurus.',
    },
    {
      question: 'Apa yang terjadi jika benda tak tembus cahaya diletakkan di antara sumber dan layar?',
      answer: 'Benda tak tembus cahaya menghalangi sebagian cahaya dan membentuk bayangan di belakangnya.',
    },
  ],
} satisfies TheoryKnowledgeCheckpoint_Locale;

const de = {
  title: 'Versuche es zu erklären',
  items: [
    { question: 'Wo befindet sich die Lichtquelle in der Szene?', answer: 'Die Quelle ist links.' },
    {
      question: 'Ändert sich die Bahn, wenn du die Animationsgeschwindigkeit änderst?',
      answer: 'Der Regler ändert nur die Animationsgeschwindigkeit; die Bahn bleibt gerade.',
    },
    {
      question: 'Was passiert, wenn du einen undurchsichtigen Gegenstand zwischen Quelle und Schirm stellst?',
      answer: 'Ein undurchsichtiger Gegenstand hält einen Teil des Lichts auf und wirft dahinter einen Schatten.',
    },
  ],
} satisfies TheoryKnowledgeCheckpoint_Locale;

const ja = {
  title: '説明してみよう',
  items: [
    { question: '場面の中で光源はどこにありますか？', answer: '光源は左側にあります。' },
    {
      question: 'アニメーションの速さを変えると、進む道筋も変わりますか？',
      answer: '操作で変わるのはアニメーションの速さだけで、道筋は直線のままです。',
    },
    {
      question: '光源とスクリーンの間に光を通さない物体を置くと、どうなりますか？',
      answer: '光を通さない物体は光の一部を遮り、その後ろに影ができます。',
    },
  ],
} satisfies TheoryKnowledgeCheckpoint_Locale;

const ko = {
  title: '설명해 보세요',
  items: [
    { question: '장면에서 광원은 어디에 있나요?', answer: '광원은 왼쪽에 있습니다.' },
    {
      question: '애니메이션 속도를 바꾸면 이동 경로도 바뀌나요?',
      answer: '조절기는 애니메이션 속도만 바꾸며 경로는 여전히 직선입니다.',
    },
    {
      question: '광원과 스크린 사이에 불투명한 물체를 놓으면 어떻게 되나요?',
      answer: '불투명한 물체는 빛의 일부를 가로막아 뒤쪽에 그림자를 만듭니다.',
    },
  ],
} satisfies TheoryKnowledgeCheckpoint_Locale;

const tr = {
  title: 'Açıklamayı dene',
  items: [
    { question: 'Sahnedeki ışık kaynağı nerede?', answer: 'Kaynak soldadır.' },
    {
      question: 'Animasyon hızını değiştirdiğinde izlenen yol değişiyor mu?',
      answer: 'Denetim yalnızca animasyonun hızını değiştirir; yol düz kalır.',
    },
    {
      question: 'Kaynak ile ekran arasına opak bir cisim koyarsan ne olur?',
      answer: 'Opak cisim ışığın bir bölümünü engeller ve arkasında gölge oluşturur.',
    },
  ],
} satisfies TheoryKnowledgeCheckpoint_Locale;

const vi = {
  title: 'Thử giải thích',
  items: [
    { question: 'Nguồn sáng nằm ở đâu trong cảnh?', answer: 'Nguồn sáng ở bên trái.' },
    {
      question: 'Quỹ đạo có thay đổi khi bạn đổi tốc độ hoạt ảnh không?',
      answer: 'Nút điều khiển chỉ đổi tốc độ hoạt ảnh; quỹ đạo vẫn thẳng.',
    },
    {
      question: 'Điều gì xảy ra nếu đặt vật không trong suốt giữa nguồn sáng và màn chắn?',
      answer: 'Vật không trong suốt chắn một phần ánh sáng và tạo bóng phía sau.',
    },
  ],
} satisfies TheoryKnowledgeCheckpoint_Locale;

const ta = {
  title: 'விளக்க முயலுங்கள்',
  items: [
    { question: 'காட்சியில் ஒளி மூலம் எங்கு உள்ளது?', answer: 'மூலம் இடப்புறத்தில் உள்ளது.' },
    {
      question: 'இயக்கத்தின் வேகத்தை மாற்றினால் பாதை மாறுமா?',
      answer: 'கட்டுப்பாடு இயக்கத்தின் வேகத்தை மட்டுமே மாற்றுகிறது; பாதை நேராகவே இருக்கும்.',
    },
    {
      question: 'மூலத்துக்கும் திரைக்கும் இடையில் ஒளி புகாத பொருளை வைத்தால் என்ன ஆகும்?',
      answer: 'ஒளி புகாத பொருள் ஒளியின் ஒரு பகுதியைத் தடுத்து, அதன் பின்னால் நிழலை உருவாக்கும்.',
    },
  ],
} satisfies TheoryKnowledgeCheckpoint_Locale;

const te = {
  title: 'వివరించడానికి ప్రయత్నించండి',
  items: [
    { question: 'దృశ్యంలో కాంతి మూలం ఎక్కడ ఉంది?', answer: 'మూలం ఎడమ వైపున ఉంది.' },
    {
      question: 'యానిమేషన్ వేగాన్ని మార్చితే మార్గం కూడా మారుతుందా?',
      answer: 'నియంత్రణ యానిమేషన్ వేగాన్ని మాత్రమే మారుస్తుంది; మార్గం నేరుగానే ఉంటుంది.',
    },
    {
      question: 'మూలం, తెర మధ్య అపారదర్శక వస్తువును ఉంచితే ఏమవుతుంది?',
      answer: 'అపారదర్శక వస్తువు కొంత కాంతిని అడ్డుకుని తన వెనుక నీడను ఏర్పరుస్తుంది.',
    },
  ],
} satisfies TheoryKnowledgeCheckpoint_Locale;

const mr = {
  title: 'समजावून सांगण्याचा प्रयत्न करा',
  items: [
    { question: 'दृश्यात प्रकाशाचा स्रोत कुठे आहे?', answer: 'स्रोत डावीकडे आहे.' },
    {
      question: 'अॅनिमेशनचा वेग बदलल्यावर मार्ग बदलतो का?',
      answer: 'नियंत्रण फक्त अॅनिमेशनचा वेग बदलते; मार्ग सरळच राहतो.',
    },
    {
      question: 'स्रोत आणि पडदा यांच्या मध्ये अपारदर्शक वस्तू ठेवल्यास काय होईल?',
      answer: 'अपारदर्शक वस्तू काही प्रकाश अडवते आणि तिच्या मागे सावली तयार होते.',
    },
  ],
} satisfies TheoryKnowledgeCheckpoint_Locale;

const ms = {
  title: 'Cuba jelaskan',
  items: [
    { question: 'Di manakah sumber cahaya dalam adegan ini?', answer: 'Sumber berada di sebelah kiri.' },
    {
      question: 'Adakah laluan berubah apabila kelajuan animasi diubah?',
      answer: 'Kawalan hanya mengubah kelajuan animasi; laluannya kekal lurus.',
    },
    {
      question: 'Apakah yang berlaku jika objek legap diletakkan di antara sumber dengan skrin?',
      answer: 'Objek legap menghalang sebahagian cahaya dan menghasilkan bayang-bayang di belakangnya.',
    },
  ],
} satisfies TheoryKnowledgeCheckpoint_Locale;

const he = {
  title: 'נסו להסביר',
  items: [
    { question: 'היכן נמצא מקור האור בסצנה?', answer: 'המקור נמצא מימין.' },
    {
      question: 'האם המסלול משתנה כשמשנים את מהירות ההנפשה?',
      answer: 'הבקרה משנה רק את מהירות ההנפשה; המסלול נשאר ישר.',
    },
    { question: 'מה יקרה אם תציבו גוף אטום בין המקור למסך?', answer: 'גוף אטום חוסם חלק מהאור ויוצר מאחוריו צל.' },
  ],
} satisfies TheoryKnowledgeCheckpoint_Locale;

const pl = {
  title: 'Spróbuj wyjaśnić',
  items: [
    { question: 'Gdzie w scenie znajduje się źródło światła?', answer: 'Źródło jest po lewej.' },
    {
      question: 'Czy tor zmienia się, gdy zmieniasz prędkość animacji?',
      answer: 'Regulacja zmienia tylko prędkość animacji; tor pozostaje prosty.',
    },
    {
      question: 'Co się stanie, jeśli umieścisz nieprzezroczysty przedmiot między źródłem a ekranem?',
      answer: 'Nieprzezroczysty przedmiot zatrzymuje część światła i tworzy za sobą cień.',
    },
  ],
} satisfies TheoryKnowledgeCheckpoint_Locale;

const uk = {
  title: 'Спробуй пояснити',
  items: [
    { question: 'Де в сцені розташоване джерело світла?', answer: 'Джерело розташоване ліворуч.' },
    {
      question: 'Чи змінюється траєкторія, коли ти змінюєш швидкість анімації?',
      answer: 'Регулятор змінює лише швидкість показу анімації: траєкторія залишається прямою.',
    },
    {
      question: 'Що станеться, якщо поставити непрозорий предмет між джерелом та екраном?',
      answer: 'Непрозорий предмет перекриє частину світла, і за ним утвориться тінь.',
    },
  ],
} satisfies TheoryKnowledgeCheckpoint_Locale;

const lt = {
  title: "Pabandyk paaiškinti",
  items: [
    { question: "Kur scenoje yra šviesos šaltinis?", answer: "Šaltinis yra kairėje." },
    { question: "Ar pasikeičia šviesos kelias, kai pakeiti animacijos greitį?", answer: "Valdiklis keičia tik animacijos greitį; kelias išlieka tiesus." },
    { question: "Kas nutiks, jei tarp šaltinio ir ekrano padėsi nepermatomą daiktą?", answer: "Nepermatomas daiktas užstoja dalį šviesos, todėl už jo susidaro šešėlis." },
  ],
} satisfies TheoryKnowledgeCheckpoint_Locale;

const lv = {
  title: "Mēģini izskaidrot",
  items: [
    { question: "Kur attēlā atrodas gaismas avots?", answer: "Avots atrodas kreisajā pusē." },
    { question: "Vai gaismas ceļš mainās, ja maini animācijas ātrumu?", answer: "Vadīkla maina tikai animācijas ātrumu; gaismas ceļš paliek taisns." },
    { question: "Kas notiks, ja starp avotu un ekrānu novietosi necaurspīdīgu priekšmetu?", answer: "Necaurspīdīgs priekšmets aiztur daļu gaismas, un aiz tā veidojas ēna." },
  ],
} satisfies TheoryKnowledgeCheckpoint_Locale;

const et = {
  title: "Proovi selgitada",
  items: [
    { question: "Kus asub stseenis valgusallikas?", answer: "Valgusallikas on vasakul." },
    { question: "Kas valguse teekond muutub, kui muudad animatsiooni kiirust?", answer: "Juhtnupp muudab ainult animatsiooni kiirust; valguse teekond jääb sirgeks." },
    { question: "Mis juhtub, kui asetad valgusallika ja ekraani vahele läbipaistmatu eseme?", answer: "Läbipaistmatu ese takistab osa valgusest ja selle taha tekib vari." },
  ],
} satisfies TheoryKnowledgeCheckpoint_Locale;

const be = {
  title: "Паспрабуй патлумачыць",
  items: [
    { question: "Дзе ў сцэне знаходзіцца крыніца сьвятла?", answer: "Крыніца знаходзіцца зьлева." },
    { question: "Ці зьмяняецца шлях сьвятла, калі зьмяніць хуткасьць анімацыі?", answer: "Рэгулятар зьмяняе толькі хуткасьць анімацыі; шлях застаецца простым." },
    { question: "Што будзе, калі паставіць непразрысты прадмет паміж крыніцай і экранам?", answer: "Непразрысты прадмет затрымлівае частку сьвятла, і за ім утвараецца цень." },
  ],
} satisfies TheoryKnowledgeCheckpoint_Locale;

const ka = {
  title: "სცადე ახსნა",
  items: [
    { question: "სად არის სინათლის წყარო სცენაზე?", answer: "წყარო მარცხნივ მდებარეობს." },
    { question: "იცვლება სინათლის გზა, როცა ანიმაციის სიჩქარეს ცვლი?", answer: "მართვის ღილაკი მხოლოდ ანიმაციის სიჩქარეს ცვლის; სინათლის გზა სწორი რჩება." },
    { question: "რა მოხდება, თუ წყაროსა და ეკრანს შორის გაუმჭვირვალე საგანს მოათავსებ?", answer: "გაუმჭვირვალე საგანი სინათლის ნაწილს აკავებს და მის უკან ჩრდილი წარმოიქმნება." },
  ],
} satisfies TheoryKnowledgeCheckpoint_Locale;

const kk = {
  title: "Түсіндіріп көр",
  items: [
    { question: "Көріністе жарық көзі қай жерде орналасқан?", answer: "Жарық көзі сол жақта орналасқан." },
    { question: "Анимация жылдамдығын өзгерткенде жарықтың жолы өзгере ме?", answer: "Реттегіш тек анимация жылдамдығын өзгертеді; жолы түзу болып қалады." },
    { question: "Жарық көзі мен экранның арасына мөлдір емес зат қойсаң не болады?", answer: "Мөлдір емес зат жарықтың бір бөлігін бөгеп, артында көлеңке түсіреді." },
  ],
} satisfies TheoryKnowledgeCheckpoint_Locale;

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
  lt, lv, et, be, ka, kk,
} satisfies Record<DefaultSupportedLanguage['language'], TheoryKnowledgeCheckpoint_Locale>;
