/**
 * Checks if an array of options is provided.
 *
 * @param {Array} [options=[]] - The array of options to be checked.
 * @returns {boolean} Returns true if the array of options is provided and not empty, otherwise false.
 */
export function hasOptions(options = []) {
  if (!Array.isArray(options) || !options.length) {
    return false;
  }

  return true;
}

export default hasOptions;
