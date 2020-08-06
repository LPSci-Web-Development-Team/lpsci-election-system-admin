// ANCHOR React
import React from 'react';

// ANCHOR React Icons
import Icon from 'react-icons-kit';
import { idCard } from 'react-icons-kit/fa/idCard';

// ANCHOR Models
import { CreateStudentForm } from '@scoped-models/student/CreateStudentForm';

// ANCHOR Component
import { FormField } from '@components/utils/FormField';

// ANCHOR Hooks
import { useConstant, useConstantCallback } from '@lpsci/hooks';

// ANCHOR Constants
import { STUDENT_LRN_LABEL, STUDENT_LRN_PLACEHOLDER } from '@constants/forms/student';

export const LpsciCreateStudentLrn = React.memo(() => {
  const [lrn, setLrn] = CreateStudentForm.useSelectors((state) => [
    state.state.lrn, state.handler.lrn,
  ]);

  const startEnhancer = useConstant(() => (
    <Icon icon={idCard} />
  ));

  const onChange = useConstantCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setLrn(e.target.value);
  });

  return (
    <FormField
      value={lrn}
      label={STUDENT_LRN_LABEL}
      placeholder={STUDENT_LRN_PLACEHOLDER}
      onChange={onChange}
      startEnhancer={startEnhancer}
    />
  );
});
