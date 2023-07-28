// Check if 'projects' is not already set in localStorage
if (!localStorage.getItem("projects")) {
  // Set 'projects' to an empty array
  localStorage.setItem("projects", JSON.stringify([]));
}
// This function will be used to render a single todo
function renderTodo(todo) {
  // Create a new div to contain the todo
  let todoDiv = document.createElement("div");

  // Create a title and dueDate element
  let titleElement = document.createElement("h2");
  let dueDateElement = document.createElement("p");

  // Set the content of the title and dueDate element
  titleElement.textContent = todo.getTitle();
  titleElement.contentEditable = "true";
  titleElement.className = `todo-title todo-priority-${todo
    .getPriority()
    .toLowerCase()}`;
  dueDateElement.textContent = todo.getDueDate();

  // Add an event listener for 'keypress'
  titleElement.addEventListener("keypress", function (e) {
    // Check if the key pressed was 'Enter'
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default action
      todo.setTitle(e.target.textContent); // Update the todo title
      let projectTitle =
        e.target.parentElement.parentElement.querySelector("h2").textContent;
      updateTodoInStorage(todo, projectTitle); // Update the todo in the storage
    }
  });

  // Append the title and dueDate element to the todoDiv
  todoDiv.appendChild(titleElement);
  todoDiv.appendChild(dueDateElement);

  // Append the todoDiv to the todo container in your HTML
  document.querySelector("#todo-container").appendChild(todoDiv);
}
function updateProjectInStorage(updatedProject) {
  // Get all projects from storage
  let projects = JSON.parse(localStorage.getItem("projects"));

  // Find the index of the project to update
  let index = projects.findIndex(
    (project) => project.title === updatedProject.getTitle()
  );

  // Replace the old project with the updated one
  projects[index] = updatedProject;

  // Store the updated projects array back in storage
  localStorage.setItem("projects", JSON.stringify(projects));
}

function updateTodoInStorage(updatedTodo, projectTitle) {
  // Get all projects from storage
  let projects = JSON.parse(localStorage.getItem("projects"));

  // Find the index of the project this todo belongs to
  let projectIndex = projects.findIndex((proj) => proj.title === projectTitle);

  // Find the index of the todo to update in the project's todos array
  let todoIndex = projects[projectIndex].todos.findIndex(
    (todo) => todo.title === updatedTodo.getTitle()
  );

  // Replace the old todo with the updated one
  projects[projectIndex].todos[todoIndex] = updatedTodo;

  // Store the updated projects array back in storage
  localStorage.setItem("projects", JSON.stringify(projects));
}

window.renderProject = function (project) {
  // Declare projectDiv here
  let projectDiv = document.createElement("div");

  // Add class and click event listener to projectDiv
  projectDiv.classList.add("project");
  projectDiv.textContent = project.getTitle();

  projectDiv.addEventListener("click", function () {
    let detailsDiv = document.getElementById("todo-container");
    detailsDiv.innerHTML = "";

    currentProjectTitle = project.getTitle();

    project.getTodos().forEach((todo) => {
      let todoElement = document.createElement("p");
      todoElement.textContent = `${todo.getTitle()} - ${todo.getDueDate()} - ${todo.getPriority()}`;
      detailsDiv.appendChild(todoElement);
    });
  });

  // Create and append title element to projectDiv
  let titleElement = document.createElement("h2");
  titleElement.textContent = project.getTitle();
  titleElement.contentEditable = "true";

  // Add an event listener for 'keypress'
  titleElement.addEventListener("keypress", function (e) {
    // Check if the key pressed was 'Enter'
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default action
      project.setTitle(e.target.textContent); // Update the project title
      updateProjectInStorage(project); // Update the project in the storage
    }
  });

  projectDiv.appendChild(titleElement);

  // Render each todo in the project
  project.getTodos().forEach((todo) => {
    renderTodo(todo);
  });

  // Append the projectDiv to the project container in your HTML
  document.querySelector("#project-container").appendChild(projectDiv);

  // Create a Delete button for the project
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete Project";

  // Attach a click event listener to the delete button
  deleteButton.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent the project click event from triggering

    // Call the function to delete the project
    deleteProjectFromStorage(project.getTitle());

    // Remove the project div from the DOM
    projectDiv.remove();
  });

  // Append the delete button to the project div
  projectDiv.appendChild(deleteButton);
};

// This function will be used to get user input from a form
function getInput(formId) {
  let form = document.querySelector(`#${formId}`);
  let inputs = form.elements;
  let inputValues = {};

  for (let i = 0; i < inputs.length; i++) {
    // Don't include the form's submit button
    if (inputs[i].type.toLowerCase() !== "submit") {
      inputValues[inputs[i].name] = inputs[i].value;
    }
  }

  return inputValues;
}
