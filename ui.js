// This function will be used to render a single todo
function renderTodo(todo) {
  // Create a new div to contain the todo
  let todoDiv = document.createElement("div");

  // Create a title and dueDate element
  let titleElement = document.createElement("h2");
  let dueDateElement = document.createElement("p");

  // Set the content of the title and dueDate element
  titleElement.textContent = todo.getTitle();
  titleElement.className = `todo-title todo-priority-${todo
    .getPriority()
    .toLowerCase()}`;
  dueDateElement.textContent = todo.getDueDate();

  // Append the title and dueDate element to the todoDiv
  todoDiv.appendChild(titleElement);
  todoDiv.appendChild(dueDateElement);

  // Append the todoDiv to the todo container in your HTML
  document.querySelector("#todo-container").appendChild(todoDiv);
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

    project.getTodos().forEach((todo) => {
      let todoElement = document.createElement("p");
      todoElement.textContent = `${todo.getTitle()} - ${todo.getDueDate()} - ${todo.getPriority()}`;
      detailsDiv.appendChild(todoElement);
    });
  });

  // Create and append title element to projectDiv
  let titleElement = document.createElement("h2");
  titleElement.textContent = project.getTitle();
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
