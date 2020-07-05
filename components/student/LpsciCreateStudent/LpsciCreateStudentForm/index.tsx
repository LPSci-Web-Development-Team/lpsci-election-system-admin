// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { CreateStudentForm } from '@scoped-models/student/CreateStudentForm';
import { UserData } from '@scoped-models/user/UserData';

// ANCHOR Component
import { FormContainer } from '@components/utils/FormContainer';
import { LpsciCreateStudentButton } from './LpsciCreateStudentButton';
import { LpsciCreateStudentLrn } from './LpsciCreateStudentLrn';
import { LpsciCreateStudentUser } from './LpsciCreateStudentUser';

export const LpsciCreateStudentForm = React.memo(() => {
  const [submit, error] = CreateStudentForm.useSelectors((state) => [
    state.handler.submit, state.state.error,
  ]);

  return (
    <FormContainer onSubmit={submit} error={error}>
      <LpsciCreateStudentLrn />
      <UserData.Provider>
        <LpsciCreateStudentUser />
      </UserData.Provider>
      <LpsciCreateStudentButton />
    </FormContainer>
  );
});
