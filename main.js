let projects = [];
let activeProject = null;
window.onload = function () {
  // Create a default project and a todo
  let defaultProject = createProject("Sample Project");
  let defaultTodo = createTodo(
    "Sample Todo",
    "This is a default todo description",
    "1995-12-27",
    "Medium"
  );
  defaultProject.addTodo(defaultTodo);
  projects.push(defaultProject);
  activeProject = defaultProject;
  projects.forEach((project) => {
    renderProject(project);
  });

  // Add event listener for the add project button
  let addProjectButton = document.getElementById("add-project");
  addProjectButton.addEventListener("click", function () {
    let projectTitle = document.querySelector(
      'input[name="project-title"]'
    ).value;
    addNewProject(projectTitle);
  });

  // Add event listener for the add todo button
  let addTodoButton = document.getElementById("add-todo");
  addTodoButton.addEventListener("click", function () {
    let todoTitle = document.querySelector('input[name="todo-title"]').value;
    let todoDescription = document.querySelector(
      'input[name="todo-description"]'
    ).value;
    let todoDueDate = document.querySelector(
      'input[name="todo-due-date"]'
    ).value;
    let todoPriority = document.querySelector(
      'select[name="todo-priority"]'
    ).value;

    if (activeProject) {
      addNewTodoToProject(
        activeProject,
        todoTitle,
        todoDescription,
        todoDueDate,
        todoPriority
      );
    } else {
      alert("Please select a project first.");
    }
  });

  // Add event listener for each project
  document
    .querySelector("#project-container")
    .addEventListener("click", function (e) {
      let clickedProjectTitle = e.target.textContent;
      activeProject = projects.find(
        (project) => project.getTitle() === clickedProjectTitle
      );

      // Clear the todo container
      let todoContainer = document.getElementById("todo-container");
      todoContainer.innerHTML = "";

      // Render todos of the clicked project
      activeProject.getTodos().forEach((todo) => {
        renderTodo(todo);
      });
    });
  // Helpful notification
  function showNotification() {
    // Create the notification element
    let notification = document.createElement("div");
    notification.className = "notification";
    notification.innerText =
      "Use the sample project as a guide to create your own project! Click on a project to see the todos";

    // Append the notification to the body of the document
    document.body.appendChild(notification);

    // Show the notification after a small delay
    setTimeout(function () {
      notification.classList.add("show");
    }, 100);

    // Hide the notification after 10 seconds
    setTimeout(function () {
      notification.classList.remove("show");

      // Remove the notification from the document after it has been hidden
      setTimeout(function () {
        document.body.removeChild(notification);
      }, 1000);
    }, 10000);
  }

  showNotification();
};
