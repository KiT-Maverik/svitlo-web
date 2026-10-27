import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DEFAULT_SUPPORTED_LANGUAGES } from '@types';
import { Flag } from './Flag';

describe('Widgets/Flag', () => {
  it.each(DEFAULT_SUPPORTED_LANGUAGES)('renders an SVG for $locale', ({ locale }) => {
    render(<Flag locale={locale} data-testid="flag" width={30} height={20} className="custom-flag" />);
    const flag = screen.getByTestId('flag');
    expect(flag.tagName.toLowerCase()).toBe('svg');
    expect(flag).toHaveAttribute('viewBox');
    expect(flag).toHaveAttribute('aria-hidden', 'true');
    expect(flag).toHaveAttribute('width', '30');
    expect(flag).toHaveAttribute('height', '20');
    expect(flag).toHaveClass('custom-flag');
    expect(flag.querySelector('text')).toBeNull();
  });

  it('supports an explicit accessible label', () => {
    render(<Flag locale="uk-UA" role="img" aria-label="Прапор України" aria-hidden={false} />);
    expect(screen.getByRole('img', { name: 'Прапор України' })).toBeInTheDocument();
  });

  it('reuses India flag geometry for all four Indian-language locales', () => {
    const geometry = (locale: 'hi-IN' | 'ta-IN' | 'te-IN' | 'mr-IN') => {
      const { container, unmount } = render(<Flag locale={locale} />);
      const result = container.querySelector('svg')?.innerHTML;
      unmount();
      return result;
    };
    expect(geometry('ta-IN')).toBe(geometry('hi-IN'));
    expect(geometry('te-IN')).toBe(geometry('hi-IN'));
    expect(geometry('mr-IN')).toBe(geometry('hi-IN'));
  });
});
