// ANCHOR React
import * as React from 'react';

// ANCHOR Component
import { FormField } from '@components/utils/FormField';

// ANCHOR Constants
import { START_SCHOOL_YEAR_LABEL, START_SCHOOL_YEAR_PLACEHOLDER } from '@constants/forms/school-year';

export const LpsciCreateSchoolYearStartYear = React.memo(() => {
  console.log('ah');

  return (
    <FormField
      label={START_SCHOOL_YEAR_LABEL}
      placeholder={START_SCHOOL_YEAR_PLACEHOLDER}
    />
  );
});
