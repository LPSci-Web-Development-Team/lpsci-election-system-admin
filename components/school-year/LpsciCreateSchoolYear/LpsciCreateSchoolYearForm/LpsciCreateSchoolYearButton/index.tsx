// ANCHOR React
import React from 'react';

// ANCHOR Base
import { Button } from 'baseui/button';

// ANCHOR Models
import { CreateSchoolYearForm } from '@scoped-models/school-year/CreateSchoolYearForm';

// ANCHOR Constants
import { GENERAL_SUBMIT } from '@constants/buttons';

export const LpsciCreateSchoolYearButton = React.memo(() => {
  const [valid, loading] = CreateSchoolYearForm.useSelectors((state) => [
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
