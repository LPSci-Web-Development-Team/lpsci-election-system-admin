/**
 * Returns a boolean to identify wether the email is a
 * valid one or not.
 *
 * @param email Email
 */
export const isEmail = (email: string) => {
  const regex = '[^\\.\\s@:](?:[^\\s@:]*[^\\s@:\\.])?@[^\\.\\s@]+(?:\\.[^\\.\\s@]+)*';

  const valid = new RegExp(`^${regex}$`);

  return valid.test(email);
};
