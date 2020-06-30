import { BlockOverrides } from 'baseui/block';
import { ITheme } from '@interfaces/Theme';

// ANCHOR Layout width
export const WIDTH = '100vw';

// ANCHOR Layout height
export const HEIGHT = '100vh';

// ANCHOR Height of the navbar
export const NAVBAR_HEIGHT = '56px';

// ANCHOR Width of the sidebar
export const SIDEBAR_WIDTH = '72px';

export const BLOCK: BlockOverrides = {
  Block: {
    style: ({ $theme }: ITheme) => ({
      display: 'grid',
      gridTemplateRows: `${NAVBAR_HEIGHT} calc(${HEIGHT} - ${NAVBAR_HEIGHT})`,
      gridTemplateColumns: `${SIDEBAR_WIDTH} calc(${WIDTH} - ${SIDEBAR_WIDTH})`,
      width: WIDTH,
      height: HEIGHT,
      overflow: 'hidden',

      [$theme.media.small]: {
        gridTemplateColumns: '100vw',
      },

      [$theme.media.medium]: {
        gridTemplateColumns: '100vw',
      },
    }),
  },
};
