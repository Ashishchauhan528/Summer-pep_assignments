const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
function addTask(){
    const text = input.value.trim();
    if(text===""){
        alert("Please enter a task");
        return;
    }
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.className="task";
    span.innerText=text;
    span.onclick=function(){
        span.classList.toggle("completed");
    };
    const del = document.createElement("button");
    del.className="delete";
    del.innerHTML='<i class="fa-solid fa-trash"></i>';
    del.onclick=function(){
        li.remove();
    };
    li.appendChild(span);
    li.appendChild(del);
    list.appendChild(li);
    input.value="";
    input.focus();
}

input.addEventListener("keypress",function(e){
    if(e.key==="Enter"){
        addTask();
    }
});