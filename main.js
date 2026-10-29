import { getStudentsAPI, addStudentAPI } from "./api.js";

console.log("======================== ACTIVITY 1 ========================");
console.log("---------- Test Case 1 ----------");
console.log(getStudentsAPI());

console.log("\n---------- Test Case 2 ----------");
const newStudent = addStudentAPI({
  firstName: "Luck",
  lastName: "Voltia",
  email: "luck@clover-kingdom.com",
});

console.log("Newly Added Student:", newStudent);

console.log("\n---------- Test Case 3 ----------");
console.log(getStudentsAPI());
console.log("============================================================");
