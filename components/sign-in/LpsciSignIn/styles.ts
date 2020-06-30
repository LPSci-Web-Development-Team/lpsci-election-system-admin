import { ITheme } from '@interfaces/Theme';
import { CardOverrides } from 'baseui/card';

export const CARD: CardOverrides = {
  Root: {
    style: ({ $theme }: ITheme) => ({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '40px',
      paddingRight: '32px',
      paddingBottom: '8px',
      paddingLeft: '32px',
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 0,
      borderLeftWidth: 0,
      boxShadow: $theme.shadow.shadow300,
      backgroundColor: $theme.colors.backgroundPrimary,
      borderRadius: '10px',
      width: '32%',

      [$theme.media.small]: {
        width: '80%',
        paddingRight: '16px',
        paddingLeft: '16px',
      },
    }),
  },
  Contents: {
    style: {
      width: '100%',
    },
  },
  HeaderImage: {
    style: ({ $theme }: ITheme) => ({
      height: '112px',
      marginBottom: 0,

      [$theme.media.small]: {
        height: '96px',
      },
    }),
  },
  Title: {
    style: ({ $theme }: ITheme) => ({
      textAlign: 'center',
      fontSize: '32px',
      marginBottom: '32px',

      [$theme.media.small]: {
        fontSize: '24px',
        marginBottom: '24px',
      },
    }),
  },
};
