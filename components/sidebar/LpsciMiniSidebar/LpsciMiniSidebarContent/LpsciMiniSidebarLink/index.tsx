// ANCHOR React
import * as React from 'react';

// ANCHOR React Icons
import { Icon } from 'react-icons-kit';

// ANCHOR Base
import {
  Button, KIND, SIZE, SHAPE,
} from 'baseui/button';
import { LabelXSmall } from 'baseui/typography';
import { styled } from 'baseui';

// ANCHOR Interfaces
import { IMiniSidebar } from '@interfaces/Sidebar';

// ANCHOR Models
import { ActiveMiniSidebar } from '@scoped-models/sidebar/ActiveMiniSidebar';

// ANCHOR Styles
import { BUTTON, COLOR, TEXT } from './styles';

const LpsciBlock = styled('span', COLOR);
const LpsciText = styled(LabelXSmall, COLOR);

export const LpsciMiniSidebarLink = React.memo((
  {
    icon, label, identifier, sublinks,
  }: IMiniSidebar,
) => {
  const [
    activeKey, setActiveKey, setActiveLink,
  ] = ActiveMiniSidebar.useSelectors((state) => [
    state.state.activeKey,
    state.handler.activeKey,
    state.handler.activeLinks,
  ]);

  const onClick = React.useCallback(() => {
    setActiveKey(identifier);
    setActiveLink(sublinks);
  }, [identifier, setActiveKey, setActiveLink, sublinks]);

  const isActive = activeKey === identifier;

  return (
    <Button
      kind={KIND.tertiary}
      size={SIZE.compact}
      shape={SHAPE.square}
      overrides={BUTTON}
      onClick={onClick}
    >
      <LpsciBlock $active={isActive}>
        <Icon icon={icon} size={20} />
      </LpsciBlock>
      <LpsciText overrides={TEXT} $active={isActive}>
        {label}
      </LpsciText>
    </Button>
  );
});
