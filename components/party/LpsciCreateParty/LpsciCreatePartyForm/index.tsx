// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { CreatePartyForm } from '@scoped-models/party/CreatePartyForm';
import { SchoolYearData } from '@scoped-models/school-year/SchoolYearData';

// ANCHOR Component
import { FormContainer } from '@components/utils/FormContainer';
import { LpsciCreatePartyButton } from './LpsciCreatePartyButton';
import { LpsciCreatePartyName } from './LpsciCreatePartyName';
import { LpsciCreatePartyColor } from './LpsciCreatePartyColor';
import { LpsciCreatePartySchoolYear } from './LpsciCreatePartySchoolYear';

export const LpsciCreatePartyForm = React.memo(() => {
  const [submit, error] = CreatePartyForm.useSelectors((state) => [
    state.handler.submit, state.state.error,
  ]);

  return (
    <FormContainer onSubmit={submit} error={error}>
      <LpsciCreatePartyName />
      <LpsciCreatePartyColor />
      <SchoolYearData.Provider>
        <LpsciCreatePartySchoolYear />
      </SchoolYearData.Provider>
      <LpsciCreatePartyButton />
    </FormContainer>
  );
});
