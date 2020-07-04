// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { CreateSectionForm } from '@scoped-models/section/CreateSectionForm';

// ANCHOR Results
import { ISectionResult } from '@api/results/section';

// ANCHOR Component
import { LpsciMainPage } from '@components/page/LpsciMainPage';
import { LpsciCreateSectionForm } from './LpsciCreateSectionForm';

interface IProps {
  id?: string;
  initialData?: ISectionResult;
}

export const LpsciCreateSection = React.memo(({
  id, initialData,
}: IProps) => (
  <LpsciMainPage
    title={`${initialData
      ? (`Update Grade ${initialData.gradeLevel} - ${initialData.name}`)
      : 'Create Section'}`}
  >
    <CreateSectionForm.Provider
      id={id}
      initialData={initialData}
    >
      <LpsciCreateSectionForm />
    </CreateSectionForm.Provider>
  </LpsciMainPage>
));
