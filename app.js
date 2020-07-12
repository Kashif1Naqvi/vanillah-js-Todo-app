const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


// Event Listerners

todoButton.addEventListener('click',addTodo);


// Function     
function addTodo(event){
    event.preventDefault()
    
    todoList.addEventListener('click',deletecheck)
    

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    // create li

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value
    newTodo.classList.add('tofo-item')
    todoDiv.appendChild(newTodo)

    // Check mark button

    const completeButton = document.createElement('button')
    completeButton.innerHTML = '<i class="fas fa-check" ></i>'
    completeButton.classList.add('complete-btn')
    todoDiv.appendChild(completeButton)


    // trash button

    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash" ></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)


    // append todo-list

    todoList.appendChild(todoDiv)

    // clear todo input value
    todoInput.value = ''
}



function deletecheck(e){
   const item = e.target

   // DELETE TODO
   if(item.classList[0]==='trash-btn'){
       const todo = item.parentElement
       todo.remove()

   }

}