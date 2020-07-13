const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')

// Event Listerners

todoButton.addEventListener('click',addTodo);
filterOption.addEventListener('click',filterTodo);

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
       // ADD ANIMATION
       todo.classList.add("fall")
       todo.addEventListener("transitionend",function(){
        todo.remove()
    })
       
   }

   // Check mark 

   if(item.classList[0]==='complete-btn'){
       const todo = item.parentElement
       todo.classList.toggle('completed')
   }


}


function filterTodo(e){
    const todo = todoList.childNodes;
    todo.forEach(todo => {
        switch (e.target.value) {
            case "all":
                todo.style.display = 'flex'
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                     todo.style.display = 'flex'
                }else{
                    todo.style.display = 'none'
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex'
                }else{
                    todo.style.display = 'none'
                }
                break;
        }
    });
}

