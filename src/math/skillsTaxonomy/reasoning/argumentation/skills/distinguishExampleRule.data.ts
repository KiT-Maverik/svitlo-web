import { buildSkillConfig } from '@/utils';
import { argumentation_Skills_Ids } from './index.ids';

export const distinguishExampleRule_Skill_Data = buildSkillConfig({
  id: argumentation_Skills_Ids.distinguishExampleRule,
  name: {
    en: 'Distinguishing a single example from a general rule',
    zh: '区分单个例子和普遍规则',
    hi: 'एक उदाहरण और सामान्य नियम में अंतर पहचानना',
    es: 'Distinguir un ejemplo particular de una regla general',
    ar: 'التمييز بين مثال واحد وقاعدة عامة',
    fr: 'Distinguer un exemple particulier d’une règle générale',
    bn: 'একটি উদাহরণ ও সাধারণ নিয়মের পার্থক্য বোঝা',
    pt: 'Distinguir um exemplo isolado de uma regra geral',
    ur: 'ایک مثال اور عمومی قاعدے میں فرق کرنا',
    id: 'Membedakan satu contoh dari aturan umum',
    de: 'Ein einzelnes Beispiel von einer allgemeinen Regel unterscheiden',
    ja: '一つの例と一般的な規則を区別する',
    ko: '개별 사례와 일반 규칙 구별하기',
    tr: 'Tek bir örnek ile genel bir kuralı ayırt etme',
    vi: 'Phân biệt ví dụ riêng lẻ với quy tắc chung',
    ta: 'ஒரு தனி எடுத்துக்காட்டையும் பொதுவிதியையும் வேறுபடுத்துதல்',
    te: 'ఒక ఉదాహరణకు సాధారణ నియమానికి మధ్య తేడాను గుర్తించడం',
    mr: 'एक उदाहरण आणि सर्वसाधारण नियम यांतील फरक ओळखणे',
    ms: 'Membezakan satu contoh daripada peraturan umum',
    he: 'הבחנה בין דוגמה יחידה לכלל כללי',
    pl: 'Odróżnianie pojedynczego przykładu od reguły ogólnej',
    uk: 'Розрізнення окремого прикладу та загального правила',
  },
});
