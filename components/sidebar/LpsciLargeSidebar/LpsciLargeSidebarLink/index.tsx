// ANCHOR React
import * as React from 'react';

// ANCHOR Next
import Link from 'next/link';

// ANCHOR React Icons
import { Icon } from 'react-icons-kit';
import { user } from 'react-icons-kit/fa/user';

// ANCHOR Base
import {
  Button, KIND, SIZE, SHAPE,
} from 'baseui/button';
import { LabelXSmall } from 'baseui/typography';
import { styled } from 'styletron-react';

// ANCHOR Styles
import { BUTTON, LINK, TEXT } from './styles';

const LpsciLink = styled('a', LINK);

export const LpsciMiniSidebarLink = React.memo(() => (
  <Link href="/href" passHref>
    <LpsciLink>
      <Button
        kind={KIND.tertiary}
        size={SIZE.compact}
        shape={SHAPE.square}
        overrides={BUTTON}
      >
        <Icon icon={user} size={20} />
        <LabelXSmall overrides={TEXT}>User</LabelXSmall>
      </Button>
    </LpsciLink>
  </Link>
));
