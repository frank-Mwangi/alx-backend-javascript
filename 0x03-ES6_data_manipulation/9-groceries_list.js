const groceriesList = () => {
  const list = [
    { key: 'Apples', value: 10 },
    { key: 'Tomatoes', value: 10 },
    { key: 'Pasta', value: 1 },
    { key: 'Rice', value: 1 },
    { key: 'Bananas', value: 5 },
  ];
  const newMap = new Map();
  list.forEach(({ key, value }) => newMap.set(key, value));

  return newMap;
};

export default groceriesList;
