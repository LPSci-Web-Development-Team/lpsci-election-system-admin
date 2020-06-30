// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { styled } from 'baseui';

// ANCHOR Models
import { CreateSchoolYearForm } from '@scoped-models/school-year/CreateSchoolYearForm';

// ANCHOR Component
import { LpsciCreateSchoolYearStartYear } from './LpsciCreateSchoolYearStartYear';
import { LpsciCreateSchoolYearEndYear } from './LpsciCreateSchoolYearEndYear';
import { LpsciCreateSchoolYearButton } from './LpsciCreateSchoolYearButton';

// ANCHOR Styles
import { FORM } from './styles';

const LpsciForm = styled('form', FORM);

export const LpsciCreateSchoolYearForm = React.memo(() => {
  const submit = CreateSchoolYearForm.useSelector((state) => state.handler.submit);

  return (
    <LpsciForm onSubmit={submit}>
      <LpsciCreateSchoolYearStartYear />
      <LpsciCreateSchoolYearEndYear />
      <LpsciCreateSchoolYearButton />
    </LpsciForm>
  );
});
