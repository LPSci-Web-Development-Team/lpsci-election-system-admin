// ANCHOR React
import * as React from 'react';

// ANCHOR Next
import Link from 'next/link';
import { useRouter } from 'next/router';

// ANCHOR Base
import { StyledLink } from 'baseui/link';
import { LabelSmall } from 'baseui/typography';
import { Block } from 'baseui/block';
import { styled } from 'baseui';

// ANCHOR React Icons
import { Icon } from 'react-icons-kit';

// ANCHOR Interface
import { ILargeSidebarLink } from '@interfaces/Sidebar';

// ANCHOR Styles
import { LINK, TEXT, ICON } from './styles';

const LpsciLink = styled('a', LINK);

export const LpsciLargeSidebarLink = React.memo(({
  label, href, icon,
}: ILargeSidebarLink) => {
  const router = useRouter();

  const isActive = router.pathname === href;

  return (
    <Link href={href} passHref>
      <LpsciLink $active={isActive} href={href}>
        <Block overrides={ICON}>
          <Icon size={20} icon={icon} />
        </Block>
        <LabelSmall overrides={TEXT}>{label}</LabelSmall>
      </LpsciLink>
    </Link>
  );
});
