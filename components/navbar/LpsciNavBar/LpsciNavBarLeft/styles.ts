import { StyleObject } from 'styletron-react';
import { BlockOverrides } from 'baseui/block';

export const BLOCK: BlockOverrides = {
  Block: {
    style: {
      display: 'flex',
      alignItems: 'center',
    },
  },
};

export const TEXT: BlockOverrides = {
  Block: {
    style: {
      marginLeft: '16px',
    },
  },
};

export const LINK: StyleObject = {
  textDecoration: 'none',
};
