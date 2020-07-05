import { TabsOverrides, TabOverrides, SharedProps } from 'baseui/tabs';
import { BREAKPOINTS } from '@themes/breakpoints';

export const ROOT: TabsOverrides<any> = {
  Root: {
    style: {
      width: '100%',
      paddingLeft: 0,
    },
  },
  TabBar: {
    style: {
      width: '100%',
      backgroundColor: 'auto',
      marginLeft: 0,
      paddingLeft: 0,
    },
  },
  TabContent: {
    style: {
      width: '100%',
      marginTop: '24px',
      marginBottom: '24px',
      marginLeft: 0,
      paddingLeft: 0,
      backgroundColor: 'auto',
    },
  },
};

export const TAB: TabOverrides<SharedProps> = {
  Tab: {
    style: ({ $active, $theme }) => ({
      minWidth: '15%',
      textAlign: 'center',
      marginLeft: 0,
      marginRight: 0,
      paddingRight: '32px',
      paddingLeft: '32px',
      backgroundColor: $theme.colors.backgroundSecondary,
      opacity: $active ? 1 : 0.5,

      ':hover': $active
        ? {}
        : {
          backgroundColor: $theme.colors.backgroundSecondary,
          opacity: 1,
        },

      [BREAKPOINTS.small]: {
        paddingLeft: '8px',
        paddingRight: '8px',
      },
    }),
  },
};
