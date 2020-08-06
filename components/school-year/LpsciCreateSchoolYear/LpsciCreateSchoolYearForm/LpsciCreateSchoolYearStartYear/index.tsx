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

// ANCHOR Constants
import { START_SCHOOL_YEAR_LABEL, START_SCHOOL_YEAR_PLACEHOLDER } from '@constants/forms/school-year';

// ANCHOR Functions
import { numberOnlyInput } from '@functions/numberOnlyInput';

export const LpsciCreateSchoolYearStartYear = React.memo(() => {
  const setYear = CreateSchoolYearForm.useSelector((state) => state.handler.startYear);

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
      label={START_SCHOOL_YEAR_LABEL}
      placeholder={START_SCHOOL_YEAR_PLACEHOLDER}
      onChange={onChange}
      onKeyPress={onKeyPress}
      startEnhancer={startEnhancer}
    />
  );
});
