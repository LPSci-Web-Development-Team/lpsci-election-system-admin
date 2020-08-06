// ANCHOR Theme
import { styletron } from '@themes/styletron';

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

export const SKELETON: StyleObject = {
  position: 'relative',
  backgroundColor: '#D2D7DB',
  overflow: 'hidden',
  display: 'inline-block',
  ':after': {
    backgroundImage: `linear-gradient(
      90deg,
      #D2D7DB 0%,
      #D2D7DB 25%,
      #E8EBED 50%,
      #D2D7DB 75%,
      #D2D7DB 100%
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
};
