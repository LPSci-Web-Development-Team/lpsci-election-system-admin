// ANCHOR React
import * as React from 'react';

// ANCHOR Scoped Models
import createModel from '@lxsmnsyc/react-scoped-model';

export const SidebarSection = createModel(() => {
  const [activeSection, setActiveSection] = React.useState<string>('Voters');

  return {
    section: activeSection,
    setSection: setActiveSection,
  };
});
