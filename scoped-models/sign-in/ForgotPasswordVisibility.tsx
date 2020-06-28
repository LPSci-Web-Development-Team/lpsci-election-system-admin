// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR Hooks
import { useToggle } from '@lpsci/hooks';

export const ForgotPasswordVisibility = createModel(() => useToggle(false),
  {
    displayName: 'Models.ForgotPasswordVisibility',
  });
