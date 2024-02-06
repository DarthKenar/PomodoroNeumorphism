var newTask = document.getElementById("newTask")
var newTaskButton = document.getElementById("newTaskButton")
var tasksList = document.getElementById("tasks")
var tasksCounter = document.getElementById("tasksCounter")
var completedTasks = [];
var pendingTasks = [];
var tasksEnumerator = 0
function focusInTextAtTheEnd(elemento) {

    // Verificar si el elemento tiene texto
    if (elemento.childNodes.length > 0) {
        var ultimoNodo = elemento.childNodes[elemento.childNodes.length - 1];

        // Crear un nuevo rango de selección
        var rango = document.createRange();

        // Seleccionar el nodo de texto dentro del elemento
        rango.selectNodeContents(ultimoNodo);

        // Establecer el punto de inicio y fin del rango al final del texto
        rango.collapse(false);

        // Crear una nueva selección y aplicarla al documento
        var seleccion = window.getSelection();
        seleccion.removeAllRanges();
        seleccion.addRange(rango);
    };

    // Establecer el foco en el elemento
    elemento.focus();
}


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
function focusNewTask(){
    newTask.blur()
    newTask.textContent = ""
    setTimeout(()=>{
        newTask.focus()
    },50)
};

function blinkingAlert(){
        newTask.classList.add("alert");
        setTimeout(()=>{
            newTask.classList.add("no-alert")
        },600);
        setTimeout(()=>{
            newTask.classList.remove("no-alert")
            newTask.classList.remove("alert")
        },800);
        focusNewTask();
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
    //eliminamos la tarea de pendingTasks (lista de strs ded tareas)
    delete(pendingTasks[id])
}
function editTask(id) {
    newTask.textContent = document.getElementById(`pendingTask${id}`).textContent;
    deleteTask(id);
    focusInTextAtTheEnd(newTask);
}
function saveTask(){
    console.log("saveTask()")

    if(newTaskPlaceHolders.includes(newTask.textContent)){
        blinkingAlert();
    }else{
        //funcion que tendrá que:
        //Guardar la tarea en la lista tareas pendientes (pushear tarea)
        pendingTasks.push(newTask.textContent);

        //verificamos el estado en el que está el usuario, si work o rest para aplicar los estilos correctos al insertar los elementos en pantalla
        if(startButton.classList.contains("work-button")){
            buttonStyle = "work-button"
        }else{
            buttonStyle = "rest-button"
        }

        

        task = `<li id="pendingTask${tasksEnumerator}">
                    <div>
                        <button id="upTaskButton-${tasksEnumerator}" class="switch ${buttonStyle}" onclick="upTask(${tasksEnumerator})">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
                        </button>
                        <button id="downTaskButton-${tasksEnumerator}" class="switch ${buttonStyle}" onclick="downTask(${tasksEnumerator})">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </button>
                    </div>
                    <label>${pendingTasks[pendingTasks.length-1]}</label>
                    <div>
                        <button id="editTaskButton-${tasksEnumerator}" class="switch ${buttonStyle}" onclick="editTask(${tasksEnumerator})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                        </button>
                        <button id="deleteTaskButton-${tasksEnumerator}" class="switch ${buttonStyle}" onclick="deleteTask(${tasksEnumerator})">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                        </button>
                    </div>
                </li>`
        //Aumentamos el valor del contador para tener un valor utilizable por la proxima tarea
        tasksEnumerator += 1
        //inserta la tarea para que sea visible en el DOM
        tasksList.insertAdjacentHTML('beforeend',task)
        //funcion:
        refreshTasks();
        // FocusEvent.click() //quitar el focus del elemento
        tasksCounter.textContent = parseInt(tasksCounter.textContent) + 1 
        focusNewTask();
        //Limpiar newTask Label

        console.log(pendingTasks)
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