import { BlockOverrides } from 'baseui/block';
import { TagOverrides } from 'baseui/tag';

export const LIST_ITEM: BlockOverrides = {
  Block: {
    style: {
      paddingTop: '10px',
      paddingBottom: '10px',
    },
  },
};

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

export const CONTAINER: BlockOverrides = {
  Block: {
    style: {
      display: 'flex',
      marginLeft: '45px',
      alignItems: 'center',
    },
  },
};

export const CANDIDATE_NAME: BlockOverrides = {
  Block: {
    style: {
      fontWeight: 700,
    },
  },
};

export const CANDIDATE_LABEL: BlockOverrides = {
  Block: {
    style: {
      marginLeft: '20px',
    },
  },
};
