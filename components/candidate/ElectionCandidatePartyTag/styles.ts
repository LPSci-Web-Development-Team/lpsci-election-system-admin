import { TagOverrides } from 'baseui/tag';

export const TAG: TagOverrides = {
  Root: {
    style: () => ({
      height: '25px',
      width: '100px',
      display: 'flex',
      justifyContent: 'center',
    }),
  },
  Text: {
    style: () => ({
      fontSize: '16px',
      height: '18px',
      color: 'white',
    }),
  },
};
