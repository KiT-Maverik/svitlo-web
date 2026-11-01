import type {ContentBlock_Definition_Meta, ContentBlock_Response_Meta} from './common.types';
import type {Locale_Config, Locale_ResponseParams} from "../locale.types";

export type ContentBlock_Text_Definition = ContentBlock_Definition_Meta<'text'>

export type ContentBlock_Text_Data<L extends Locale_Config> = ContentBlock_Response_Meta<'text'> & {value: L}

export type ContentBlock_Text_Response = ContentBlock_Response_Meta<'text'> & Locale_ResponseParams & {value: string}
