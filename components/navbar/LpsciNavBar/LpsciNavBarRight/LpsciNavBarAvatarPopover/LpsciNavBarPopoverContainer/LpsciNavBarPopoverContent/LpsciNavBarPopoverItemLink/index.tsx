// ANCHOR React
import * as React from 'react';

// ANCHOR Next
import Link from 'next/link';

// ANCHOR Base
import { StyledLink } from 'baseui/link';
import { LabelSmall } from 'baseui/typography';

// ANCHOR React Icons
import { Icon } from 'react-icons-kit';

// ANCHOR Styles
import { LINK, TEXT } from './styles';

// ANCHOR Interface
import { ILink } from '../constants';

export const LpsciNavBarPopoverLink = React.memo(({
  label, as, href, icon,
}: ILink) => (
  <Link href={href} as={as} passHref>
    <StyledLink $style={LINK} href={href}>
      <Icon size={20} icon={icon} />
      <LabelSmall overrides={TEXT}>{label}</LabelSmall>
    </StyledLink>
  </Link>
));
