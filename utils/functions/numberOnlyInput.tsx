interface IOptions {
  allowDot: boolean,
}

/**
 * Restricts non numbers from being registered in an input field.
 *
 * @param e Keyboard event
 * @param options Additional options
 */
export const numberOnlyInput = (
  e: React.KeyboardEvent<HTMLInputElement>, options?: IOptions,
): void => {
  const ASCIICode = (e.which) ? e.which : e.keyCode;

  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
    if (options) {
      if (options.allowDot && ASCIICode !== 46) {
        e.preventDefault();
      }
    } else {
      e.preventDefault();
    }
  }
};
