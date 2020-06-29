// ANCHOR Base
import { BlockOverrides } from 'baseui/block';

// ANCHOR Themes
import { THEME } from '@themes/theme';

export const BLOCK: BlockOverrides = {
  Block: {
    style: {
      gridRow: '2 / 3',
      backgroundColor: THEME.colors.backgroundPrimary,
    },
  },
};

export const CONTENT: BlockOverrides = {
  Block: {
    style: {
      display: 'grid',
      gridTemplateColumns: '240px auto',
    },
  },
};

/**
 * ANCHOR Grid column definition for mobile
 *
 * Dictates what grid column should the content occupy
 * when on mobile view
 */
export const MOBILE_COLUMN = '1 / 3';

/**
 * ANCHOR Grid column definition for desktop
 *
 * Dictates what grid column should the content occupy
 * when on desktop view
 *
 */
export const DESKTOP_COLUMN = '2 / 3';
