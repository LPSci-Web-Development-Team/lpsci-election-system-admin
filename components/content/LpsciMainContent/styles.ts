// ANCHOR Base
import { BlockOverrides } from 'baseui/block';

// ANCHOR Themes
import { ITheme } from '@interfaces/Theme';

export const BLOCK: BlockOverrides = {
  Block: {
    style: ({ $theme }: ITheme) => ({
      gridRow: '2 / 3',
      backgroundColor: $theme.colors.backgroundPrimary,
    }),
  },
};

export const CONTENT: BlockOverrides = {
  Block: {
    style: {
      display: 'grid',
    },
  },
};

/**
 * ANCHOR Grid template column definition for mobile
 *
 * Dictates what grid column should the content occupy
 * when on mobile view
 */
export const MOBILE_TEMPLATE_COLUMN = '240px auto';

/**
 * ANCHOR Grid template column definition for desktop
 *
 * Dictates what grid column should the content occupy
 * when on desktop view
 *
 */
export const DESKTOP_TEMPLATE_COLUMN = 'auto';

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
