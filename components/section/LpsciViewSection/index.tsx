// ANCHOR React
import React from 'react';

// ANCHOR Models
import { SectionData } from '@scoped-models/section/SectionData';

// ANCHOR Component
import { LpsciMainPage } from '@components/page/LpsciMainPage';
import { LpsciViewSectionDataTable } from './LpsciViewSectionDataTable';

export const LpsciViewSection = React.memo(() => (
  <LpsciMainPage title="View Sections">
    <SectionData.Provider>
      <LpsciViewSectionDataTable />
    </SectionData.Provider>
  </LpsciMainPage>
));
