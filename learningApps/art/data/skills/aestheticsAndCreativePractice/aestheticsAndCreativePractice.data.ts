import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { aestheticPerception_SkillGroup_Data } from './aestheticPerception/aestheticPerception.data';
import { artisticCollaborationAndEthics_SkillGroup_Data } from './artisticCollaborationAndEthics/artisticCollaborationAndEthics.data';
import { creativeDevelopment_SkillGroup_Data } from './creativeDevelopment/creativeDevelopment.data';
import { expressionAndMeaning_SkillGroup_Data } from './expressionAndMeaning/expressionAndMeaning.data';

export const aestheticsAndCreativePractice_SkillDomain_Data = buildSkillDomainConfig({
  slug: "aestheticsAndCreativePractice",
  id: "013a7a2a-8e50-4424-9c32-32915b51cd45",
  name: { en: "Aesthetics and Creative Practice" },
  groups: { aestheticPerception: aestheticPerception_SkillGroup_Data, artisticCollaborationAndEthics: artisticCollaborationAndEthics_SkillGroup_Data, creativeDevelopment: creativeDevelopment_SkillGroup_Data, expressionAndMeaning: expressionAndMeaning_SkillGroup_Data },
  description: { methodological: "Artistic experience, imagination, revision and ethical decisions cross individual media. This domain avoids prescribing a universal theory of beauty or one compulsory creative workflow.", frontend: {
          "en": "Explore how art affects us, communicates meaning and grows through creative choices.",
          "zh": "探索艺术如何影响我们、传达意义，并通过创意选择不断发展。",
          "hi": "जानें कि कला हमें कैसे प्रभावित करती है, अर्थ कैसे संप्रेषित करती है और रचनात्मक विकल्पों से कैसे विकसित होती है।",
          "es": "Explora cómo el arte nos afecta, comunica significados y evoluciona mediante decisiones creativas.",
          "ar": "استكشف كيف يؤثر الفن فينا وينقل المعنى ويتطور من خلال الخيارات الإبداعية.",
          "fr": "Découvrez comment l’art nous touche, communique du sens et évolue grâce aux choix créatifs.",
          "bn": "শিল্প কীভাবে আমাদের প্রভাবিত করে, অর্থ প্রকাশ করে এবং সৃজনশীল পছন্দের মাধ্যমে বিকশিত হয় তা জানুন।",
          "pt": "Explore como a arte nos afeta, comunica significados e se desenvolve por meio de escolhas criativas.",
          "ur": "جانیں کہ فن ہم پر کیسے اثر انداز ہوتا ہے، معنی کیسے پہنچاتا ہے اور تخلیقی انتخاب سے کیسے آگے بڑھتا ہے۔",
          "id": "Jelajahi bagaimana seni memengaruhi kita, menyampaikan makna, dan berkembang melalui pilihan kreatif.",
          "de": "Entdecke, wie Kunst auf uns wirkt, Bedeutung vermittelt und sich durch kreative Entscheidungen weiterentwickelt.",
          "ja": "芸術が私たちに与える影響や意味の伝え方、創造的な選択による発展を探ります。",
          "ko": "예술이 우리에게 미치는 영향과 의미 전달 방식, 창의적 선택을 통한 발전을 살펴보세요.",
          "tr": "Sanatın bizi nasıl etkilediğini, anlamı nasıl aktardığını ve yaratıcı seçimlerle nasıl geliştiğini keşfedin.",
          "vi": "Khám phá cách nghệ thuật tác động đến chúng ta, truyền tải ý nghĩa và phát triển qua những lựa chọn sáng tạo.",
          "ta": "கலை நம்மை எவ்வாறு பாதிக்கிறது, பொருளை எவ்வாறு தெரிவிக்கிறது, படைப்புத் தேர்வுகள் மூலம் எவ்வாறு வளர்கிறது என்பதை ஆராயுங்கள்.",
          "te": "కళ మనపై ఎలా ప్రభావం చూపుతుంది, అర్థాన్ని ఎలా తెలియజేస్తుంది, సృజనాత్మక ఎంపికల ద్వారా ఎలా అభివృద్ధి చెందుతుందో తెలుసుకోండి.",
          "mr": "कला आपल्यावर कसा प्रभाव टाकते, अर्थ कसा व्यक्त करते आणि सर्जनशील निवडींमधून कशी विकसित होते ते जाणून घ्या.",
          "ms": "Terokai bagaimana seni mempengaruhi kita, menyampaikan makna dan berkembang melalui pilihan kreatif.",
          "he": "גלו כיצד אמנות משפיעה עלינו, מעבירה משמעות ומתפתחת באמצעות בחירות יצירתיות.",
          "pl": "Odkryj, jak sztuka na nas wpływa, przekazuje znaczenia i rozwija się dzięki twórczym wyborom.",
          "uk": "Дослідіть, як мистецтво впливає на нас, передає зміст і розвивається завдяки творчим рішенням.",
          "lt": "Sužinokite, kaip menas mus veikia, perteikia prasmę ir vystosi dėl kūrybinių pasirinkimų.",
          "lv": "Izpētiet, kā māksla mūs ietekmē, pauž nozīmi un attīstās, pateicoties radošām izvēlēm.",
          "et": "Uuri, kuidas kunst meid mõjutab, tähendust edastab ja loominguliste valikute kaudu areneb.",
          "be": "Даследуйце, як мастацтва ўплывае на нас, перадае сэнс і развіваецца дзякуючы творчым выбарам.",
          "ka": "შეისწავლეთ, როგორ მოქმედებს ხელოვნება ჩვენზე, გადმოსცემს მნიშვნელობას და ვითარდება შემოქმედებითი არჩევანით.",
          "kk": "Зерде өнердің бізге қалай әсер ететінін, мағынаны қалай жеткізетінін және шығармашылық таңдаулар арқылы қалай дамитынын зерттеңіз。"
    } },
});
