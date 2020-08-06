// ANCHOR React
import React from 'react';

// ANCHOR Base
import { OnChangeParams, Value, Option } from 'baseui/select';

// ANCHOR Models
import { PartyData } from '@scoped-models/party/PartyData';
import { CreateCandidateForm } from '@scoped-models/candidate/CreateCandidateForm';

// ANCHOR Component
import { FormSelect } from '@components/utils/FormSelect';

// ANCHOR Hooks
import { useConstantCallback } from '@lpsci/hooks';

// ANCHOR Constants
import {
  CANDIDATE_PARTY_LABEL,
  CANDIDATE_PARTY_PLACEHOLDER,
} from '@constants/forms/candidate';

export const LpsciCreateCandidateParty = React.memo(() => {
  const [value, setValue] = React.useState<Value>([]);

  const data = PartyData.useSelector((state) => state.data);

  const setPartyId = CreateCandidateForm.useSelector((state) => state.handler.partyId);

  const onChange = useConstantCallback((e: OnChangeParams) => {
    setPartyId(e.option?.id as string);
    setValue(e.value);
  });

  const options: Value = React.useMemo(() => {
    if (!data) {
      return [];
    }

    return data.map((item): Option => ({
      id: item.id,
      label: item.name,
    }));
  }, [data]);

  return (
    <FormSelect
      value={value}
      label={CANDIDATE_PARTY_LABEL}
      placeholder={CANDIDATE_PARTY_PLACEHOLDER}
      onChange={onChange}
      options={options}
      isLoading={!data}
    />
  );
});
