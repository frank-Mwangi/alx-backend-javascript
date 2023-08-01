const getStudentsByLocation = (studentList, city) => {
  if (Array.isArray(studentList)) {
    return studentList.filter((student) => student.location === city);
  }

  return [];
};
export default getStudentsByLocation;
