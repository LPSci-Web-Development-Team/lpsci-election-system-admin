// ANCHOR React
import React from 'react';

// ANCHOR Base
import { OnChangeParams, Value, Option } from 'baseui/select';

// ANCHOR Models
import { CreateStudentForm } from '@scoped-models/student/CreateStudentForm';
import { UserData } from '@scoped-models/user/UserData';

// ANCHOR Component
import { FormSelect } from '@components/utils/FormSelect';

// ANCHOR Hooks
import { useConstantCallback } from '@lpsci/hooks';

// ANCHOR Constants
import {
  STUDENT_USER_LABEL,
  STUDENT_USER_PLACEHOLDER,
  STUDENT_USER_TOOLTIP,
} from '@constants/forms/student';

export const LpsciCreateStudentUser = React.memo(() => {
  const [value, setValue] = React.useState<Value>([]);

  const data = UserData.useSelector((state) => state.data);

  const [setUser, isCreate] = CreateStudentForm.useSelectors((state) => [
    state.handler.user, state.valid.create,
  ]);

  const onChange = useConstantCallback((e: OnChangeParams) => {
    setUser(e.option?.id as string);
    setValue(e.value);
  });

  const options: Value = React.useMemo(() => {
    if (!data || !isCreate) {
      return [];
    }

    return data.map((item): Option => ({
      id: item.id,
      label: `${item.lastName}, ${item.firstName}`,
    }));
  }, [data, isCreate]);

  if (!isCreate) {
    return null;
  }

  return (
    <FormSelect
      value={value}
      label={STUDENT_USER_LABEL}
      placeholder={STUDENT_USER_PLACEHOLDER}
      tooltip={STUDENT_USER_TOOLTIP}
      onChange={onChange}
      options={options}
      isLoading={!data}
    />
  );
});
