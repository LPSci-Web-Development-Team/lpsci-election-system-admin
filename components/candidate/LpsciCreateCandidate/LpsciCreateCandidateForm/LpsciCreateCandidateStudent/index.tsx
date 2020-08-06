// ANCHOR React
import React from 'react';

// ANCHOR Base
import { OnChangeParams, Value, Option } from 'baseui/select';

// ANCHOR Models
import { StudentsData } from '@scoped-models/student/StudentsData';
import { CreateCandidateForm } from '@scoped-models/candidate/CreateCandidateForm';

// ANCHOR Component
import { FormSelect } from '@components/utils/FormSelect';

// ANCHOR Hooks
import { useConstantCallback } from '@lpsci/hooks';

// ANCHOR Constants
import {
  CANDIDATE_STUDENT_LABEL,
  CANDIDATE_STUDENT_PLACEHOLDER,
} from '@constants/forms/candidate';

export const LpsciCreateCandidateStudent = React.memo(() => {
  const [value, setValue] = React.useState<Value>([]);

  const data = StudentsData.useSelector((state) => state.data);

  const setStudentId = CreateCandidateForm.useSelector((state) => state.handler.studentId);

  const onChange = useConstantCallback((e: OnChangeParams) => {
    setStudentId(e.option?.id as string);
    setValue(e.value);
  });

  const options: Value = React.useMemo(() => {
    if (!data) {
      return [];
    }

    return data.map((item): Option => ({
      id: item.id,
      label: `${item.user.lastName}, ${item.user.firstName}`,
    }));
  }, [data]);

  return (
    <FormSelect
      value={value}
      label={CANDIDATE_STUDENT_LABEL}
      placeholder={CANDIDATE_STUDENT_PLACEHOLDER}
      onChange={onChange}
      options={options}
      isLoading={!data}
    />
  );
});
