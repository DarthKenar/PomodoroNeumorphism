var newTask = document.getElementById("newTask")
var newTaskButton = document.getElementById("newTaskButton")
//Existir 2 listas:
    //Tareas completadas
    //Tareas Pendientes
var completedTasks = [];
var pendingTasks = [];

function upTask(){
    console.log("upTask()")
};

function downTask(){
    console.log("downTask()")
};

function refreshTasks(){
    //Actualizar DOM
        //Mostrar Tareas Pendientes
        //Mostrar Tareas Completadas
    console.log("refreshTasks()")
};

function saveTask(){
    console.log("saveTask()")
    
    //funcion que tendrá que:
        //Guardar la tarea en la lista tareas pendientes (pushear tarea)
        pendingTasks.push(newTask.textContent);
        // newTask.outerHTML("<li>HOLA A TODOS</li>")
        // newTask.insertAdjacentHTML(outerHTML,"<li>HOLA A TODOS</li>");
        // newTask.insertBefore();
        //funcion:
        refreshTasks();
        // FocusEvent.click() //quitar el focus del elemento
        newTask.focus()
        newTask.textContent = ""
        
    //Limpiar newTask Label
        

};

newTask.addEventListener('keydown',function(event){
    if (document.activeElement === newTask) {
        if (event.key === 'Enter' && event.shiftKey) {
            console.log("Shift + Enter");
        }else if(event.key === 'Enter'){
            console.log("Enter");
            newTaskButton.click();
        };
    };
});

newTaskButton.addEventListener("click", saveTask);