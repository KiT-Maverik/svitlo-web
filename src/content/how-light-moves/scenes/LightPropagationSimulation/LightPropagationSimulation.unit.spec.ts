import { act } from 'react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import { LightPropagationSimulation_fx } from './LightPropagationSimulation.unit.fx';
import { LightPropagationSimulation_mx } from './LightPropagationSimulation.unit.mx';
import { locales } from './lightPropagationSimulation.locale';

describe('Widgets', () => {
  describe('LightPropagationSimulation', () => {
    beforeEach(() => LightPropagationSimulation_mx.installMatchMedia());
    afterEach(() => LightPropagationSimulation_mx.reset());

    it('should render the localized simulation title and accessible track', () => {
      LightPropagationSimulation_fx.render();
      const messages = locales['uk-UA'];
      expect(LightPropagationSimulation_fx.selectors.scene(messages)).toBeVisible();
      expect(LightPropagationSimulation_fx.selectors.track(messages)).toBeVisible();
    });

    it('should toggle playback label and pressed state when activated', async () => {
      LightPropagationSimulation_fx.render();
      const messages = locales['uk-UA'];
      const pause = LightPropagationSimulation_fx.selectors.playback(messages.controls.pause);
      expect(pause).toHaveAttribute('aria-pressed', 'false');
      await LightPropagationSimulation_fx.actions.togglePlayback(messages.controls.pause);
      expect(LightPropagationSimulation_fx.selectors.playback(messages.controls.play)).toHaveAttribute('aria-pressed', 'true');
    });

    it('should start paused when reduced motion is enabled', () => {
      LightPropagationSimulation_mx.installMatchMedia(true);
      LightPropagationSimulation_fx.render();
      expect(LightPropagationSimulation_fx.selectors.playback(locales['uk-UA'].controls.play)).toBeVisible();
    });

    it('should increase simulation speed with keyboard interaction', async () => {
      LightPropagationSimulation_fx.render();
      const speed = LightPropagationSimulation_fx.selectors.speed();
      speed.focus();
      await userEvent.keyboard('{ArrowRight}');
      expect(speed).toHaveAttribute('aria-valuenow', '1.5');
    });

    it('should render the supplied English messages without translating them again', () => {
      const messages = locales['en-US'];
      LightPropagationSimulation_fx.render({ locale: 'en-US' });
      expect(LightPropagationSimulation_fx.selectors.scene(messages)).toHaveAttribute('lang', 'en-US');
      expect(LightPropagationSimulation_fx.selectors.playback(messages.controls.pause)).toBeVisible();
    });

    it('should reflect subsequent system reduced-motion changes', async () => {
      const match = LightPropagationSimulation_mx.installMatchMedia(false);
      LightPropagationSimulation_fx.render();
      await act(async () => match.setReducedMotion(true));
      expect(LightPropagationSimulation_fx.selectors.playback(locales['uk-UA'].controls.play)).toBeVisible();
    });
  });
});
