// ANCHOR React
import React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { LabelSmall } from 'baseui/typography';

// ANCHOR Models
import { ActiveMiniSidebar } from '@scoped-models/sidebar/ActiveMiniSidebar';

// ANCHOR Styles
import { BLOCK, TEXT } from './styles';
import { LpsciLargeSidebarLink } from './LpsciLargeSidebarLink';

export const LpsciLargeSidebarGroup = React.memo(() => {
  const activeLinks = ActiveMiniSidebar.useSelector((state) => state.state.activeLinks);

  return (
    <>
      {activeLinks.map((item, index) => (
        <Block key={index} overrides={BLOCK}>
          <LabelSmall overrides={TEXT}>
            {item.head}
          </LabelSmall>
          {item.links.map((link, i) => (
            <LpsciLargeSidebarLink
              key={i}
              label={link.label}
              href={link.href}
              icon={link.icon}
            />
          ))}
        </Block>
      ))}
    </>
  );
});
