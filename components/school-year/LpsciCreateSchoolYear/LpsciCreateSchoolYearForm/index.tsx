// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { styled } from 'baseui';
import { KIND } from 'baseui/toast';

// ANCHOR Models
import { CreateSchoolYearForm } from '@scoped-models/school-year/CreateSchoolYearForm';

// ANCHOR Component
import { Response } from '@components/utils/Response';
import { LpsciCreateSchoolYearStartYear } from './LpsciCreateSchoolYearStartYear';
import { LpsciCreateSchoolYearEndYear } from './LpsciCreateSchoolYearEndYear';
import { LpsciCreateSchoolYearButton } from './LpsciCreateSchoolYearButton';

// ANCHOR Styles
import { FORM } from './styles';

const LpsciForm = styled('form', FORM);

export const LpsciCreateSchoolYearForm = React.memo(() => {
  const [submit, error] = CreateSchoolYearForm.useSelectors((state) => [
    state.handler.submit, state.state.error,
  ]);

  return (
    <LpsciForm onSubmit={submit}>
      <Response message={error} kind={KIND.negative} />
      <LpsciCreateSchoolYearStartYear />
      <LpsciCreateSchoolYearEndYear />
      <LpsciCreateSchoolYearButton />
    </LpsciForm>
  );
});
