//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');



//Event listener
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);


//function



function addTodo(event){
    if(document.querySelector('.todo-input').value.length == 0){
        alert("Please Enter a Task")
        //prevent form from submitting
        event.preventDefault();
    }
    else{
        //prevent form from submitting
        event.preventDefault();
   
            //todo div

        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
            
        //check mark button

        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="far fa-square"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        //create li

        const newTodo = document.createElement("li");
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

    

        //check trash button

        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);


        //append to list
        var currentCount =document.getElementById("my-count-task").value;
        //alert(current_count);
        todoList.appendChild(todoDiv);
        currentCount++;
        document.getElementById("my-count-task").value = currentCount;
        document.getElementById("task-count").textContent=currentCount;
        
        //clear todo input value

            todoInput.value = "";
            
        }

    }


function deleteCheck(e){
    const item = e.target;
    //delete

    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.remove();
        var currentCount =document.getElementById("my-count-task").value;
        document.getElementById("my-count-task").value = currentCount-1;
        document.getElementById("task-count").textContent = currentCount-1;
    }

    //CHECK MARK

    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
        

    }
}

