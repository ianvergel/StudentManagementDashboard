/**
 * In-memory data store containing mock student records.
 * Can be pre-populated with initial student objects if needed.
 * @type {Array<{id: number, firstName: string,
 * lastName: string, email: string}>}
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

/**
 * Retrieves all registered student records from the mock database.
 * @returns {Array<{id: number, firstName: string,
 * lastName: string, email: string}>} The array of student objects.
 */
export function getStudentsAPI() {
  return mockStudentDB;
}

/**
 * Creates a new student record with a unique timestamp ID
 * and appends it to the database.
 * @param {{firstName: string, lastName: string, email: string}} newStudentData
 * - The student details to save.
 * @returns {{id: number, firstName: string, lastName: string, email: string}}
 * The newly created student object.
 */
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
