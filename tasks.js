var newTask = document.getElementById("newTask")
var newTaskButton = document.getElementById("newTaskButton")

//Existir 2 listas:
    //Tareas completadas
    //Tareas Pendientes

function saveTask(){
    console.log("saveTask()")
    //funcion que tendrá que:
        //Guardar la tarea en la lista tareas pendientes (pushear tarea)
        //funcion:
        //Actualizar DOM
            //Actualizar Tareas Pendientes
            //Actualizar Tareas Completadas
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