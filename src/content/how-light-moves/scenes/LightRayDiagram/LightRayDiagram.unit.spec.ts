import { describe, expect, it } from 'vitest';
import { LightRayDiagram_fx } from './LightRayDiagram.unit.fx';
import { locales } from './lightRayDiagram.locale';

describe('Widgets', () => {
  describe('LightRayDiagram', () => {
    it('should render a localized SVG illustration with a descriptive title', () => {
      LightRayDiagram_fx.render();
      const image = LightRayDiagram_fx.selectors.illustration();
      expect(image).toHaveAttribute('lang', 'uk-UA');
      expect(image.querySelector('title')).toHaveTextContent(locales['uk-UA'].scene.title);
      expect(image.querySelector('desc')).toHaveTextContent(locales['uk-UA'].scene.description);
    });

    it('should display labels matching the chosen English locale', () => {
      LightRayDiagram_fx.render({ locale: 'en-US' });
      const image = LightRayDiagram_fx.selectors.illustration('en-US');
      expect(image).toHaveTextContent(locales['en-US'].labels.source);
      expect(image).toHaveTextContent(locales['en-US'].labels.direction);
      expect(image).toHaveTextContent(locales['en-US'].labels.screen);
      expect(image).toHaveAttribute('direction', 'ltr');
    });

    it('should reverse the SVG drawing direction for right-to-left locales', () => {
      LightRayDiagram_fx.render({ locale: 'ar-SA' });
      const image = LightRayDiagram_fx.selectors.illustration('ar-SA');
      expect(image).toHaveAttribute('direction', 'rtl');
      expect(image.querySelector('g[transform]')).toHaveAttribute('transform', 'translate(960 0) scale(-1 1)');
    });
  });
});
