const fs = require('fs');

const countStudents = (path) => {
  let content;
  try {
    content = fs.readFileSync(path, 'utf-8').toString();
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  content = content.split('\n');
  let students = content.filter((item) => item);
  students = students.map((item) => item.split(','));
  const totalStudents = students.length ? students.length - 1 : 0;
  console.log(`Number of students: ${totalStudents}`);

  const fields = {};
  for (const i in students) {
    if (i !== 0) {
      if (!fields[students[i][3]]) fields[students[i][3]] = [];
      fields[students[i][3]].push(students[i][0]);
    }
  }
  delete fields.field;

  for (const key of Object.keys(fields)) {
    console.log(
      `Number of students in ${key}: ${fields[key].length}. List: ${fields[
        key
      ].join(', ')}`
    );
  }
};
module.exports = countStudents;
