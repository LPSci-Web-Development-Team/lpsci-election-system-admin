// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR Hooks
import { useApp } from '@firebase/hooks/useApp';

// ANCHOR Credentials
import { CREDENTIALS } from '@firebase/credentials';

export const FirebaseApp = createModel(
  () => {
    const app = useApp(CREDENTIALS);

    return {
      app,
    };
  },
  {
    displayName: 'Models.FirebaseApp',
  },
);
