// ANCHOR React
import React from 'react';

// ANCHOR React Icons
import Icon from 'react-icons-kit';
import { legal } from 'react-icons-kit/fa/legal';

// ANCHOR Models
import { CreatePartyForm } from '@scoped-models/party/CreatePartyForm';

// ANCHOR Component
import { FormField } from '@components/utils/FormField';

// ANCHOR Hooks
import { useConstant, useConstantCallback } from '@lpsci/hooks';

// ANCHOR Constants
import { PARTY_NAME_LABEL, PARTY_NAME_PLACEHOLDER } from '@constants/forms/party';

export const LpsciCreatePartyName = React.memo(() => {
  const [name, setName] = CreatePartyForm.useSelectors((state) => [
    state.state.name, state.handler.name,
  ]);

  const startEnhancer = useConstant(() => (
    <Icon icon={legal} />
  ));

  const onChange = useConstantCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  });

  return (
    <FormField
      value={name}
      label={PARTY_NAME_LABEL}
      placeholder={PARTY_NAME_PLACEHOLDER}
      onChange={onChange}
      startEnhancer={startEnhancer}
    />
  );
});
