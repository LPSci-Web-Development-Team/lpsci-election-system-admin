// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Button } from 'baseui/button';

// ANCHOR Models

// ANCHOR Constants

// ANCHOR Styles
// import { BUTTON } from './styles';

export const LpsciCreateSchoolYearButton = React.memo(() => {
  console.log('ah');

  return (
    <Button
      type="submit"
    >
      Submit
    </Button>
  );
});
