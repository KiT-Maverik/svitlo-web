import { buildSkillConfig } from '@/utils';
import { sequence_Skills_Ids } from './index.ids';

export const oneToOne_Skill_Data = buildSkillConfig({
  id: sequence_Skills_Ids.oneToOne,
  name: {
    en: "One-to-one correspondence when counting",
    zh: "数数时一一对应",
    hi: "गिनती में एक-से-एक मिलान",
    es: "Correspondencia uno a uno al contar",
    ar: "المطابقة واحد لواحد عند العد",
    fr: "Correspondance terme à terme dans le comptage",
    bn: "গণনার সময় একের সঙ্গে একের মিল",
    pt: "Correspondência um a um na contagem",
    ur: "گنتی میں ایک سے ایک مطابقت",
    id: "Korespondensi satu-satu saat menghitung",
    de: "Eins-zu-eins-Zuordnung beim Zählen",
    ja: "数えるときの一対一対応",
    ko: "수를 셀 때 일대일 대응",
    tr: "Saymada bire bir eşleme",
    vi: "Tương ứng một-một khi đếm",
    ta: "எண்ணும்போது ஒன்றுக்கு ஒன்று பொருத்துதல்",
    te: "లెక్కింపులో ఒకదానికొకటి జతచేయడం",
    mr: "मोजताना एकास एक जुळवणी",
    ms: "Padanan satu dengan satu semasa membilang",
    he: "התאמה חד-חד-ערכית בספירה",
    pl: "Przyporządkowanie jeden do jednego podczas liczenia",
    uk: "Відповідність «один предмет — одне число» під час лічби",
  },
});
