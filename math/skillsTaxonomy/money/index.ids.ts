import { denominations_SkillGroup_Ids } from './denominations/denominations.ids';
import { transactions_SkillGroup_Ids } from './transactions/transactions.ids';

export const money_SkillGroups_Ids = {
  denominations: denominations_SkillGroup_Ids.denominations,
  transactions: transactions_SkillGroup_Ids.transactions,
} as const;
