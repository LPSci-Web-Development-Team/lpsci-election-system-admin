// ANCHOR React
import * as React from 'react';

// ANCHOR React Icons
import Icon from 'react-icons-kit';
import { user } from 'react-icons-kit/fa/user';

// ANCHOR Models
import { CreateSectionForm } from '@scoped-models/section/CreateSectionForm';

// ANCHOR Component
import { FormField } from '@components/utils/FormField';

// ANCHOR Hooks
import { useConstant, useConstantCallback } from '@lpsci/hooks';

// ANCHOR Constants
import { SECTION_ADVISER_LABEL, SECTION_ADVISER_PLACEHOLDER } from '@constants/forms/section';

export const LpsciCreateSectionAdviser = React.memo(() => {
  const [adviser, setAdviser] = CreateSectionForm.useSelectors((state) => [
    state.state.adviser, state.handler.adviser,
  ]);

  const startEnhancer = useConstant(() => (
    <Icon icon={user} />
  ));

  const onChange = useConstantCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAdviser(e.target.value);
  });

  return (
    <FormField
      value={adviser}
      label={SECTION_ADVISER_LABEL}
      placeholder={SECTION_ADVISER_PLACEHOLDER}
      onChange={onChange}
      startEnhancer={startEnhancer}
    />
  );
});
