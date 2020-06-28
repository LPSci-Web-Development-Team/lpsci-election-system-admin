import { BlockOverrides } from 'baseui/block';
import { THEME } from '@themes/theme';

// ANCHOR Layout width
export const WIDTH = '100vw';

// ANCHOR Layout height
export const HEIGHT = '100vh';

// ANCHOR Height of the navbar
export const NAVBAR_HEIGHT = '48px';

// ANCHOR Width of the sidebar
export const SIDEBAR_WIDTH = '240px';

export const BLOCK: BlockOverrides = {
  Block: {
    style: {
      display: 'grid',
      gridTemplateRows: `${NAVBAR_HEIGHT} calc(${HEIGHT} - ${NAVBAR_HEIGHT})`,
      gridTemplateColumns: `${SIDEBAR_WIDTH} calc(${WIDTH} - ${SIDEBAR_WIDTH})`,
      width: WIDTH,
      height: HEIGHT,
      overflow: 'hidden',

      [THEME.media.small]: {
        gridTemplateColumns: '100vw',
      },

      [THEME.media.medium]: {
        gridTemplateColumns: '100vw',
      },
    },
  },
};
