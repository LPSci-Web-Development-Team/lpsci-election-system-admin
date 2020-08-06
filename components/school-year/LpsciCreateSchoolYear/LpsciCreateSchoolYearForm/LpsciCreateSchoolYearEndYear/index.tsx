// ANCHOR React
import React from 'react';

// ANCHOR React Icons
import Icon from 'react-icons-kit';
import { calendarO } from 'react-icons-kit/fa/calendarO';

// ANCHOR Models
import { CreateSchoolYearForm } from '@scoped-models/school-year/CreateSchoolYearForm';

// ANCHOR Component
import { FormField } from '@components/utils/FormField';

// ANCHOR Hooks
import { useConstant, useConstantCallback } from '@lpsci/hooks';

// ANCHOR Functions
import { numberOnlyInput } from '@functions/numberOnlyInput';

// ANCHOR Constants
import { CREATE_UNDELETABLE } from '@constants/notes';
import { END_SCHOOL_YEAR_LABEL, END_SCHOOL_YEAR_PLACEHOLDER } from '@constants/forms/school-year';

export const LpsciCreateSchoolYearEndYear = React.memo(() => {
  const setYear = CreateSchoolYearForm.useSelector((state) => state.handler.endYear);

  const startEnhancer = useConstant(() => (
    <Icon icon={calendarO} />
  ));

  const onChange = useConstantCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
  });

  const onKeyPress = useConstantCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    numberOnlyInput(e);
  });

  return (
    <FormField
      label={END_SCHOOL_YEAR_LABEL}
      placeholder={END_SCHOOL_YEAR_PLACEHOLDER}
      onChange={onChange}
      onKeyPress={onKeyPress}
      startEnhancer={startEnhancer}
      caption={CREATE_UNDELETABLE}
    />
  );
});
