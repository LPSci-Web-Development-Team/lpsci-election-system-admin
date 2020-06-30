/**
 * ANCHOR: Returns the user's theme preference, isLight
 * theme check, and isDark theme check.
 *
 * The user's theme preference is storred in their
 * localStorage with the key "theme".
 */
export const userTheme = () => {
  const theme = typeof window === 'undefined'
    ? 'light'
    : window.localStorage.getItem('theme');

  const toggle = () => {
    if (theme === 'dark') {
      window.localStorage.setItem('theme', 'light');
    } else {
      window.localStorage.setItem('theme', 'dark');
    }
  };

  return {
    theme,
    isLight: !theme || theme === 'light',
    isDark: theme === 'dark',
    toggle,
  };
};
