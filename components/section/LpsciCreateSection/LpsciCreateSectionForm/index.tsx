// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { styled } from 'baseui';
import { KIND } from 'baseui/toast';

// ANCHOR Models
import { CreateSectionForm } from '@scoped-models/section/CreateSectionForm';
import { SchoolYearData } from '@scoped-models/school-year/SchoolYearData';

// ANCHOR Component
import { Response } from '@components/utils/Response';
import { LpsciCreateSectionButton } from './LpsciCreateSectionButton';
import { LpsciCreateSectionName } from './LpsciCreateSectionName';
import { LpsciCreateSectionGradeLevel } from './LpsciCreateSectionGradeLevel';
import { LpsciCreateSectionAdviser } from './LpsciCreateSectionAdviser';
import { LpsciCreateSectionSchoolYear } from './LpsciCreateSectionSchoolYear';

// ANCHOR Styles
import { FORM } from './styles';

const LpsciForm = styled('form', FORM);

export const LpsciCreateSectionForm = React.memo(() => {
  const [submit, error] = CreateSectionForm.useSelectors((state) => [
    state.handler.submit, state.state.error,
  ]);

  return (
    <LpsciForm onSubmit={submit}>
      <Response message={error} kind={KIND.negative} />
      <LpsciCreateSectionName />
      <LpsciCreateSectionGradeLevel />
      <LpsciCreateSectionAdviser />
      <SchoolYearData.Provider>
        <LpsciCreateSectionSchoolYear />
      </SchoolYearData.Provider>
      <LpsciCreateSectionButton />
    </LpsciForm>
  );
});
