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
  // This function will be used to render a project
  function renderProject(project) {
    let projectContainer = document.getElementById("project-container");

    // Create a new div to contain the project
    let projectDiv = document.createElement("div");
    projectDiv.classList.add("project"); // Add a class to the projectDiv
    projectDiv.textCoontent = project.getTitle(); // Set the content of the projectDiv

    // Add a click event listener to the projectDiv
    projectDiv.addEventListener("click", function () {
      // Fix this line
      let detailsDiv = document.getElementById("project-details");

      // First, clear out any previous details
      detailsDiv.innerHTML = "";

      // Create and append new elements for each piece of detail
      let titleElement = document.createElement("h2");
      titleElement.textContent = project.getTitle();
      detailsDiv.appendChild(titleElement);

      // Iterate over each todo in the project and display its details
      project.getTodos().forEach((todo) => {
        let todoElement = document.createElement("p");
        todoElement.textContent = `${todo.getTitle()} - ${todo.getDueDate()} - ${todo.getPriority()}`;
        detailsDiv.appendChild(todoElement);
      });
    }); // And fix this line

    // Create a title element
    let titleElement = document.createElement("h2");

    // Set the content of the title element
    titleElement.textContent = project.getTitle();

    // Append the title element to the projectDiv
    projectDiv.appendChild(titleElement);

    // Render each todo in the project
    project.getTodos().forEach((todo) => {
      renderTodo(todo);
    });

    // Append the projectDiv to the project container in your HTML
    document.querySelector("#project-container").appendChild(projectDiv);
  }
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
