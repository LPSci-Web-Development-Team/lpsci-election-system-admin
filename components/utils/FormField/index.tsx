// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { FormControl } from 'baseui/form-control';
import { Input, SIZE } from 'baseui/input';
import { Block } from 'baseui/block';
import { LabelSmall } from 'baseui/typography';

// ANCHOR Interweave
import { Markup } from 'interweave';

// ANCHOR LPSci Hooks
import { useConstantCallback } from '@lpsci/hooks';

// ANCHOR Styles
import { TOOLTIP, TEXT } from './styles';

interface IProps {
  label?: string;
  caption?: string;
  tooltip?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  placeholder?: string;
  required?: boolean;
  errorMessage?: string;
  error?: boolean;
  type?: string;
}

export const FormField = React.memo(({
  label,
  caption,
  tooltip,
  onChange,
  onKeyPress,
  autoComplete,
  placeholder,
  required,
  error,
  errorMessage,
  type,
}: IProps) => {
  const [focused, setFocused] = React.useState<boolean>(false);

  const focus = useConstantCallback(() => setFocused(true));
  const blur = useConstantCallback(() => setFocused(false));

  return (
    <FormControl
      label={label}
      caption={caption}
      error={error && errorMessage}
    >
      <>
        <Input
          onChange={onChange}
          onKeyPress={onKeyPress}
          autoComplete={autoComplete}
          placeholder={placeholder}
          size={SIZE.compact}
          onFocus={focus}
          onBlur={blur}
          required={required}
          error={error}
          type={type}
        />
        {(focused && tooltip) && (
          <Block overrides={TOOLTIP}>
            <LabelSmall overrides={TEXT}>
              <Markup content={tooltip} />
            </LabelSmall>
          </Block>
        )}
      </>
    </FormControl>
  );
});
