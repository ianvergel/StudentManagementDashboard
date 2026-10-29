import { getStudentsAPI, addStudentAPI } from "./api.js";

/**
 * Local state array to hold student objects retrieved from the API.
 * @type {Array<Object>}
 */
let localStudents = [];

// Cache DOM element references for form and table body
const studentForm = document.getElementById("studentForm");
const studentTableBody = document.getElementById("studentTableBody");

/**
 * Clears and re-renders the student table
 * body using safe textContent DOM creation.
 * @param {Array<Object>} dataArray - Array of student objects
 * containing firstName, lastName, and email.
 */
const renderTable = (dataArray) => {
  studentTableBody.innerHTML = "";

  if (!dataArray || dataArray.length === 0) {
    studentTableBody.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center;">
        No student records found.
        </td>
      </tr>
    `;
    return;
  }

  dataArray.forEach((student, index) => {
    const row = document.createElement("tr");

    const tdIndex = document.createElement("td");
    tdIndex.textContent = index + 1;

    const tdFirstName = document.createElement("td");
    tdFirstName.textContent = student.firstName;

    const tdLastName = document.createElement("td");
    tdLastName.textContent = student.lastName;

    const tdEmail = document.createElement("td");
    tdEmail.textContent = student.email;

    row.appendChild(tdIndex);
    row.appendChild(tdFirstName);
    row.appendChild(tdLastName);
    row.appendChild(tdEmail);

    studentTableBody.appendChild(row);
  });
};

/**
 * Handles form submission: validates inputs, persists the record via API,
 * updates local state, and refreshes the UI view.
 */
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

/**
 * Fetches initial student data from the API and performs the first UI render.
 */
const initApp = () => {
  localStudents = [...getStudentsAPI()];
  renderTable(localStudents);
};

// Start the application lifecycle
initApp();
