import { BlockOverrides } from 'baseui/block';
import { THEME } from '../../../../../../../utils/themes/theme';

export const ROOT: BlockOverrides = {
  Block: {
    style: {
      minWidth: '240px',
    },
  },
};

export const BLOCK: BlockOverrides = {
  Block: {
    style: {
      backgroundColor: THEME.colors.backgroundSecondary,
      paddingTop: '8px',
      paddingBottom: '8px',
      width: '100%',
    },
  },
};
