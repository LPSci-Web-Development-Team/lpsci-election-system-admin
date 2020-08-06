// ANCHOR React
import React from 'react';

// ANCHOR Models

// ANCHOR Results
import { ISectionResult } from '@api/results/section';

// ANCHOR Component
import { LpsciMainPage } from '@components/page/LpsciMainPage';
import { LpsciIndividualSectionTabs } from './LpsciIndividualSectionTabs';

interface IProps {
  id: string;
  initialData: ISectionResult;
}

export const LpsciIndividualSection = React.memo(({
  id, initialData,
}: IProps) => (
  <LpsciMainPage
    title={`Grade ${initialData.gradeLevel} - ${initialData.name}`}
  >
    <LpsciIndividualSectionTabs id={id} />
  </LpsciMainPage>
));
