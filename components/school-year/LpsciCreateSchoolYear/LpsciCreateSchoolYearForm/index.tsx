// ANCHOR React
import React from 'react';

// ANCHOR Models
import { CreateSchoolYearForm } from '@scoped-models/school-year/CreateSchoolYearForm';

// ANCHOR Component
import { FormContainer } from '@components/utils/FormContainer';
import { LpsciCreateSchoolYearStartYear } from './LpsciCreateSchoolYearStartYear';
import { LpsciCreateSchoolYearEndYear } from './LpsciCreateSchoolYearEndYear';
import { LpsciCreateSchoolYearButton } from './LpsciCreateSchoolYearButton';

export const LpsciCreateSchoolYearForm = React.memo(() => {
  const [submit, error] = CreateSchoolYearForm.useSelectors((state) => [
    state.handler.submit, state.state.error,
  ]);

  return (
    <FormContainer onSubmit={submit} error={error}>
      <LpsciCreateSchoolYearStartYear />
      <LpsciCreateSchoolYearEndYear />
      <LpsciCreateSchoolYearButton />
    </FormContainer>
  );
});
