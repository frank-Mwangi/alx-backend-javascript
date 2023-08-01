/* eslint-disable no-param-reassign */
const getStudentIdsSum = (studentList) => studentList.reduce((acc, { id }) => {
  acc += id;
  return acc;
}, 0);
export default getStudentIdsSum;
