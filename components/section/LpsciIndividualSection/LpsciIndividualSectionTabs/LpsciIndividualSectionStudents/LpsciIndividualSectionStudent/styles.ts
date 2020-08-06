import { ITheme } from '@interfaces/Theme';
import { OverridesT } from 'baseui/list';
import { TagOverrides } from 'baseui/tag';

export const LIST: OverridesT = {
  ArtworkContainer: {
    style: {
      width: '120px',
    },
  },
  Root: {
    style: {
      width: '100%',
    },
  },
};

export const TAG: TagOverrides = {
  Text: {
    style: ({ $theme }: ITheme) => ({
      color: $theme.colors.white,
    }),
  },
};
