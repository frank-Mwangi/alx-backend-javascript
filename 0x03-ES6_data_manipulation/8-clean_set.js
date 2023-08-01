export default function cleanSet(set, startString) {
  if (startString) {
    return [...set]
      .filter((element) => {
        if (element) {
          return element.startsWith(startString);
        }
        return '';
      })
      .map((element) => {
        if (element) {
          return element.replace(startString, '');
        }
        return '';
      })
      .join('-');
  }
  return '';
}
