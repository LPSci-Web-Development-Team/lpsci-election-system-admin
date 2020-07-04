// ANCHOR React
import * as React from 'react';

// ANCHOR React Icons
import Icon from 'react-icons-kit';
import { hashtag } from 'react-icons-kit/fa/hashtag';

// ANCHOR Models
import { CreatePartyForm } from '@scoped-models/party/CreatePartyForm';

// ANCHOR Component
import { FormField } from '@components/utils/FormField';

// ANCHOR Hooks
import { useConstant, useConstantCallback } from '@lpsci/hooks';

// ANCHOR Constants
import { PARTY_COLOR_LABEL, PARTY_COLOR_PLACEHOLDER } from '@constants/forms/party';

export const LpsciCreatePartyColor = React.memo(() => {
  const [color, setColor] = CreatePartyForm.useSelectors((state) => [
    state.state.color, state.handler.color,
  ]);

  const startEnhancer = useConstant(() => (
    <Icon icon={hashtag} />
  ));

  const onChange = useConstantCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  });

  return (
    <FormField
      value={color}
      label={PARTY_COLOR_LABEL}
      placeholder={PARTY_COLOR_PLACEHOLDER}
      onChange={onChange}
      startEnhancer={startEnhancer}
    />
  );
});
