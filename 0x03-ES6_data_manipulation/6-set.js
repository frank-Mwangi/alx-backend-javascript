const setFromArray = (input) => {
  if (Array.isArray(input)) {
    return new Set(input);
  }
  return {};
};

export default setFromArray;
