import { getStudentsAPI, addStudentAPI } from "./api.js";

/*Initializes a localStudent array to store 
the object data when getStudentAPI() is called.*/
let localStudents = [];

/* Initializes a DOM to allow modification of text, style and value*/
const studentForm = document.getElementById("studentForm");
const studentTableBody = document.getElementById("studentTableBody");

/* Checks if data array has elements.  
Displays the data from localStudent array to the table dynamically.
Traverses the array collections in dataArray using forEach and 
putting one entire object details one per row. */
const renderTable = (dataArray) => {
  studentTableBody.innerHTML = "";

  if (dataArray.length === 0) {
    studentTableBody.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center">
        No student records found.
        </td>
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

/* Creates an event handler that grabs the inputs,
saves it as an student object using the
addStudentAPI and pushing it to localStudent array. 
Updates the display with the new Student Data 
and refreshes the form removing the earlier inputs. */
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

//Initializes application data and renders the view.
const initApp = () => {
  localStudents = [...getStudentsAPI()];
  renderTable(localStudents);
};

//Starts the application
initApp();
