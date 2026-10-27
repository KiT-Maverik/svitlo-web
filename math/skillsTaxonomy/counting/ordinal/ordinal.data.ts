import { buildSkillGroupConfig } from '@/utils';
import { ordinal_SkillGroup_Ids } from './ordinal.ids';
import { ordinal_Skills_Ids } from './skills/index.ids';

export const ordinal_SkillGroup_Data = buildSkillGroupConfig({
  id: ordinal_SkillGroup_Ids.ordinal,
  name: {
    en: "Ordinal counting",
    zh: "顺序计数",
    hi: "क्रमसूचक गिनती",
    es: "Conteo ordinal",
    ar: "العد الترتيبي",
    fr: "Comptage ordinal",
    bn: "ক্রমিক গণনা",
    pt: "Contagem ordinal",
    ur: "ترتیبی گنتی",
    id: "Bilangan urutan",
    de: "Ordnungszahlen",
    ja: "順番を数えること",
    ko: "순서 세기",
    tr: "Sıra sayıları",
    vi: "Đếm thứ tự",
    ta: "வரிசை எண்ணுதல்",
    te: "క్రమసంఖ్యల లెక్కింపు",
    mr: "क्रमसूचक मोजणी",
    ms: "Bilangan ordinal",
    he: "ספירה סודרת",
    pl: "Liczenie porządkowe",
    uk: "Порядкова лічба",
  },
  skillIds: ordinal_Skills_Ids,
});
