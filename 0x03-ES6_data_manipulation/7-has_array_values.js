export default function hasValuesFromArray(inputSet, inputArray) {
  return inputArray.every((element) => inputSet.has(element));
}
