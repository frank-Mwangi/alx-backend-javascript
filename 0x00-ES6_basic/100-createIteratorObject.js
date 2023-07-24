export default function createIteratorObject(report) {
  let arr = [];
  for (const employee of Object.values(report.allEmployees)) {
    arr = [...arr, ...employee];
  }
  return arr;
}
