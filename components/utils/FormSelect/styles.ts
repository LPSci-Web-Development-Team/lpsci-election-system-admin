import { BlockOverrides } from 'baseui/block';
import { ITheme } from '@interfaces/Theme';
import { FormControlOverrides } from 'baseui/form-control';

export const TOOLTIP: BlockOverrides = {
  Block: {
    style: ({ $theme }: ITheme) => ({
      position: 'absolute',
      paddingTop: '8px',
      paddingBottom: '8px',
      paddingLeft: '8px',
      paddingRight: '8px',
      bottom: '100%',
      width: 'calc(100% - 16px)',
      backgroundColor: $theme.colors.tooltipBackground,
    }),
  },
};

export const TEXT: BlockOverrides = {
  Block: {
    style: ({ $theme }: ITheme) => ({
      color: $theme.colors.tooltipText,
    }),
  },
};

export const FORM_CONTROL: FormControlOverrides = {
  ControlContainer: {
    style: {
      position: 'relative',
    },
  },
};
