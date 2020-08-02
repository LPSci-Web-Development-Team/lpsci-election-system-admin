// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { CreateCandidateForm } from '@scoped-models/candidate/CreateCandidateForm';
import { StudentsData } from '@scoped-models/student/StudentsData';
import { PartyData } from '@scoped-models/party/PartyData';

// ANCHOR Component
import { FormContainer } from '@components/utils/FormContainer';
import { LpsciCreateCandidateButton } from './LpsciCreateCandidateButton';
import { LpsciCreateCandidatePosition } from './LpsciCreateCandidatePosition';
import { LpsciCreateCandidateStudent } from './LpsciCreateCandidateStudent';
import { LpsciCreateCandidateParty } from './LpsciCreateCandidateParty';

export const LpsciCreateCandidateForm = React.memo(() => {
  const [submit, error] = CreateCandidateForm.useSelectors((state) => [
    state.handler.submit, state.state.error,
  ]);

  return (
    <FormContainer onSubmit={submit} error={error}>
      <PartyData.Provider>
        <LpsciCreateCandidateParty />
      </PartyData.Provider>
      <LpsciCreateCandidatePosition />
      <StudentsData.Provider>
        <LpsciCreateCandidateStudent />
      </StudentsData.Provider>
      <LpsciCreateCandidateButton />
    </FormContainer>
  );
});
