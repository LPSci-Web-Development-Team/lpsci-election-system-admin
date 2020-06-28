import { BlockOverrides } from 'baseui/block';
import { THEME } from '@themes/theme';

export const TOOLTIP: BlockOverrides = {
  Block: {
    style: {
      position: 'absolute',
      paddingTop: '8px',
      paddingBottom: '8px',
      paddingLeft: '8px',
      paddingRight: '8px',
      width: 'calc(100% - 16px)',
      backgroundColor: THEME.colors.tooltipBackground,
    },
  },
};

export const TEXT: BlockOverrides = {
  Block: {
    style: {
      color: THEME.colors.tooltipText,
    },
  },
};
