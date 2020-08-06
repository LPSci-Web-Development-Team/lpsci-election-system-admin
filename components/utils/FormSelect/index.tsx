// ANCHOR React
import React from 'react';

// ANCHOR Base
import { FormControl } from 'baseui/form-control';
import { Select, SelectProps } from 'baseui/select';
import { Block } from 'baseui/block';
import { LabelSmall } from 'baseui/typography';

// ANCHOR Interweave
import { Markup } from 'interweave';

// ANCHOR Hooks
import { useConstantCallback } from '@lpsci/hooks';

// ANCHOR Styles
import {
  TOOLTIP, TEXT, FORM_CONTROL,
} from './styles';

interface IProps extends SelectProps {
  label?: string;
  caption?: React.ReactNode;
  tooltip?: string;
  errorMessage?: string;
}

export const FormSelect = React.memo(({
  caption,
  error,
  errorMessage,
  label,
  tooltip,
  autoFocus,
  backspaceRemoves,
  clearable,
  closeOnSelect,
  creatable,
  deleteRemoves,
  disabled,
  positive,
  escapeClearsValue,
  filterOptions,
  filterOutSelected,
  getOptionLabel,
  getValueLabel,
  id,
  controlRef,
  isLoading,
  labelKey,
  startOpen,
  maxDropdownHeight,
  multi,
  noResultsMsg,
  onBlurResetsInput,
  onChange,
  onInputChange,
  onCloseResetsInput,
  onSelectResetsInput,
  onOpen,
  onClose,
  openOnClick,
  options,
  placeholder,
  required,
  searchable,
  size,
  type,
  value,
  valueKey,
  mountNode,
  overrides,
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
        <Select
          autoFocus={autoFocus}
          backspaceRemoves={backspaceRemoves}
          clearable={clearable}
          closeOnSelect={closeOnSelect}
          creatable={creatable}
          deleteRemoves={deleteRemoves}
          disabled={disabled}
          error={error}
          positive={positive}
          escapeClearsValue={escapeClearsValue}
          filterOptions={filterOptions}
          filterOutSelected={filterOutSelected}
          getOptionLabel={getOptionLabel}
          getValueLabel={getValueLabel}
          id={id}
          controlRef={controlRef}
          isLoading={isLoading}
          labelKey={labelKey}
          startOpen={startOpen}
          maxDropdownHeight={maxDropdownHeight}
          multi={multi}
          noResultsMsg={noResultsMsg}
          onBlur={blur}
          onBlurResetsInput={onBlurResetsInput}
          onChange={onChange}
          onFocus={focus}
          onInputChange={onInputChange}
          onCloseResetsInput={onCloseResetsInput}
          onSelectResetsInput={onSelectResetsInput}
          onOpen={onOpen}
          onClose={onClose}
          openOnClick={openOnClick}
          options={options}
          overrides={overrides}
          placeholder={placeholder}
          required={required}
          searchable={searchable}
          size={size}
          type={type}
          value={value}
          valueKey={valueKey}
          mountNode={mountNode}
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
