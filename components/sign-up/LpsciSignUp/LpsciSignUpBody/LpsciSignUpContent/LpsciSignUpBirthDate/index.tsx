// ANCHOR React
import React from 'react';

// ANCHOR Base
import { FormControl } from 'baseui/form-control';
import { Datepicker } from 'baseui/datepicker';
import { SIZE } from 'baseui/input';

// ANCHOR Date FNS
import { format, subYears } from 'date-fns';

// ANCHOR Model
import { useSignUpFormBirthDateHandler } from '@scoped-models/sign-up/SignUpForm';

// ANCHOR Hooks
import { useConstantCallback } from '@lpsci/hooks';

// ANCHOR Constants
import { USER_BIRTH_DATE_LABEL, USER_BIRTH_DATE_PLACEHOLDER } from '@constants/forms/user';

interface IOnChange {
  date: Date | Date[];
}

const MIN_DATE = new Date('1900-01-01');
const MAX_DATE = subYears(new Date(), 18);

export const LpsciSignUpBirthDate = React.memo(() => {
  const setBirthDate = useSignUpFormBirthDateHandler();
  const [selected, setSelected] = React.useState<Date[]>([]);

  const onSelect = useConstantCallback(
    ({ date }: IOnChange) => {
      if (Array.isArray(date)) {
        setSelected(date);
        const parsed = format(new Date(date[0]), 'yyyy-MM-dd');
        setBirthDate(parsed);
      } else {
        setSelected([date]);
        const parsed = format(new Date(date), 'yyyy-MM-dd');
        setBirthDate(parsed);
      }
    },
  );

  return (
    <FormControl label={USER_BIRTH_DATE_LABEL}>
      <Datepicker
        value={selected}
        onChange={onSelect}
        minDate={MIN_DATE}
        maxDate={MAX_DATE}
        formatString="yyyy-MM-dd"
        placeholder={USER_BIRTH_DATE_PLACEHOLDER}
      />
    </FormControl>
  );
});
