let mockStudentDB = [
  {
    id: Date.now() + 1,
    firstName: "Asta",
    lastName: "WizardKing",
    email: "asta@clover-kingdom.com",
  },
  {
    id: Date.now() + 2,
    firstName: "Yuno",
    lastName: "Grinberryall",
    email: "yuno@clover-kingdom.com",
  },
  {
    id: Date.now() + 3,
    firstName: "Yami",
    lastName: "Sukehiro",
    email: "yami@clover-kingdom.com",
  },
];

export function getStudentsAPI() {
  return mockStudentDB;
}

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
