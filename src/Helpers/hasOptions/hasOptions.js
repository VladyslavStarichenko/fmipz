export function hasOptions(options = []) {
  if (!Array.isArray(options) || !options.length) {
    return false;
  }

  return true;
}

export default hasOptions;
