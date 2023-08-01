export default function updateUniqueItems(arg) {
  if (arg instanceof Map) {
    arg.forEach((value, key) => {
      if (value === 1) {
        arg.set(key, 100);
      }
    });
  } else {
    throw new Error('Cannot process');
  }
}
