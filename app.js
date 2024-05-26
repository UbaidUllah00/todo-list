let todoInput = document.querySelectorAll('#todo-input')[0];
let todoListDiv = document.querySelectorAll('#todo-list');

let allTodos = [];

function add() {
    let newTodo = todoInput.value
    allTodos.push(newTodo);
    printAllTodos();
    todoInput.value = "";
}

function printAllTodos() {
    todoListDiv[0].innerHTML= "";
    for (let i = 0; i < allTodos.length; i++) {
        todoListDiv[0].innerHTML += `
            <p id="todo-${i}">
                ${allTodos[i]}
                <button onclick="deleteTodo(${i}) ">Delete</button>
            </p>
        `;
    }
}


function deleteTodo(index) {
    allTodos.splice(index, 1);
    printAllTodos();
}


