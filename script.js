
let ToDoTask = []

document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();
    let UserInput = document.getElementById("UserInput");
    ToDoTask.push(UserInput.value);
    console.log(ToDoTask);
})