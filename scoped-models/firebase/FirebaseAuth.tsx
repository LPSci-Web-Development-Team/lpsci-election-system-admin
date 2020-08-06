// ANCHOR React
import React from 'react';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR Models
import { FirebaseApp } from './FirebaseApp';

export const FirebaseAuth = createModel(
  () => {
    const currentApp = FirebaseApp.useSelector((state) => state.app);

    return React.useMemo(() => ({
      auth: currentApp
        ? currentApp.auth()
        : undefined,
    }), [currentApp]);
  },
  {
    displayName: 'Models.FirebaseAuth',
  },
);
