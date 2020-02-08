// ANCHOR React
import * as React from 'react';

// ANCHOR Next
import Router from 'next/router';

// ANCHOR Models
import { SignInFormInput } from 'scoped-models/sign-in/SignInFormInput';

// ANCHOR Utils
import { signinUser } from 'utils/api/user';

// ANCHOR Hooks
import { usePromise } from 'utils/hooks/usePromise';

// ANCHOR Components
import { ElectionSignInLogo } from '../ElectionSignInLogo';
import { ElectionSignInLogoText } from '../ElectionSignInLogoText';
import { ElectionSignInHeading } from '../ElectionSignInHeading';
import { ElectionSignInLogoContainer } from '../ElectionSignInLogoContainer';
import { ElectionSignInInputContainer } from '../ElectionSignInInputContainer';
import { ElectionSignInInputLRN } from '../ElectionSignInLrn';
import { ElectionSignInInputPassword } from '../ElectionSignInPassword';
import { ElectionSignInSubmitButton } from '../ElectionSignInSubmitButton';
import { ElectionSignInError } from '../ElectionSignInError';
import { ElectionSignInContainer } from '../ElectionSignInContainer';
import { ElectionSignInGridContainer } from '../ElectionSignInGridContainer';

export const ElectionSignIn = React.memo(() => {
  const [
    lrn,
    password,
    filled,
    setLoading,
    setError,
    validLrn,
    setDisabled,
  ] = SignInFormInput.useSelectors((state) => [
    state.lrn,
    state.password,
    state.filled,
    state.setLoading,
    state.setError,
    state.validLrn,
    state.setDisabled,
  ]);

  const mounted = usePromise([
    lrn, password, filled,
  ]);

  const onSubmit = React.useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    setDisabled(true);

    if (filled && validLrn) {
      try {
        await mounted(signinUser({
          lrn,
          password,
        }));
        setLoading(false);
        Router.push('/voting');
      } catch (err) {
        setError('Please enter your valid credentials');
        setLoading(false);
        setDisabled(false);
        Router.push('/');
      }
    }
  }, [setLoading, filled, validLrn, mounted, lrn, password, setError, setDisabled]);

  return (
    <ElectionSignInGridContainer>
      <form onSubmit={onSubmit}>
        <ElectionSignInContainer>
          <ElectionSignInLogoContainer>
            <ElectionSignInLogo name="lpsci-logo" size="100px" src="img/lpsci-logo.png" />
            <ElectionSignInLogoText />
          </ElectionSignInLogoContainer>
          <ElectionSignInHeading />
          <ElectionSignInError />
          <ElectionSignInInputContainer>
            <ElectionSignInInputLRN />
          </ElectionSignInInputContainer>
          <ElectionSignInInputContainer>
            <ElectionSignInInputPassword />
          </ElectionSignInInputContainer>
          <ElectionSignInSubmitButton />
        </ElectionSignInContainer>
      </form>
    </ElectionSignInGridContainer>
  );
});
