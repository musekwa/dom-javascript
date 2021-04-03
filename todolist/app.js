// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


// event listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('click', filterTodo)


// functions
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();

    //create DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Add TODO to LOCALSTORAGE
    saveLocalTodos(todoInput.value);


    //check mark BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></li>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //check trash BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></li>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //append to LIST
    todoList.appendChild(todoDiv);

    //clear todo INPUT value
    todoInput.value = "";

}


function deleteCheck(e){
   const item = e.target;

   //delete Todo
   if (item.classList[0] === "trash-btn"){
       const todo = item.parentElement;

       //animation
       todo.classList.add('fall');
       removeLocalTodos(todo)
       todo.addEventListener('transitionend', function(){
            todo.remove();

       })
       
   }

   //check MARK
   if(item.classList[0] === "complete-btn"){
       const todo = item.parentElement;
       todo.classList.toggle('completed');
   }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    //console.log(todos)
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all": 
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }
                else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }
                else {
                    todo.style.display = "none";
                }
                break;
        }
    })
}

function saveLocalTodos(todo){
    //check --- 
    let todos;
    if (localStorage.getItem('todos') === null){
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
    //check
    let todos;
    if (localStorage.getItem('todos') === null){
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
           //create DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //check mark BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></li>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //check trash BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></li>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //append to LIST
    todoList.appendChild(todoDiv);

    })
}

function removeLocalTodos(todo){
        //check
    let todos;
    if (localStorage.getItem('todos') === null){
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
   
}