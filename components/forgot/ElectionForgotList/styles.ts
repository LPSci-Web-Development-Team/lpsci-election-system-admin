import { BlockOverrides } from 'baseui/block';
import { TagOverrides } from 'baseui/tag';

export const TAG: TagOverrides = {
  Root: {
    style: () => ({
      height: '25px',
    }),
  },
  Text: {
    style: () => ({
      fontSize: '16px',
      height: '18px',
    }),
  },
};

export const CONTAINER: BlockOverrides = {
  Block: {
    style: {
      display: 'flex',
      marginLeft: '5px',
      alignItems: 'center',
    },
  },
};

export const LAST_NAME: BlockOverrides = {
  Block: {
    style: {
      fontWeight: 700,
    },
  },
};

export const FIRST_NAME: BlockOverrides = {
  Block: {
    style: {
      marginLeft: '20px',
    },
  },
};
