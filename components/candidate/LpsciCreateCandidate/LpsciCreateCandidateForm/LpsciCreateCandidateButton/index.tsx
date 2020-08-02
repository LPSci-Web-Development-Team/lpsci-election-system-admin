// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button } from 'baseui/button';

// ANCHOR Models
import { CreateCandidateForm } from '@scoped-models/candidate/CreateCandidateForm';

// ANCHOR Constants
import { GENERAL_SUBMIT } from '@constants/buttons';

export const LpsciCreateCandidateButton = React.memo(() => {
  const [valid, loading] = CreateCandidateForm.useSelectors((state) => [
    state.valid.all,
    state.state.loading,
  ]);

  return (
    <Button
      type="submit"
      disabled={!valid}
      isLoading={loading}
    >
      {GENERAL_SUBMIT}
    </Button>
  );
});
