// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button } from 'baseui/button';

// ANCHOR Models
import { CreateStudentForm } from '@scoped-models/student/CreateStudentForm';

// ANCHOR Constants
import { GENERAL_SUBMIT, GENERAL_SAVE } from '@constants/buttons';

export const LpsciCreateStudentButton = React.memo(() => {
  const [valid, loading, isCreate] = CreateStudentForm.useSelectors((state) => [
    state.valid.all,
    state.state.loading,
    state.valid.create,
  ]);

  return (
    <Button
      type="submit"
      disabled={!valid}
      isLoading={loading}
    >
      {isCreate ? GENERAL_SUBMIT : GENERAL_SAVE}
    </Button>
  );
});
