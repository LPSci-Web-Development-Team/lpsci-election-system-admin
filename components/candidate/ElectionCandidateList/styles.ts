import { BlockOverrides } from 'baseui/block';

export const LIST_ITEM: BlockOverrides = {
  Block: {
    style: {
      paddingTop: '10px',
      paddingBottom: '10px',
    },
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
      width: '280px',
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
