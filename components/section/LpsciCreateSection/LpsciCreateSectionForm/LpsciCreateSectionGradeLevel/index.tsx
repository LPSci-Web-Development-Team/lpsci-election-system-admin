// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { OnChangeParams, Value } from 'baseui/select';

// ANCHOR Models
import { CreateSectionForm } from '@scoped-models/section/CreateSectionForm';

// ANCHOR Component
import { FormSelect } from '@components/utils/FormSelect';

// ANCHOR Hooks
import { useConstantCallback } from '@lpsci/hooks';

// ANCHOR Constants
import {
  SECTION_GRADE_LEVEL_LABEL,
  SECTION_GRADE_LEVEL_PLACEHOLDER,
  SECTION_GRADE_LEVEL_OPTIONS,
} from '@constants/forms/section';

// ANCHOR Payloads
import { EGrade } from '@payloads/section';

export const LpsciCreateSectionGradeLevel = React.memo(() => {
  const [value, setValue] = React.useState<Value>([]);

  const setGradeLevel = CreateSectionForm.useSelector((state) => state.handler.gradeLevel);

  const onChange = useConstantCallback((e: OnChangeParams) => {
    setGradeLevel(e.option?.id as EGrade);
    setValue(e.value);
  });

  return (
    <FormSelect
      value={value}
      label={SECTION_GRADE_LEVEL_LABEL}
      placeholder={SECTION_GRADE_LEVEL_PLACEHOLDER}
      onChange={onChange}
      options={SECTION_GRADE_LEVEL_OPTIONS}
    />
  );
});
