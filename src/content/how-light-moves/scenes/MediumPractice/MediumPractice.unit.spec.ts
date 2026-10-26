import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { MediumPractice_fx } from './MediumPractice.unit.fx';
import { uk } from './MediumPractice.locale';
import { media } from './MediumPractice.constants';

describe('Components', () => {
  describe('MediumPractice', () => {
    it('should render the localized practice heading and source link', () => {
      MediumPractice_fx.render();
      expect(MediumPractice_fx.selectors.title()).toBeVisible();
      expect(screen.getByRole('link', { name: uk.sourceLink })).toHaveAttribute('href', expect.stringContaining('openstax.org'));
    });

    it('should use the lesson locale context for English labels and numeric values', () => {
      MediumPractice_fx.render('en-US');
      expect(screen.getByRole('heading', { name: 'One light. Different media.' })).toBeVisible();
      expect(screen.getByRole('button', { name: 'Vacuum' })).toHaveAttribute('aria-pressed', 'true');
      expect(screen.getByRole('group', { name: 'Light propagation medium' })).toBeVisible();
      expect(screen.getByRole('img', { name: 'Light propagation model: Vacuum.' })).toBeVisible();
      expect(screen.getByText(/299,792 km\/s/)).toBeVisible();
    });

    it('should initially select the first medium and pause animation', () => {
      MediumPractice_fx.render();
      expect(MediumPractice_fx.selectors.medium(0)).toHaveAttribute('aria-pressed', 'true');
      expect(MediumPractice_fx.selectors.medium(1)).toHaveAttribute('aria-pressed', 'false');
      expect(MediumPractice_fx.selectors.playback(true)).toBeVisible();
    });

    it('should update selection and accessible diagram after switching media', async () => {
      MediumPractice_fx.render();
      await MediumPractice_fx.actions.selectMedium(2);
      expect(MediumPractice_fx.selectors.medium(2)).toHaveAttribute('aria-pressed', 'true');
      expect(MediumPractice_fx.selectors.medium(0)).toHaveAttribute('aria-pressed', 'false');
      expect(MediumPractice_fx.selectors.track(2)).toBeVisible();
      expect(screen.getByText(uk.media[media[2].key], { selector: 'strong' })).toBeVisible();
    });

    it('should toggle the playback control label without changing the selected medium', async () => {
      MediumPractice_fx.render();
      await MediumPractice_fx.actions.togglePlayback(true);
      expect(MediumPractice_fx.selectors.playback(false)).toBeVisible();
      expect(MediumPractice_fx.selectors.medium(0)).toHaveAttribute('aria-pressed', 'true');
      await MediumPractice_fx.actions.togglePlayback(false);
      expect(MediumPractice_fx.selectors.playback(true)).toBeVisible();
    });

    it('should preserve the text explaining the limits of the simulation', () => {
      MediumPractice_fx.render();
      expect(screen.getByText(uk.quote)).toBeVisible();
      expect(screen.getByText(uk.caption)).toBeVisible();
    });
  });
});
