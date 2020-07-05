const IS_PRODUCTION = process.env.DB_ENV === 'production';

const PRODUCTION_HOME = 'https://lpsci-admin.now.sh/sign-in';
const DEVELOPMENT_HOME = 'http://localhost:8000/sign-in';

export const sendPasswordResetEmail = async (
  email: string, authInstance: firebase.auth.Auth,
) => {
  await authInstance.sendPasswordResetEmail(email, {
    url: IS_PRODUCTION
      ? PRODUCTION_HOME
      : DEVELOPMENT_HOME,
  });
};
