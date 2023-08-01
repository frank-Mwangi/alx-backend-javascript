const updateStudentGradeByCity = (studentList, city, newGrades) => {
  const newList = studentList.filter((student) => student.location === city);
  return newList.map((student) => {
    const studentGrades = newGrades.find(
      ({ studentId }) => studentId === student.id,
    );
    if (studentGrades && studentGrades.grade) {
      return { ...student, grade: studentGrades.grade };
    }
    return { ...student, grade: 'N/A' };
  });
};

export default updateStudentGradeByCity;
