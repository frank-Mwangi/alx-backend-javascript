export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  /* eslint-disable no-param-reassign */
  for (const idx of array) {
    const value = idx;
    array[i] = appendString + value;
    i += 1;
  }

  return array;
}
