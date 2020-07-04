// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { OnChangeParams, Value, Option } from 'baseui/select';

// ANCHOR Models
import { CreateSectionForm } from '@scoped-models/section/CreateSectionForm';
import { SchoolYearData } from '@scoped-models/school-year/SchoolYearData';

// ANCHOR Component
import { FormSelect } from '@components/utils/FormSelect';

// ANCHOR Hooks
import { useConstantCallback } from '@lpsci/hooks';

// ANCHOR Constants
import {
  SECTION_SCHOOL_YEAR_LABEL,
  SECTION_SCHOOL_YEAR_PLACEHOLDER,
  SECTION_SCHOOL_YEAR_TOOLTIP,
} from '@constants/forms/section';

export const LpsciCreateSectionSchoolYear = React.memo(() => {
  const [value, setValue] = React.useState<Value>([]);

  const data = SchoolYearData.useSelector((state) => state.data);

  const setSchoolYear = CreateSectionForm.useSelector((state) => state.handler.schoolYear);

  const onChange = useConstantCallback((e: OnChangeParams) => {
    setSchoolYear(e.option?.id as string);
    setValue(e.value);
  });

  const options: Value = React.useMemo(() => {
    if (!data) {
      return [];
    }

    return data.map((item): Option => ({
      id: item.id,
      label: item.year,
    }));
  }, [data]);

  return (
    <FormSelect
      value={value}
      label={SECTION_SCHOOL_YEAR_LABEL}
      placeholder={SECTION_SCHOOL_YEAR_PLACEHOLDER}
      tooltip={SECTION_SCHOOL_YEAR_TOOLTIP}
      onChange={onChange}
      options={options}
    />
  );
});
