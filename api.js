/*Prepopulates the array with 3 student details returning
the id (based on current date + increment to let id be unique),
firstName, lastName, and email.
 */
const mockStudentDB = [
  //   {
  //     id: Date.now() + 1,
  //     firstName: "Asta",
  //     lastName: "WizardKing",
  //     email: "asta@clover-kingdom.com",
  //   },
  //   {
  //     id: Date.now() + 2,
  //     firstName: "Yuno",
  //     lastName: "Grinberryall",
  //     email: "yuno@clover-kingdom.com",
  //   },
  //   {
  //     id: Date.now() + 3,
  //     firstName: "Yami",
  //     lastName: "Sukehiro",
  //     email: "yami@clover-kingdom.com",
  //   },
];

/* Returns the entire mockStudentDB object array,
functioning like a GET function. */
export function getStudentsAPI() {
  return mockStudentDB;
}

/* Adds new student data, including its own id, inside the mockStudentDB.
Also returns the data of the newStudent.*/
export function addStudentAPI(newStudentData) {
  const savedStudent = {
    id: Date.now(),
    firstName: newStudentData.firstName,
    lastName: newStudentData.lastName,
    email: newStudentData.email,
  };

  mockStudentDB.push(savedStudent);
  return savedStudent;
}
