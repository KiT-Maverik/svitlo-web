import { buildSkillConfig } from '@/utils';
import { sequence_Skills_Ids } from './index.ids';

export const oneToOne_Skill_Data = buildSkillConfig({
  id: sequence_Skills_Ids.oneToOne,
  name: {
    "en-US": "One-to-one correspondence when counting",
    "zh-Hans-CN": "数数时一一对应",
    "hi-IN": "गिनती में एक-से-एक मिलान",
    "es-ES": "Correspondencia uno a uno al contar",
    "ar-SA": "المطابقة واحد لواحد عند العد",
    "fr-FR": "Correspondance terme à terme dans le comptage",
    "bn-BD": "গণনার সময় একের সঙ্গে একের মিল",
    "pt-BR": "Correspondência um a um na contagem",
    "ur-PK": "گنتی میں ایک سے ایک مطابقت",
    "id-ID": "Korespondensi satu-satu saat menghitung",
    "de-DE": "Eins-zu-eins-Zuordnung beim Zählen",
    "ja-JP": "数えるときの一対一対応",
    "ko-KR": "수를 셀 때 일대일 대응",
    "tr-TR": "Saymada bire bir eşleme",
    "vi-VN": "Tương ứng một-một khi đếm",
    "ta-IN": "எண்ணும்போது ஒன்றுக்கு ஒன்று பொருத்துதல்",
    "te-IN": "లెక్కింపులో ఒకదానికొకటి జతచేయడం",
    "mr-IN": "मोजताना एकास एक जुळवणी",
    "ms-MY": "Padanan satu dengan satu semasa membilang",
    "he-IL": "התאמה חד-חד-ערכית בספירה",
    "pl-PL": "Przyporządkowanie jeden do jednego podczas liczenia",
    "uk-UA": "Відповідність «один предмет — одне число» під час лічби",
  },
});
