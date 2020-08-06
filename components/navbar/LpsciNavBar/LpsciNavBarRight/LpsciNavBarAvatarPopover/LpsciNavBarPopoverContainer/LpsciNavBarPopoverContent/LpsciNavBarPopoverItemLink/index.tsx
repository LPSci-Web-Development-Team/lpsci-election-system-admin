// ANCHOR React
import React from 'react';

// ANCHOR Next
import Link from 'next/link';

// ANCHOR Base
import { StyledLink } from 'baseui/link';
import { LabelSmall } from 'baseui/typography';

// ANCHOR React Icons
import { Icon } from 'react-icons-kit';

// ANCHOR Interface
import { INavLink } from '@interfaces/Navbar';

// ANCHOR Styles
import { LINK, TEXT } from './styles';

export const LpsciNavBarPopoverLink = React.memo(({
  label, as, href, icon,
}: INavLink) => (
  <Link href={href} as={as} passHref>
    <StyledLink $style={LINK} href={href}>
      <Icon size={20} icon={icon} />
      <LabelSmall overrides={TEXT}>{label}</LabelSmall>
    </StyledLink>
  </Link>
));
