// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { FormControl } from 'baseui/form-control';
import { Input, SIZE, InputProps } from 'baseui/input';
import { Block } from 'baseui/block';
import { LabelSmall } from 'baseui/typography';

// ANCHOR Interweave
import { Markup } from 'interweave';

// ANCHOR LPSci Hooks
import { useConstantCallback } from '@lpsci/hooks';

// ANCHOR Styles
import { TOOLTIP, TEXT, FORM_CONTROL } from './styles';

interface IProps extends InputProps {
  label?: string;
  caption?: string;
  tooltip?: string;
  errorMessage?: string;
}

export const FormField = React.memo(({
  adjoined,
  autoComplete,
  autoFocus,
  caption,
  clearable,
  disabled,
  error,
  errorMessage,
  id,
  inputMode,
  inputRef,
  label,
  max,
  min,
  name,
  onChange,
  onKeyDown,
  onKeyPress,
  onKeyUp,
  positive,
  pattern,
  placeholder,
  rows,
  size,
  tooltip,
  type,
  value,
}: IProps) => {
  const [focused, setFocused] = React.useState<boolean>(false);

  const focus = useConstantCallback(() => setFocused(true));
  const blur = useConstantCallback(() => setFocused(false));

  return (
    <FormControl
      label={label}
      caption={caption}
      error={error && errorMessage}
      overrides={FORM_CONTROL}
    >
      <>
        <Input
          adjoined={adjoined}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          clearable={clearable}
          disabled={disabled}
          error={error}
          positive={positive}
          id={id}
          inputMode={inputMode}
          pattern={pattern}
          placeholder={placeholder}
          inputRef={inputRef}
          name={name}
          onBlur={blur}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onKeyPress={onKeyPress}
          onKeyUp={onKeyUp}
          onFocus={focus}
          size={size}
          type={type}
          value={value}
          rows={rows}
          min={min}
          max={max}
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
