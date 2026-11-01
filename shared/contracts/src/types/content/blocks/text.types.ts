import type {ContentBlock_Meta} from './common.types';
import type {Locale_Config} from "../locale.types";

export type ContentBlock_Text = ContentBlock_Meta<'text'>

export type ContentBlock_Text_Data = ContentBlock_Meta<'text'> & {value: Locale_Config}
