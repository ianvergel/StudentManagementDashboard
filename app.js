import { getStudentsAPI, addStudentAPI } from "./api.js";

let localStudents = [];

const studentForm = document.getElementById("studentForm");
const studentTableBody = document.getElementById("studentTableBody");

const renderTable = (dataArray) => {
  studentTableBody.innerHTML = "";

  if (!dataArray || dataArray.length === 0) {
    studentTableBody.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center">No student records found.</td>
      </tr>
    `;
    return;
  }

  dataArray.forEach((student, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.firstName}</td>
      <td>${student.lastName}</td>
      <td>${student.email}</td>
    `;

    studentTableBody.appendChild(row);
  });
};

studentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const emailInput = document.getElementById("email");

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const email = emailInput.value.trim();

  if (!firstName || !lastName || !email) {
    alert("All input fields must be filled out.");
    return;
  }

  const studentData = {
    firstName,
    lastName,
    email,
  };

  const savedStudent = addStudentAPI(studentData);
  localStudents.push(savedStudent);

  renderTable(localStudents);

  studentForm.reset();
});

const initApp = () => {
  localStudents = [...getStudentsAPI()];
  renderTable(localStudents);
};

initApp();
