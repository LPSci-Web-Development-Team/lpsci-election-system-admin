// ANCHOR React
import React from 'react';

// ANCHOR Base
import { OnChangeParams, Value } from 'baseui/select';

// ANCHOR Models
import { CreateCandidateForm } from '@scoped-models/candidate/CreateCandidateForm';

// ANCHOR Component
import { FormSelect } from '@components/utils/FormSelect';

// ANCHOR Hooks
import { useConstantCallback } from '@lpsci/hooks';

// ANCHOR Payloads
import { EPosition } from '@payloads/candidate';

// ANCHOR Constants
import {
  CANDIDATE_POSITION_LABEL,
  CANDIDATE_POSITION_PLACEHOLDER,
  CANDIDATE_POSITION_OPTIONS,
} from '@constants/forms/candidate';

export const LpsciCreateCandidatePosition = React.memo(() => {
  const [value, setValue] = React.useState<Value>([]);

  const setPosition = CreateCandidateForm.useSelector((state) => state.handler.position);

  const onChange = useConstantCallback((e: OnChangeParams) => {
    setPosition(e.option?.id as EPosition);
    setValue(e.value);
  });

  return (
    <FormSelect
      value={value}
      label={CANDIDATE_POSITION_LABEL}
      placeholder={CANDIDATE_POSITION_PLACEHOLDER}
      onChange={onChange}
      options={CANDIDATE_POSITION_OPTIONS}
    />
  );
});
