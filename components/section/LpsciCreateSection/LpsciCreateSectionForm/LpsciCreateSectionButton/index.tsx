// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button } from 'baseui/button';

// ANCHOR Models
import { CreateSectionForm } from '@scoped-models/section/CreateSectionForm';

// ANCHOR Constants
import { GENERAL_SUBMIT, GENERAL_SAVE } from '@constants/buttons';

export const LpsciCreateSectionButton = React.memo(() => {
  const [valid, loading, isCreate] = CreateSectionForm.useSelectors((state) => [
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
