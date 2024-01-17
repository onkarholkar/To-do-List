document.addEventListener("DOMContentLoaded", function() {
    // Load tasks from local storage
    loadTasks();
});

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value !== "") {
        // Create a new list item
        var li = document.createElement("li");
        li.innerHTML = `
            <span>${taskInput.value}</span>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(li);

        // Save tasks to local storage
        saveTasks();

        // Clear the input field
        taskInput.value = "";
    }
}

function deleteTask(button) {
    var li = button.parentNode;
    var taskList = document.getElementById("taskList");

    // Remove the task from the list
    taskList.removeChild(li);

    // Save tasks to local storage
    saveTasks();
}

function saveTasks() {
    var taskList = document.getElementById("taskList");
    var tasks = taskList.innerHTML;

    // Save tasks to local storage
    localStorage.setItem("tasks", tasks);
}

function loadTasks() {
    var taskList = document.getElementById("taskList");
    var tasks = localStorage.getItem("tasks");

    // Load tasks from local storage
    if (tasks !== null) {
        taskList.innerHTML = tasks;
    }
}
