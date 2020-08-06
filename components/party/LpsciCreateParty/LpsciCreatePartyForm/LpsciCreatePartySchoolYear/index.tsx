// ANCHOR React
import React from 'react';

// ANCHOR Base
import { OnChangeParams, Value, Option } from 'baseui/select';

// ANCHOR Models
import { CreatePartyForm } from '@scoped-models/party/CreatePartyForm';
import { SchoolYearData } from '@scoped-models/school-year/SchoolYearData';

// ANCHOR Component
import { FormSelect } from '@components/utils/FormSelect';

// ANCHOR Hooks
import { useConstantCallback } from '@lpsci/hooks';

// ANCHOR Constants
import {
  PARTY_SCHOOL_YEAR_LABEL,
  PARTY_SCHOOL_YEAR_PLACEHOLDER,
  PARTY_SCHOOL_YEAR_TOOLTIP,
} from '@constants/forms/party';

export const LpsciCreatePartySchoolYear = React.memo(() => {
  const [value, setValue] = React.useState<Value>([]);

  const data = SchoolYearData.useSelector((state) => state.data);

  const [setSchoolYear, isCreate] = CreatePartyForm.useSelectors((state) => [
    state.handler.schoolYear, state.valid.create,
  ]);

  const onChange = useConstantCallback((e: OnChangeParams) => {
    setSchoolYear(e.option?.id as string);
    setValue(e.value);
  });

  const options: Value = React.useMemo(() => {
    if (!data || !isCreate) {
      return [];
    }

    return data.map((item): Option => ({
      id: item.id,
      label: item.year,
    }));
  }, [data, isCreate]);

  if (!isCreate) {
    return null;
  }

  return (
    <FormSelect
      value={value}
      label={PARTY_SCHOOL_YEAR_LABEL}
      placeholder={PARTY_SCHOOL_YEAR_PLACEHOLDER}
      tooltip={PARTY_SCHOOL_YEAR_TOOLTIP}
      onChange={onChange}
      options={options}
      isLoading={!data}
    />
  );
});
