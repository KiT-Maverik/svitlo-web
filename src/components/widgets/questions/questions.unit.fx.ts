import type { QuestionOf, QuestionType } from '@/components/widgets/questions/types';

/** Deterministic authored definitions. Return a clone so tests never share mutable answers. */
const definitions: { [K in QuestionType]: QuestionOf<K> } = {
  'single-select': {
    id: 'choice', type: 'single-select', prompt: 'Choose one', explanation: 'Choice explanation',
    options: [{ id: 'a', label: 'Alpha' }, { id: 'b', label: 'Beta' }], correctId: 'a',
  },
  'multiple-select': {
    id: 'choices', type: 'multiple-select', prompt: 'Choose all', explanation: 'Multiple explanation',
    options: [{ id: 'a', label: 'Alpha' }, { id: 'b', label: 'Beta' }, { id: 'c', label: 'Gamma' }],
    correctIds: ['a', 'b'],
  },
  matching: {
    id: 'pairs', type: 'matching', prompt: 'Connect pairs', explanation: 'Matching explanation',
    left: [{ id: 'a', label: 'Left A' }, { id: 'b', label: 'Left B' }],
    right: [{ id: 'x', label: 'Right X' }, { id: 'y', label: 'Right Y' }],
    pairs: [{ id: 'ax', leftId: 'a', rightId: 'x' }, { id: 'by', leftId: 'b', rightId: 'y' }],
  },
  'short-text': {
    id: 'text', type: 'short-text', prompt: 'Write text', explanation: 'Text explanation',
    acceptedAnswers: ['Hello world', 'Hi'],
    normalization: { trim: true, collapseWhitespace: true, ignoreCase: true },
  },
  numeric: {
    id: 'number', type: 'numeric', prompt: 'Enter a number', explanation: 'Number explanation',
    expected: 2.5, tolerance: 0.1, unit: 'm',
  },
  ordering: {
    id: 'order', type: 'ordering', prompt: 'Order items', explanation: 'Ordering explanation',
    items: [{ id: 'c', label: 'Third' }, { id: 'b', label: 'Second' }, { id: 'a', label: 'First' }],
    correctOrder: ['a', 'b', 'c'],
  },
  'block-builder': {
    id: 'blocks', type: 'block-builder', prompt: 'Build an answer', explanation: 'Blocks explanation',
    blocks: [{ id: 'a', label: 'A' }, { id: 'b', label: 'B' }, { id: 'c', label: 'C' }],
    acceptedSequences: [['a', 'b'], ['b', 'a']],
  },
  'fill-blanks-drag': {
    id: 'drag-blanks', type: 'fill-blanks-drag', prompt: 'Place blocks', explanation: 'Drag explanation',
    parts: [{ type: 'text', text: 'One ' }, { type: 'blank', id: 'first' },
      { type: 'text', text: ' Two ' }, { type: 'blank', id: 'second' }],
    blocks: [{ id: 'a', label: 'A' }, { id: 'b', label: 'B' }, { id: 'c', label: 'C' }],
    correctBlocks: { first: 'a', second: 'b' },
  },
  'fill-blanks-text': {
    id: 'text-blanks', type: 'fill-blanks-text', prompt: 'Fill the blanks', explanation: 'Blanks explanation',
    parts: [{ type: 'text', text: 'One ' }, { type: 'blank', id: 'first' },
      { type: 'text', text: ' Two ' }, { type: 'blank', id: 'second' }],
    acceptedAnswers: { first: ['Alpha', 'A'], second: ['Beta'] },
    normalization: { trim: true, collapseWhitespace: true, ignoreCase: true },
  },
};

export const Questions_fx = {
  make<K extends QuestionType>(type: K): QuestionOf<K> {
    return structuredClone(definitions[type]);
  },
};
