import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import * as flags from './index';

describe('Standalone flag SVG assets', () => {
  it.each(Object.entries(flags))('%s renders color-only vector geometry', (_name, Component) => {
    const { container } = render(<Component aria-hidden="true" />);
    const svg = container.querySelector('svg');
    expect(svg).not.toBeNull();
    expect(svg).toHaveAttribute('viewBox');
    expect(svg?.querySelector('rect, circle, polygon')).not.toBeNull();
    expect(svg?.querySelector('text, image, use, path')).toBeNull();
  });
});
