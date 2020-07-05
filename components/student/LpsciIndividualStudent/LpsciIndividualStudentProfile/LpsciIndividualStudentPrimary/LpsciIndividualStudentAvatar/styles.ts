import { AvatarOverrides, StyleProps } from 'baseui/avatar';

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
      marginBottom: '16px',
    }),
  },
};
