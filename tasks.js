var newTask = document.getElementById("newTask")
var newTaskButton = document.getElementById("newTaskButton")
var tasksList = document.getElementById("tasks")
var tasksCounter = document.getElementById("tasksCounter")
var title = document.getElementById("title")

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

function blinkingAlert(){
        newTask.classList.add("no-alert")
        blinking = setInterval(()=>{newTask.classList.toggle("alert")},90);
        setTimeout(()=>{
            clearInterval(blinking)
        },400)
        setTimeout(()=>{
            newTask.classList.add("no-alert")
        },450)

};

function applyReduceTransition(element,measure) {
    // Asegúrate de que la altura inicial sea explícitamente establecida
    element.style.height = `${element.offsetHeight}${measure}`;
    // Aplica la clase "reduce" al elemento y a todos sus elementos secundarios
    element.classList.add("reduce");
  
    const children = element.children;
    for (let i = 0; i < children.length; i++) {
      applyReduceTransition(children[i]);
    }
  }
  
function deleteTask(id) {
    let elementToRemove = document.getElementById(`pendingTask${id}`);
    applyReduceTransition(elementToRemove,"%");
    setTimeout(()=>(elementToRemove.remove()),500);
    tasksCounter.textContent = parseInt(tasksCounter.textContent) - 1
  }

function saveTask(){
    console.log("saveTask()")

    if(newTask.textContent == "" || newTask.textContent == "Escribe aquí..."){
        blinkingAlert();
    }else{
        //funcion que tendrá que:
        //Guardar la tarea en la lista tareas pendientes (pushear tarea)
        pendingTasks.push(newTask.textContent);
        task = `<li id="pendingTask${pendingTasks.length}">
                    <div>
                        <button class="switch" onclick="upTask(${pendingTasks.length})">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
                        </button>
                        <button class="switch" onclick="downTask(${pendingTasks.length})">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </button>
                    </div>
                    <label>${pendingTasks[pendingTasks.length-1]}</label>
                    <div>
                        <button class="switch" onclick="editTask(${pendingTasks.length})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                        </button>
                        <button class="switch" onclick="deleteTask(${pendingTasks.length})">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                        </button>
                    </div>
                </li>`
        tasksList.insertAdjacentHTML('beforeend',task)
        //funcion:
        refreshTasks();
        // FocusEvent.click() //quitar el focus del elemento
        tasksCounter.textContent = parseInt(tasksCounter.textContent) + 1 
        newTask.blur()
        newTask.textContent = ""
        setTimeout(()=>{
            newTask.focus()
        },50)
        //Limpiar newTask Label
    };
};

newTask.addEventListener('keydown',function(event){
    if (document.activeElement === newTask) {
        if (event.key === 'Enter' && event.shiftKey) {
            console.log("Shift + Enter");
        }else if(event.key === 'Enter'){
            console.log("Enter");
            saveTask();
        };
    };
});

newTaskButton.addEventListener("click", saveTask);