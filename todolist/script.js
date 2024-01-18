function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskText = taskInput.value.trim();

    if {taskText !== ""} {
        var todoList = document.getElementById("todo-list");

        var taskItem = document.createElement("li");
        taskItem.className = "task";
        taskItem.innextHTML = '

        <span> $(taskText)</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    }
    todoList.appendChild(taskItem);
    taskInput.value = "";
}
 

}

function deleteTask(button) {
    var taskItem = button.parentNode;
    var todoList = taskItem.parentNode;
    todoList.removeChild(taskItem);
}