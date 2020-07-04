// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button } from 'baseui/button';

// ANCHOR Models
import { CreateSectionForm } from '@scoped-models/section/CreateSectionForm';

// ANCHOR Constants
import { GENERAL_SUBMIT } from '@constants/buttons';

export const LpsciCreateSectionButton = React.memo(() => {
  const [valid, loading] = CreateSectionForm.useSelectors((state) => [
    state.valid.all, state.state.loading,
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
