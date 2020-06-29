import { THEME } from '@themes/theme';
import { BlockOverrides } from 'baseui/block';

export const BLOCK: BlockOverrides = {
  Block: {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: '32px',
      paddingRight: '32px',
      paddingTop: '16px',
      paddingBottom: '16px',
      backgroundColor: THEME.colors.backgroundPrimary,
      cursor: 'pointer',
    },
  },
};
