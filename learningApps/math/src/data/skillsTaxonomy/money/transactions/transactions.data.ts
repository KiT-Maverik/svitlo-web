import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';
import { transactions_SkillGroup_Ids } from './transactions.ids';
import { transactions_Skills_Ids } from './skills/index.ids';

export const transactions_SkillGroup_Data = buildSkillGroupConfig({
  id: transactions_SkillGroup_Ids.transactions,
  name: {
    en: "Purchases",
    lt: "Pirkimai",
    lv: "Pirkumi",
    et: "Ostud",
    be: "Пакупкі",
    ka: "შესყიდვები",
    kk: "Сатып алулар",
    zh: "购物",
    hi: "खरीदारी",
    es: "Compras",
    ar: "المشتريات",
    fr: "Achats",
    bn: "কেনাকাটা",
    pt: "Compras",
    ur: "خریداری",
    id: "Pembelian",
    de: "Einkäufe",
    ja: "買い物",
    ko: "구매",
    tr: "Alışveriş",
    vi: "Mua sắm",
    ta: "கொள்முதல்",
    te: "కొనుగోళ్లు",
    mr: "खरेदी",
    ms: "Pembelian",
    he: "קניות",
    pl: "Zakupy",
    uk: "Покупки",
  },
  skillIds: transactions_Skills_Ids,
  description: { methodological: "Using monetary calculations for unit prices, quantities, purchase totals, change, and limited budgets." },
});
