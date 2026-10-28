export interface AnswerMap {
  'single-select': string | null;
  'multiple-select': string[];
  matching: Record<string, string>;
  'short-text': string;
  numeric: string;
  ordering: string[];
  'block-builder': string[];
  'fill-blanks-drag': Record<string, string | null>;
  'fill-blanks-text': Record<string, string>;
}
