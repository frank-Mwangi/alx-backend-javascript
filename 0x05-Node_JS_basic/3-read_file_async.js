const fs = require('fs');

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }

      const content = data.split('\n');
      let students = content.filter((item) => item);
      students = students.map((item) => item.split(','));
      const totalStudents = students.length ? students.length - 1 : 0;
      let response = `Number of students: ${totalStudents}`;
      // console.log(response);
      // response.push(response);
      const fields = {};
      for (const i in students) {
        if (i !== 0) {
          if (!fields[students[i][3]]) fields[students[i][3]] = [];

          fields[students[i][3]].push(students[i][0]);
        }
      }
      delete fields.field;
      for (const key of Object.keys(fields)) {
        response += `\nNumber of students in ${key}: ${
          fields[key].length
        }. List: ${fields[key].join(', ')}`;
        // console.log(response);
        // response.push(response);
      }
      resolve(response);
    });
  });
}
module.exports = countStudents;
