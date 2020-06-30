// ANCHOR React
import * as React from 'react';

// ANCHOR Component
import { FormField } from '@components/utils/FormField';

// ANCHOR Constants
import { CREATE_UNDELETABLE } from '@constants/notes';
import { END_SCHOOL_YEAR_LABEL, END_SCHOOL_YEAR_PLACEHOLDER } from '@constants/forms/school-year';

export const LpsciCreateSchoolYearEndYear = React.memo(() => {
  console.log('ah');

  return (
    <FormField
      label={END_SCHOOL_YEAR_LABEL}
      placeholder={END_SCHOOL_YEAR_PLACEHOLDER}
      caption={CREATE_UNDELETABLE}
    />
  );
});
