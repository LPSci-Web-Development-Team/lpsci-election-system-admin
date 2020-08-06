// ANCHOR SWR
import useSWR from 'swr';

// ANCHOR Firebase
import { firebaseLoader } from '../methods/loader';

export interface IFirebaseConfig {
  apiKey?: string;
  authDomain?: string;
  databaseURL?: string;
  projectId?: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId?: string;
  measurementId?: string;
}

export function useApp(value: IFirebaseConfig) {
  const { data: currentApp } = useSWR('/app', async () => {
    const firebase = await firebaseLoader();
    // Check if there are instances already running
    if (firebase.apps.length) {
      // If there are instances, return the current app.
      return firebase.app();
    }

    // Other wise, instanciate the app.
    return firebase.initializeApp(value);
  });

  return currentApp;
}
