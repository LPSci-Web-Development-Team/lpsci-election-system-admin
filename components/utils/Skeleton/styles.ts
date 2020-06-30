// ANCHOR Theme
import { styletron } from '@themes/styletron';
import { ITheme } from '@interfaces/Theme';

// ANCHOR Styletron
import { StyleObject } from 'styletron-react';

const animation = styletron.renderKeyframes({
  '0%': {
    transform: 'translateX(-100%)',
  },
  '50%': {
    transform: 'translateX(-100%)',
  },
  '100%': {
    transform: 'translateX(100%)',
  },
});

export const SKELETON = ({ $theme }: ITheme): StyleObject => ({
  position: 'relative',
  backgroundColor: $theme.colors.mono600,
  overflow: 'hidden',
  display: 'inline-block',
  ':after': {
    backgroundImage: `linear-gradient(
      90deg,
      ${$theme.colors.mono600} 0%,
      ${$theme.colors.mono600} 25%,
      ${$theme.colors.mono300} 50%,
      ${$theme.colors.mono600} 75%,
      ${$theme.colors.mono600} 100%
    )`,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    content: "''",
    transform: 'translateX(-100%)',

    animationName: animation,
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',

    cursor: 'wait',
  },
});
