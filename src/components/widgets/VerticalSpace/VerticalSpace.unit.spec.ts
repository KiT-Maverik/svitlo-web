import { describe, expect, it } from 'vitest';
import { VerticalSpace_fx } from './VerticalSpace.unit.fx';

describe('Widgets', () => {
  describe('VerticalSpace', () => {
    it('should render the required center content without optional edge slots', () => {
      VerticalSpace_fx.render();
      expect(VerticalSpace_fx.selectors.slot('center')).toHaveTextContent('Center content');
      expect(VerticalSpace_fx.selectors.slot('top')).not.toBeInTheDocument();
      expect(VerticalSpace_fx.selectors.slot('bottom')).not.toBeInTheDocument();
    });

    it('should render top and bottom content in separate stable slots', () => {
      VerticalSpace_fx.render({ top: 'Header content', center: 'Body content', bottom: 'Footer content' });
      const root = VerticalSpace_fx.selectors.container();
      expect(VerticalSpace_fx.selectors.slot('top', root)).toHaveTextContent('Header content');
      expect(VerticalSpace_fx.selectors.slot('center', root)).toHaveTextContent('Body content');
      expect(VerticalSpace_fx.selectors.slot('bottom', root)).toHaveTextContent('Footer content');
    });

    it('should preserve a consumer-supplied class name on the container', () => {
      VerticalSpace_fx.render({ className: 'custom-space' });
      expect(VerticalSpace_fx.selectors.container()).toHaveClass('custom-space');
    });

    it('should keep scoped selectors independent between instances', () => {
      VerticalSpace_fx.render({ center: 'First' });
      VerticalSpace_fx.render({ center: 'Second' });
      const roots = VerticalSpace_fx.selectors.containers();
      expect(VerticalSpace_fx.selectors.slot('center', roots[0] as HTMLElement)).toHaveTextContent('First');
      expect(VerticalSpace_fx.selectors.slot('center', roots[1] as HTMLElement)).toHaveTextContent('Second');
    });
  });
});
