// ANCHOR React
import React from 'react';

// ANCHOR Models
import { CreateSectionForm } from '@scoped-models/section/CreateSectionForm';
import { SchoolYearData } from '@scoped-models/school-year/SchoolYearData';

// ANCHOR Component
import { FormContainer } from '@components/utils/FormContainer';
import { LpsciCreateSectionButton } from './LpsciCreateSectionButton';
import { LpsciCreateSectionName } from './LpsciCreateSectionName';
import { LpsciCreateSectionGradeLevel } from './LpsciCreateSectionGradeLevel';
import { LpsciCreateSectionAdviser } from './LpsciCreateSectionAdviser';
import { LpsciCreateSectionSchoolYear } from './LpsciCreateSectionSchoolYear';

export const LpsciCreateSectionForm = React.memo(() => {
  const [submit, error] = CreateSectionForm.useSelectors((state) => [
    state.handler.submit, state.state.error,
  ]);

  return (
    <FormContainer onSubmit={submit} error={error}>
      <LpsciCreateSectionName />
      <LpsciCreateSectionGradeLevel />
      <LpsciCreateSectionAdviser />
      <SchoolYearData.Provider>
        <LpsciCreateSectionSchoolYear />
      </SchoolYearData.Provider>
      <LpsciCreateSectionButton />
    </FormContainer>
  );
});
