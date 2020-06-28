import { THEME } from '@themes/theme';
import { BlockOverrides } from 'baseui/block';

export const LOGO = {
  height: 'auto',
  width: '256px',
};

export const BLOCK: BlockOverrides = {
  Block: {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
      backgroundColor: THEME.colors.backgroundPrimary,
    },
  },
};
