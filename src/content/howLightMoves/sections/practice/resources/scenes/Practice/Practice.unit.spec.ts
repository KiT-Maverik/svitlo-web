import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { Practice_fx } from './Practice.unit.fx';
import { locales } from './Practice.locale';

import { media } from './Practice.constants';

const uk = locales.uk;

describe('Components', () => {
  describe('Practice', () => {
    it('should render the localized practice heading and source link', () => {
      Practice_fx.render();
      expect(Practice_fx.selectors.title()).toBeVisible();
      expect(screen.getByRole('link', { name: uk.notes.sourceLink })).toHaveAttribute(
        'href',
        expect.stringContaining('openstax.org'),
      );
    });

    it('should use the lesson locale context for English labels and numeric values', () => {
      Practice_fx.render('en-US');
      expect(screen.getByRole('heading', { name: 'One light. Different media.' })).toBeVisible();
      expect(screen.getByRole('button', { name: 'Vacuum' })).toHaveAttribute('aria-pressed', 'true');
      expect(screen.getByRole('group', { name: 'Light propagation medium' })).toBeVisible();
      expect(screen.getByRole('img', { name: 'Light propagation model: Vacuum.' })).toBeVisible();
      expect(screen.getByText(/299,792 km\/s/)).toBeVisible();
    });

    it('should render a translated right-to-left practice scene', () => {
      Practice_fx.render('ar-SA');
      expect(screen.getByRole('heading', { name: locales.ar.header.title })).toBeVisible();
      expect(screen.getByRole('group', { name: locales.ar.selector.label })).toBeVisible();
      expect(
        screen.getByRole('img', { name: `${locales.ar.simulation.trackPrefix}${locales.ar.selector.media.vacuum}.` }),
      ).toBeVisible();
      expect(screen.getByRole('heading', { name: locales.ar.header.title }).closest('section')).toHaveAttribute(
        'dir',
        'rtl',
      );
    });

    it('should initially select the first medium and pause animation', () => {
      Practice_fx.render();
      expect(Practice_fx.selectors.medium(0)).toHaveAttribute('aria-pressed', 'true');
      expect(Practice_fx.selectors.medium(1)).toHaveAttribute('aria-pressed', 'false');
      expect(Practice_fx.selectors.playback(true)).toBeVisible();
    });

    it('should update selection and accessible diagram after switching media', async () => {
      Practice_fx.render();
      await Practice_fx.actions.selectMedium(2);
      expect(Practice_fx.selectors.medium(2)).toHaveAttribute('aria-pressed', 'true');
      expect(Practice_fx.selectors.medium(0)).toHaveAttribute('aria-pressed', 'false');
      expect(Practice_fx.selectors.track(2)).toBeVisible();
      expect(screen.getByText(uk.selector.media[media[2].key], { selector: 'strong' })).toBeVisible();
    });

    it('should toggle the playback control label without changing the selected medium', async () => {
      Practice_fx.render();
      await Practice_fx.actions.togglePlayback(true);
      expect(Practice_fx.selectors.playback(false)).toBeVisible();
      expect(Practice_fx.selectors.medium(0)).toHaveAttribute('aria-pressed', 'true');
      await Practice_fx.actions.togglePlayback(false);
      expect(Practice_fx.selectors.playback(true)).toBeVisible();
    });

    it('should preserve the text explaining the limits of the simulation', () => {
      Practice_fx.render();
      expect(screen.getByText(uk.insight.quote)).toBeVisible();
      expect(screen.getByText(uk.notes.caption)).toBeVisible();
    });
  });
});
