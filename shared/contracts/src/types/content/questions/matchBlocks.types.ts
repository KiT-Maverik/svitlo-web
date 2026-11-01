import type { ContentEntity_ConfigType } from '../entity.types';
import type { Question_Data_Meta, Question_Definition_Meta, Question_Response_Meta } from './common.types';

type Question_MatchBlocks_Definition = Question_Definition_Meta<'match-blocks'>;
type Question_MatchBlocks_Data = Question_Data_Meta<'match-blocks'>;
type Question_MatchBlocks_Response = Question_Response_Meta<'match-blocks'>;

export type Question_MatchBlocks<ConfigType extends ContentEntity_ConfigType> = {
  definition: Question_MatchBlocks_Definition;
  data: Question_MatchBlocks_Data;
  response: Question_MatchBlocks_Response;
}[ConfigType];
