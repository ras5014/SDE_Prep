/*
  Problem: Find a student name in an array of student names
*/

const studentDatabase = ["Ram", "Shyam", "Hari", "Sita", "Gita"];

// O(n) time complexity
const findStudent = (studentDatabase, studentName) => {
  for (let i = 0; i < studentDatabase.length; i++) {
    // find the student
    if (studentDatabase[i] === studentName) {
      console.log(`Found ${studentName} at index ${i} in the database`);
      return;
    }
  }
  console.log(`${studentName} not found in the database`);
};

findStudent(studentDatabase, "Hari");
findStudent(studentDatabase, "Ramesh");

/* Output
  Found Hari at index 2 in the database
  Ramesh not found in the database
*/
