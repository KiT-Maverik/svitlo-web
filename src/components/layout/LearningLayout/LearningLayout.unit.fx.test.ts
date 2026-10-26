import { createElement, type ComponentProps } from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LearningLayout from './LearningLayout';
import { Navbar_fx } from '../Navigation/Navbar.unit.fx.test';
import { VerticalSpace_fx } from '@/components/widgets/VerticalSpace/VerticalSpace.unit.fx.test';
import { aria } from './LearningLayout.constants';

type Props = ComponentProps<typeof LearningLayout>;

const topics = [
  { id: 'light', title: 'How light travels', href: '/topics/light' },
  { id: 'energy', title: 'Energy', href: '/topics/energy' },
] as const;

export const LearningLayout_fx = {
  defaults: { topics, skippableSteps: [true, false, false] } satisfies Omit<Props, 'children'>,
  render: (props: Partial<Props> = {}) => {
    const { children = 'Lesson content', ...overrides } = props;
    return render(createElement(LearningLayout, { ...LearningLayout_fx.defaults, ...overrides } as Props, children));
  },
  navbar: Navbar_fx.selectors,
  child: { verticalSpace: VerticalSpace_fx.selectors },
  selectors: {
    top: () => screen.getByRole('navigation', { name: aria.navigation.top }),
    bottom: () => screen.getByRole('navigation', { name: aria.navigation.bottom }),
    topics: () => screen.getByRole('navigation', { name: aria.navigation.topics }),
    settings: () => screen.getByRole('complementary', { name: aria.navigation.settings }),
    main: () => screen.getByRole('main'),
    topAction: (name: string) => within(LearningLayout_fx.selectors.top()).getByRole('button', { name }),
    bottomAction: (name: string) => within(LearningLayout_fx.selectors.bottom()).getByRole('button', { name: new RegExp(name) }),
  },
  actions: {
    openTopics: async () => userEvent.click(LearningLayout_fx.selectors.topAction(aria.actions.openTopics)),
    openSettings: async () => userEvent.click(LearningLayout_fx.selectors.topAction(aria.actions.openSettings)),
    escape: async () => userEvent.keyboard('{Escape}'),
    next: async () => userEvent.click(LearningLayout_fx.selectors.bottomAction(aria.actions.next)),
    back: async () => userEvent.click(LearningLayout_fx.selectors.bottomAction(aria.actions.previous)),
    skip: async () => userEvent.click(LearningLayout_fx.selectors.bottomAction(aria.actions.skip)),
  },
} as const;
