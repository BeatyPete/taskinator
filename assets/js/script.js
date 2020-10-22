var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
    //tells browser not to refresh (default function)
    event.preventDefault();
    //lists inputs from forms as variables
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    //check if input is empty
    if (!taskNameInput || !taskTypeInput) {
      alert("You need to fill out the form!");
      return false;
    }
    //resets forms to blank
    formEl.reset();
    //package data as object
    var taskDataObj = {
      name: taskNameInput,
      type: taskTypeInput
    };
    //send as an argument to createtaskel
    createTaskEl(taskDataObj); 
}

var createTaskEl = function(taskDataObj) {
    //creates new task
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    //create div to hold info and append list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);
    tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", taskFormHandler)



