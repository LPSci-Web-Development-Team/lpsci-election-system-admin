// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { Avatar } from 'baseui/avatar';

// ANCHOR Styles
import { LOGO } from './styles';

interface IElectionLogoProps {
  name: string;
  size: string;
  src: string;
}

export const ElectionSignInLogo = React.memo(({ name, size, src }: IElectionLogoProps) => (
  <Block overrides={LOGO}>
    <Avatar
      name={name}
      size={size}
      src={src}
    />
  </Block>
));
