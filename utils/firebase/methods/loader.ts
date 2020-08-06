export async function firebaseLoader() {
  const firebase = await import('firebase/app');

  // load modules
  await import('firebase/auth');
  await import('firebase/firestore');
  await import('firebase/messaging');

  return firebase;
}
