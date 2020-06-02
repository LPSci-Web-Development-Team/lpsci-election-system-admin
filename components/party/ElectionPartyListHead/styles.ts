import { BlockOverrides } from 'baseui/block';

export const LIST_ITEM: BlockOverrides = {
  Block: {
    style: {
      borderBottom: '1px solid #A1A1A1',
      marginBottom: '5px',
    },
  },
};

export const HEADING: BlockOverrides = {
  Block: {
    style: {
      height: '25px',
      width: '100px',
      fontWeight: 700,
      fontSize: '18px',
      marginLeft: '5px',
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

export const PARTY_LABEL: BlockOverrides = {
  Block: {
    style: {
      fontWeight: 700,
      fontSize: '18px',
    },
  },
};
