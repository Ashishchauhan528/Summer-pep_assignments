const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", addTodo);

function addTodo(){

    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();

    if(title === "" || description === ""){
        alert("Please fill all fields");
        return;
    }

    const todo = document.createElement("div");
    todo.classList.add("todo");

    const heading = document.createElement("h3");
    heading.innerText = title;

    const para = document.createElement("p");
    para.innerText = description;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete Todo";
    deleteBtn.classList.add("deleteBtn");

    deleteBtn.addEventListener("click", function(){
        todo.remove();
    });

    todo.appendChild(heading);
    todo.appendChild(para);
    todo.appendChild(deleteBtn);

    todoList.appendChild(todo);

    titleInput.value = "";
    descriptionInput.value = "";
}