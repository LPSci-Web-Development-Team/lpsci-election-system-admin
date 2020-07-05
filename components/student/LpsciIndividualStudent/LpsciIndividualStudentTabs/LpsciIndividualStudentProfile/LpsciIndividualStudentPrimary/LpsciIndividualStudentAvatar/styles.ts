import { BlockOverrides } from 'baseui/block';
import { AvatarOverrides, StyleProps } from 'baseui/avatar';

export const BLOCK: BlockOverrides = {
  Block: {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: '100%',
    },
  },
};

export const AVATAR: AvatarOverrides<StyleProps> = {
  Avatar: {
    style: ({ $theme }) => ({
      borderTopLeftRadius: $theme.borders.radius100,
      borderTopRightRadius: $theme.borders.radius100,
      borderBottomRightRadius: $theme.borders.radius100,
      borderBottomLeftRadius: $theme.borders.radius100,
    }),
  },
  Root: {
    style: ({ $theme }) => ({
      borderTopLeftRadius: $theme.borders.radius100,
      borderTopRightRadius: $theme.borders.radius100,
      borderBottomRightRadius: $theme.borders.radius100,
      borderBottomLeftRadius: $theme.borders.radius100,
    }),
  },
};
