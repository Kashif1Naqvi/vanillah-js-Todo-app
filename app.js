const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')

// Event Listerners
document.addEventListener('DOMContentLoaded',getTodo)
todoButton.addEventListener('click',addTodo);
filterOption.addEventListener('click',filterTodo);

// Function     
function addTodo(event){
    event.preventDefault()

    todoList.addEventListener('click',deletecheck)
    

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    // ADD TODO TO LOCALCLESTORAGE
    saveLocaleTodo(todoInput.value)    

    // create li

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
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



function saveLocaleTodo(todo){
    // Check --- Hey Do I already have in there?
    let todos;
    
    if(localStorage.getItem("todos") === null ){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    todos.push(todo)
    localStorage.setItem('todos',JSON.stringify(todos))
}


function getTodo(){
    let todos;
    if(localStorage.getItem('todos') === null ){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    todos.forEach((todo)=>{
        todoList.addEventListener('click',deletecheck)

        let todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')

        let newTodo = document.createElement('li')
        newTodo.innerText = todo
        newTodo.classList.add('todo-item')
        todoDiv.appendChild(newTodo)
        

        let chechBtn = document.createElement('button')
        chechBtn.classList.add('complete-btn')
        chechBtn.innerHTML = '<i class="fas fa-check" ></i>'
        todoDiv.appendChild(chechBtn)        

        let trashbtn = document.createElement('button')
        trashbtn.classList.add("trash-btn")
        trashbtn.innerHTML = '<i class="fas fa-trash" ></i>'
        todoDiv.appendChild(trashbtn)

        todoList.append(todoDiv)        
    })
}

