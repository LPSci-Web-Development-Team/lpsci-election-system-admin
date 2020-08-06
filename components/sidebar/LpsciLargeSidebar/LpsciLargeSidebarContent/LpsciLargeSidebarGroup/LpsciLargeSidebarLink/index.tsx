// ANCHOR React
import React from 'react';

// ANCHOR Next
import Link from 'next/link';
import { useRouter } from 'next/router';

// ANCHOR Base
import { LabelSmall } from 'baseui/typography';
import { Block } from 'baseui/block';
import { styled } from 'baseui';

// ANCHOR React Icons
import { Icon } from 'react-icons-kit';

// ANCHOR Interface
import { ILargeSidebarLink } from '@interfaces/Sidebar';

// ANCHOR Models
import { ThemePreference } from '@scoped-models/theme/ThemePreference';

// ANCHOR Styles
import { LINK, TEXT, ICON } from './styles';

const LpsciLink = styled('a', LINK);

export const LpsciLargeSidebarLink = React.memo(({
  label, href, icon,
}: ILargeSidebarLink) => {
  const theme = ThemePreference.useSelector((state) => state.theme);

  const router = useRouter();

  const isActive = router.pathname === href;

  return (
    <Link href={href} passHref>
      <LpsciLink
        $active={isActive}
        $theme={theme}
        href={href}
      >
        <Block overrides={ICON}>
          <Icon size={20} icon={icon} />
        </Block>
        <LabelSmall overrides={TEXT}>{label}</LabelSmall>
      </LpsciLink>
    </Link>
  );
});
