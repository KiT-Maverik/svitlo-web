import { createElement, type ComponentProps } from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LightPropagationSimulation from './LightPropagationSimulation';
import { locales } from './lightPropagationSimulation.locale';

type Props = ComponentProps<typeof LightPropagationSimulation>;

export const LightPropagationSimulation_fx = {
  render: (props: Partial<Props> = {}) =>
    render(createElement(LightPropagationSimulation, {
      locale: 'uk-UA',
      messages: locales['uk-UA'],
      ...props,
    })),
  selectors: {
    scene: (messages = locales['uk-UA'], scope?: HTMLElement) =>
      (scope ? within(scope) : screen).getByRole('region', { name: messages.scene.accessibleName }),
    playback: (name: string, scope?: HTMLElement) =>
      (scope ? within(scope) : screen).getByRole('button', { name }),
    track: (messages = locales['uk-UA'], scope?: HTMLElement) =>
      (scope ? within(scope) : screen).getByRole('img', { name: messages.track.accessibleDescription }),
    speed: (messages = locales['uk-UA'], scope?: HTMLElement) =>
      (scope ? within(scope) : screen).getByRole('slider', { name: messages.controls.speedAccessibleName }),
  },
  actions: {
    togglePlayback: async (name: string) => userEvent.click(LightPropagationSimulation_fx.selectors.playback(name)),
  },
} as const;
