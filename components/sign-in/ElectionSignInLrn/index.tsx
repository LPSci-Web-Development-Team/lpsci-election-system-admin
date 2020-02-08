// ANCHOR React
import * as React from 'react';

// ANCHOR Hooks
import { useConstant } from 'utils/hooks/useConstant';

// ANCHOR Base
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';

// ANCHOR Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';

// ANCHOR Scoped Models
import { SignInFormInput } from '@lpsci/scoped-models/sign-in/SignInFormInput';

export const ElectionSignInInputLRN = React.memo(() => {
  // ANCHOR Sign In Models
  const [
    lrnPress,
    lrnHandler,
    validLrn,
    visitedLrn,
  ] = SignInFormInput.useSelectors((state) => [
    state.handler.lrnPress,
    state.handler.lrn,
    state.validLrn,
    state.visitedLrn,
  ]);

  const MemoFontAwesome = useConstant(() => <FontAwesomeIcon icon={faIdBadge} />);

  const error = !validLrn && visitedLrn;

  return (
    <FormControl
      label="Learner's Reference Number"
      error={error ? 'Please enter a valid LRN.' : null}
    >
      <Input
        startEnhancer={MemoFontAwesome}
        name="lrn"
        placeholder="100503351137"
        type="number"
        error={error}
        onKeyPress={lrnPress}
        onChange={lrnHandler}
      />
    </FormControl>
  );
});
