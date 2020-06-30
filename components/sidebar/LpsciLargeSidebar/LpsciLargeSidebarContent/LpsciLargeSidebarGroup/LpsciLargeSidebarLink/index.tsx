// ANCHOR React
import * as React from 'react';

// ANCHOR Next
import Link from 'next/link';

// ANCHOR Base
import { StyledLink } from 'baseui/link';
import { LabelSmall } from 'baseui/typography';

// ANCHOR React Icons
import { Icon } from 'react-icons-kit';

// ANCHOR Interface
import { ILargeSidebarLink } from '@interfaces/Sidebar';

// ANCHOR Styles
import { LINK, TEXT } from './styles';

export const LpsciLargeSidebarLink = React.memo(({
  label, href, icon,
}: ILargeSidebarLink) => (
  <Link href={href} passHref>
    <StyledLink $style={LINK} href={href}>
      <Icon size={20} icon={icon} />
      <LabelSmall overrides={TEXT}>{label}</LabelSmall>
    </StyledLink>
  </Link>
));
