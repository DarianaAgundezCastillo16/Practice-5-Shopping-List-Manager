// take the DOM elements
const todoInput = document.getElementById("inputText");
const addTaskBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskError = document.getElementById("taskError");

function isValid(task){
    let validation = true;  
    taskError.textContent = "";

    if (task.trim() === ""){
        validation = false;
        taskError.textContent = "This is an error!";
    }

    return validation;
}

function register(){
    let task = todoInput.value; // getting the value from the input
    console.log(task);

    if(isValid(task)){
        // create an HTML element
        let li = document.createElement("li");
        li.textContent = task; // Usar textContent es más seguro que innerHTML
        taskList.appendChild(li);
        
        // clear the input
        todoInput.value = "";
    }
}

function init(){
    // event handlers
    addTaskBtn.addEventListener('click', register);
}

window.onload = init;

