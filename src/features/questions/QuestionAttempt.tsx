'use client';

import { useId, useLayoutEffect, useState, useSyncExternalStore } from 'react';
import { Box, Button, IconButton, Tooltip, Paper, Stack, Typography } from '@mui/material';
import RestartAlt from '@mui/icons-material/RestartAlt';
import type { SxProps, Theme } from '@mui/material';
import type { QuestionType } from '../../types/questions';
import type { QuestionAttemptProps, QuestionSlotContext, SlotProps } from './slots';
import { createQuestionController } from './controller';
import { questionRegistry } from './registry';
import { QuestionActions } from './QuestionActions';
import { QuestionResult } from './QuestionResult';
import { uk } from './messages';

function resolve<P, K extends QuestionType>(props: SlotProps<P, K> | undefined, context: QuestionSlotContext<K>): P | undefined {
  return typeof props === 'function' ? (props as (context: QuestionSlotContext<K>) => P)(context) : props;
}
function sx(defaults: SxProps<Theme>, extra?: SxProps<Theme>): SxProps<Theme> {
  return [...(Array.isArray(defaults) ? defaults : [defaults]), ...(Array.isArray(extra) ? extra : extra ? [extra] : [])];
}
function Attempt<K extends QuestionType>(props: QuestionAttemptProps<K>) {
  const { question, disabled, readOnly, slots, slotProps, showResult = true, showExplanation = true, showErrors = true, showCorrectAnswers = true } = props;
  const entry = questionRegistry[question.type];
  const [controller] = useState(() => createQuestionController(question, entry.initial(question), entry.check, props));
  useLayoutEffect(() => controller.configure(props), [controller, props]);
  const state = useSyncExternalStore(controller.subscribe, controller.getSnapshot, controller.getSnapshot);
  const heading = useId();
  const resultId = `${heading}-result`, checkId = `${heading}-check`, answersId = `${heading}-answers`;
  const isLocked = Boolean(state.result || disabled || readOnly);
  const focusResult = () => { if (showResult) requestAnimationFrame(() => document.getElementById(resultId)?.focus()); };
  const focusEditor = () => requestAnimationFrame(() => {
    const target = props.checkMode === 'on-change' ? document.getElementById(answersId)?.querySelector<HTMLElement>('button:not(:disabled), input:not(:disabled)') : document.getElementById(checkId);
    target?.focus();
  });
  const context: QuestionSlotContext<K> = {
    ...state, answer: structuredClone(state.answer), result: structuredClone(state.result), question, props, isLocked, canCheck: !isLocked && controller.isReadyToCheck(),
    setAnswer: answer => { controller.setAnswer(answer); if (controller.getSnapshot().result) focusResult(); },
    check: () => { if (!isLocked && controller.isReadyToCheck()) { controller.check(); focusResult(); } },
    retry: () => { controller.retry(); focusEditor(); },
    reset: () => { controller.reset(); focusEditor(); },
    children: null, rootProps: {},
  };
  const Interaction = entry.Interaction;
  const questionProps = resolve(slotProps?.question, context);
  const answerProps = resolve(slotProps?.answers, context);
  const actionProps = resolve(slotProps?.actions, context);
  const rootProps = resolve(slotProps?.root, context);
  const questionContent = <Typography component="h2" variant="h6" id={heading} sx={{ textAlign: 'center' }}>{question.prompt}</Typography>;
  const answerContent = <Interaction question={question} value={state.answer} onChange={context.setAnswer} result={showResult ? state.result : null} showErrors={showErrors} showCorrectAnswers={showCorrectAnswers} disabled={disabled} readOnly={readOnly || state.result !== null} />;
  const resetContent = <Tooltip title={uk.reset}><span><IconButton aria-label={uk.reset} disabled={disabled || readOnly} onClick={context.reset}><RestartAlt /></IconButton></span></Tooltip>;
  const checkContent = state.hasChecked ? <Button variant="contained" disabled={disabled || readOnly} onClick={context.retry}>{uk.retry}</Button> :
    <Button id={checkId} variant="contained" disabled={!context.canCheck} onClick={context.check} sx={{ display: props.checkMode === 'on-change' ? 'none' : undefined }}>{uk.check}</Button>;
  const actionContent = <QuestionActions
    left={props.actionSlots?.left ? props.actionSlots.left({ ...context, children: resetContent }) : resetContent}
    center={props.actionSlots?.center ? props.actionSlots.center({ ...context, children: checkContent }) : checkContent}
    right={props.actionSlots?.right?.({ ...context, children: null })}
  />;
  const contents = <>
    <Box id={resultId} tabIndex={-1}>
      <Stack spacing={2} sx={{ alignItems: 'center' }}>
        <Box {...questionProps} sx={sx({ width: '100%' }, questionProps?.sx)}>
          {slots?.question ? slots.question({ ...context, children: questionContent }) : questionContent}
        </Box>
        <Box {...answerProps} id={answersId} role="group" aria-label={question.prompt} sx={sx({ width: '100%', textAlign: 'center' }, answerProps?.sx)}>
          {slots?.answers ? slots.answers({ ...context, children: answerContent }) : answerContent}
        </Box>
        <QuestionResult result={showResult ? state.result : null} explanation={question.explanation} showExplanation={showExplanation && showCorrectAnswers} showErrors={showErrors} />
      </Stack>
    </Box>
    <Stack direction="row" useFlexGap {...actionProps} sx={sx({ mt: 2, flexWrap: 'wrap', justifyContent: 'center', gap: 1 }, actionProps?.sx)}>
      {slots?.actions ? slots.actions({ ...context, children: actionContent }) : actionContent}
    </Stack>
  </>;
  const mergedRootProps = { variant: 'outlined' as const, ...rootProps, role: 'region', 'aria-label': question.prompt, sx: sx({ position: 'relative', p: { xs: 2, sm: 3 }, minWidth: 0, '& button.Mui-focusVisible, & button:focus-visible, & input:focus-visible, & textarea:focus-visible, & a:focus-visible': { outline: '3px solid', outlineColor: 'primary.main', outlineOffset: 3 } }, rootProps?.sx) };
  context.rootProps = mergedRootProps;
  return slots?.root ? slots.root({ ...context, children: contents }) : <Paper {...mergedRootProps} component="section">{contents}</Paper>;
}
/** A question ID identifies an immutable authored definition. Changing it starts fresh. */
export function QuestionAttempt<K extends QuestionType>(props: QuestionAttemptProps<K>) {
  return <Attempt<K> key={`${props.question.type}:${props.question.id}`} {...props} />;
}
export type { QuestionAttemptProps, QuestionSlotContext } from './slots';
