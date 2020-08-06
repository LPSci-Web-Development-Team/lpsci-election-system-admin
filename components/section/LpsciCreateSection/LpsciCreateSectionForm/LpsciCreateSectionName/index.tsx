// ANCHOR React
import React from 'react';

// ANCHOR React Icons
import Icon from 'react-icons-kit';
import { book } from 'react-icons-kit/fa/book';

// ANCHOR Models
import { CreateSectionForm } from '@scoped-models/section/CreateSectionForm';

// ANCHOR Component
import { FormField } from '@components/utils/FormField';

// ANCHOR Hooks
import { useConstant, useConstantCallback } from '@lpsci/hooks';

// ANCHOR Constants
import { SECTION_NAME_LABEL, SECTION_NAME_PLACEHOLDER } from '@constants/forms/section';

export const LpsciCreateSectionName = React.memo(() => {
  const [name, setName] = CreateSectionForm.useSelectors((state) => [
    state.state.name, state.handler.name,
  ]);

  const startEnhancer = useConstant(() => (
    <Icon icon={book} />
  ));

  const onChange = useConstantCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  });

  return (
    <FormField
      value={name}
      label={SECTION_NAME_LABEL}
      placeholder={SECTION_NAME_PLACEHOLDER}
      onChange={onChange}
      startEnhancer={startEnhancer}
    />
  );
});
