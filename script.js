//TASKS VARIABLES
var newTask = document.getElementById("newTask")
var newTaskButton = document.getElementById("newTaskButton")

var tasks = document.getElementById("tasks")
var tasksList = tasks.getElementsByTagName("li")

var tasksCounter = document.getElementById("tasksCounter")

//lenguages
var esBtn = document.getElementById('esBtn')
var enBtn = document.getElementById('enBtn')
var brBtn = document.getElementById('brBtn')
var jpBtn = document.getElementById('jpBtn')

//clock options
var clockOption1Button = document.getElementById('clockOption1Button')
var clockOption2Button = document.getElementById('clockOption2Button')
var clockOption3Button = document.getElementById('clockOption3Button')
var clockOption4Button = document.getElementById('clockOption4Button')

var clockOption1Indicator = document.getElementById('clockOption1Indicator')
var clockOption2Indicator = document.getElementById('clockOption2Indicator')
var clockOption3Indicator = document.getElementById('clockOption3Indicator')
var clockOption4Indicator = document.getElementById('clockOption4Indicator')

if(localStorage.getItem("tasksCounter") !== null){
    tasksCounter.textContent = parseInt(localStorage.getItem("tasksCounter"))
}else{
    tasksCounter.textContent = 0
}

if (localStorage.getItem("tasksEnumerator") != null){
    var tasksEnumerator = parseInt(localStorage.getItem("tasksEnumerator"))
}else{
    var tasksEnumerator = 0
}

if (localStorage.getItem("tasksListObject") != null){
    console.log("La lista de tareas es diferente de Null")
    var tasksListObject = JSON.parse(localStorage.getItem("tasksListObject"))
    console.log(tasksListObject)
}else{
    console.log("La lista de tareas es Null")
    var tasksListObject = {
        id: [],
        task: []
    }
}

var info = document.getElementById("info")

//CLOCK VARIABLES:
var runningTime;
var clockValueMin = document.getElementById("clockValueMin");
var clockValueSeg = document.getElementById("clockValueSeg");
var initialValueMin = clockValueMin.textContent
var initialValueSeg = clockValueSeg.textContent
var startButton = document.getElementById("startButton");
var stopButton = document.getElementById("stopButton")
var customizeModal = document.getElementById("customizeModal")
var customizeOptionsList = customizeModal.getElementsByTagName("input")
var customizeButtonClose = document.getElementById("customizeButtonClose")
var footer = document.getElementsByTagName("footer")[0]
var customizeButtonOpen = document.getElementById("customizeButtonOpen")
var restartSessionButton = document.getElementById("restartSessionButton")
var lenguageButtonOpen = document.getElementById("lenguageButtonOpen")
var taskTitle = document.getElementById("taskTitle")
var taskContainer = document.getElementById("taskContainer")
var lenguageModalContent = document.getElementById("lenguageModalContent")
var customizeModalContent = document.getElementById("customizeModalContent")
var restartSessionModal = document.getElementById("restartSessionModal")
var restartSessionModalContent = document.getElementById("restartSessionModalContent")
var title = document.getElementById("title2")
var customizeModal = document.getElementById("lenguageModal")
var workTime = document.getElementById("workTime")
var restTime = document.getElementById("restTime")
var initialValueMinRest = "05"
var initialValueSegRest = "00"
var body = document.getElementById("body")
var clock = document.getElementById("clock")
var restartSessionButtonYes = document.getElementById("restartSessionButtonYes")
var restartSessionButtonNo = document.getElementById("restartSessionButtonNo")

function tasksListObjectAdd(id, tarea) {
    tasksListObject.id.push(id);
    tasksListObject.task.push(tarea);
    console.log(`Se ha creado una nueva tarea con id ${id}`)
}

function tasksListObjectRemove(id) {
    indexID = tasksListObject.id.indexOf(id)
    delete(tasksListObject.id[indexID])
    delete(tasksListObject.task[indexID])
    refreshTasks();
    updateLocalStorage();
    console.log(`Se ha eliminado el elemento ${id}`)
    console.log(JSON.parse(localStorage.getItem("tasksListObject")))
}

// Ejemplo de uso de la función
//agregarElemento(1, "Completar tarea 1");
//agregarElemento(2, "Completar tarea 2");

//CLOCK FUNCTIONS

//Cuando el usuario entra a la web se leen las variables locales y se pintan en pantalla todas (instantaneamente)
//Cada vez que se guarda, modifica o elimina una variable esta se actualiza en el localStorage justo despues
//
function updateLocalStorage(){
    refreshTasks()
    localStorage.setItem("tasksEnumerator", tasksEnumerator)
    localStorage.setItem("tasksListObject", JSON.stringify(tasksListObject))
    localStorage.setItem("tasksCounter", tasksCounter.textContent)
}

function initialPaint(){ 
    console.log("initialPaint")
    for(let i = 0; i < tasksListObject.id.length; i++) {
        taskPaint(tasksListObject.id[i],tasksListObject.task[i])
    }
}

function playAlarm() {
    let alarm = new Audio("./alarma.mp3");
    alarm.play();
}

function restStylesToggle(){
    
    //funcion:
    refreshTasks();

    console.log("tasksListObject.task.length")
    console.log(tasksListObject.task.length)
    
    body.classList.toggle("work-color-background")
    body.classList.toggle("rest-color-background")
    body.classList.toggle("work-color-text")
    body.classList.toggle("rest-color-text")

    customizeModal.classList.toggle("work-color-text")
    customizeModal.classList.toggle("rest-color-text")

    restartSessionModal.classList.toggle("work-color-text")
    restartSessionModal.classList.toggle("rest-color-text")
    
    lenguageModal.classList.toggle("work-color-text")
    lenguageModal.classList.toggle("rest-color-text")

    customizeModalContent.classList.toggle("work-color-marco")
    customizeModalContent.classList.toggle("rest-color-marco")
    customizeModalContent.classList.toggle("work-color-background")
    customizeModalContent.classList.toggle("rest-color-background")

    lenguageModalContent.classList.toggle("work-color-marco")
    lenguageModalContent.classList.toggle("rest-color-marco")
    lenguageModalContent.classList.toggle("work-color-background")
    lenguageModalContent.classList.toggle("rest-color-background")

    restartSessionModalContent.classList.toggle("work-color-marco")
    restartSessionModalContent.classList.toggle("rest-color-marco")
    restartSessionModalContent.classList.toggle("work-color-background")
    restartSessionModalContent.classList.toggle("rest-color-background")

    taskTitle.classList.toggle("work-color-marco")
    taskTitle.classList.toggle("rest-color-marco")
    
    tasks.classList.toggle("work-color-marco")
    tasks.classList.toggle("rest-color-marco")

    taskContainer.classList.toggle("work-task")
    taskContainer.classList.toggle("rest-task")

    clock.classList.toggle("work-color-marco")
    clock.classList.toggle("rest-color-marco")
    
    title.classList.toggle("work-color-marco")
    title.classList.toggle("rest-color-marco")
    
    //buttons

    workTime.classList.toggle("work-button")
    workTime.classList.toggle("rest-button")
    workTime.classList.toggle("work-pressed")

    restTime.classList.toggle("work-button")
    restTime.classList.toggle("rest-button")
    restTime.classList.toggle("rest-pressed")

    //header buttons
    customizeButtonOpen.classList.toggle("work-button")
    customizeButtonOpen.classList.toggle("rest-button")

    restartSessionButton.classList.toggle("work-button")
    restartSessionButton.classList.toggle("rest-button")

    lenguageButtonOpen.classList.toggle("work-button")
    lenguageButtonOpen.classList.toggle("rest-button")

    startButton.classList.toggle("work-button")
    startButton.classList.toggle("rest-button")
    stopButton.classList.toggle("work-button")
    stopButton.classList.toggle("rest-button")

    //lenguage buttons
    esBtn.classList.toggle("work-button")
    esBtn.classList.toggle("rest-button")
    enBtn.classList.toggle("work-button")
    enBtn.classList.toggle("rest-button")
    brBtn.classList.toggle("work-button")
    brBtn.classList.toggle("rest-button")
    jpBtn.classList.toggle("work-button")
    jpBtn.classList.toggle("rest-button")

    clockOption1Button.classList.toggle("work-toggle")
    clockOption1Button.classList.toggle("rest-toggle")
    clockOption2Button.classList.toggle("work-toggle")
    clockOption2Button.classList.toggle("rest-toggle")
    clockOption3Button.classList.toggle("work-toggle")
    clockOption3Button.classList.toggle("rest-toggle")
    clockOption4Button.classList.toggle("work-toggle")
    clockOption4Button.classList.toggle("rest-toggle")

    clockOption1Indicator.classList.toggle("work-indicator")
    clockOption1Indicator.classList.toggle("rest-indicator")
    clockOption2Indicator.classList.toggle("work-indicator")
    clockOption2Indicator.classList.toggle("rest-indicator")
    clockOption3Indicator.classList.toggle("work-indicator")
    clockOption3Indicator.classList.toggle("rest-indicator")
    clockOption4Indicator.classList.toggle("work-indicator")
    clockOption4Indicator.classList.toggle("rest-indicator")


    restartSessionButtonYes.classList.toggle("rest-button")
    restartSessionButtonYes.classList.toggle("work-button")
    restartSessionButtonNo.classList.toggle("rest-button")
    restartSessionButtonNo.classList.toggle("work-button")

    footer.classList.toggle("work-footer")
    footer.classList.toggle("rest-footer")

    //Task buttons
    for (let i = 0; i < tasksListObject.id.length; i++){
        taskID = tasksListObject.id[i]
        console.log("taskID", taskID)
        console.log("revisando estilos en los botones de la tarea")

        //Obtengo todos los botones de la tarea con id "i"
        upTaskButton = document.getElementById(`upTaskButton-${taskID}`)
        downTaskButton = document.getElementById(`downTaskButton-${taskID}`)
        editTaskButton = document.getElementById(`editTaskButton-${taskID}`)
        deleteTaskButton = document.getElementById(`deleteTaskButton-${taskID}`)

        //Cambio sus estilos
        upTaskButton.classList.toggle("work-button")
        upTaskButton.classList.toggle("rest-button")
        downTaskButton.classList.toggle("work-button")
        downTaskButton.classList.toggle("rest-button")
        editTaskButton.classList.toggle("work-button")
        editTaskButton.classList.toggle("rest-button")
        deleteTaskButton.classList.toggle("work-button")
        deleteTaskButton.classList.toggle("rest-button")
    }
}

function showNotification() {
    // Verificar si el navegador soporta la API de Notificaciones
    if (!("Notification" in window)) {
      alert("Este navegador no soporta notificaciones");
    } else if (Notification.permission === "granted") {
      // Si la permisión está concedida, mostrar la notificación
      var notificacion = new Notification("¡Es hora de relajarse!");
    } else if (Notification.permission !== "denied") {
      // Si no se ha solicitado permisión, solicitarla
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          var notificacion = new Notification("¡Permiso concedido!");
        }
      });
    }
  }
  
function switchStartStopButton() {
    console.log("Switching buttons start/stop")
    startButton.classList.toggle("hidden");
    stopButton.classList.toggle("hidden");
}

function start() {
    if (parseInt(clockValueMin.textContent) > 0) {
        runningTime = setInterval(() => {
            checkClock();
        }, 1000);
        console.log("Started Running time");
        switchStartStopButton();
    }
}

function checkClock() {
    // checkClock se ejecuta a cada segundo
    if (parseInt(clockValueMin.textContent) < 1 && parseInt(clockValueSeg.textContent) < 1) {
        clearInterval(runningTime);
        clockValueMin.textContent = clockValueMin.textContent
        clockValueSeg.textContent = initialValueSeg
        switchStartStopButton();
        //Ejecutar Notificacion y alarma cuanto todo llega a 0
        console.log("Stopped running time automatically");

        //Cambia a modo rest o work dependiendo del modo anterior
        switchTypeOfWork();
        playAlarm();
        showNotification();
        // audio = new Audio("https://drive.google.com/file/d/1xQ6D76vi0_1byf3nM5CV9xfbDxQM5Rdh/view")
        // audio2 = new Audio("https://www.mediafire.com/file/j5qcrwepzlizc7f/alarm-clock-short-6402.mp3")
        // audio.play();
        // audio2.play();
    }else if(parseInt(clockValueMin.textContent) > 0 && parseInt(clockValueSeg.textContent) < 1){
        clockValueMin.textContent -= 1
        if(clockValueMin.textContent.length == 1){
            clockValueMin.textContent = "0"+clockValueMin.textContent
        };
        clockValueSeg.textContent = 59
    }else{
        clockValueSeg.textContent -= 1;
        if(clockValueSeg.textContent.length == 1){
            clockValueSeg.textContent = "0"+clockValueSeg.textContent
        };
    };
}

function stop() {
    clearInterval(runningTime);

    //Esto hace que se reinicie el reloj cuando se presiona stop
    if(startButton.classList.contains("work-button")){
        clockValueMin.textContent = initialValueMin;
        clockValueSeg.textContent = initialValueSeg;
    }else{
        clockValueMin.textContent = initialValueMinRest
        clockValueSeg.textContent = initialValueSegRest
    }

    switchStartStopButton();
    
    console.log("Stopped running time forced by user");
}

function customizeOpen(){
    document.getElementById('customizeModal').style.display = 'block';
    console.log("Settings Modal Opened")
}

function customizeClose(){
    document.getElementById('customizeModal').style.display = 'none';
    console.log("Settings Modal Closed")
}

function restartSessionOpen(){
    document.getElementById('restartSessionModal').style.display = 'block';
    console.log("Session Modal Opened")
}

function restartSessionClose(){
    document.getElementById('restartSessionModal').style.display = 'none';
    console.log("Session Modal Closed")
}

//Cuando selecciona una opcion (modo de pomodoro clock)
function selectOption(e){
    console.log("Option Selected")
    if(restTime.classList.contains("rest-pressed")){
        //Si esta en modo descanso poner los valores en el reloj correspondientes al descnaso
        switchTypeOfWork();
    }
    if(customizeOptionsList[e].checked){
        for(let i=0; i<customizeOptionsList.length; i++){
            if(i!=e){
                customizeOptionsList[i].checked = false
            };
        };
        switch(e) {
            case 0:
                initialValueMin = "10";
                initialValueSeg = "00";
                initialValueMinRest = "02"
                initialValueSegRest = "00"
                clockValueMin.textContent = initialValueMin
                clockValueSeg.textContent = initialValueSeg
                break;
            case 1:
                initialValueMin = "20";
                initialValueSeg = "00";
                initialValueMinRest = "05"
                initialValueSegRest = "00"
                clockValueMin.textContent = initialValueMin
                clockValueSeg.textContent = initialValueSeg
                break;
            case 2:
                initialValueMin = "40";
                initialValueSeg = "00";
                initialValueMinRest = "08"
                initialValueSegRest = "00"
                clockValueMin.textContent = initialValueMin
                clockValueSeg.textContent = initialValueSeg
                break;
            case 3:
                initialValueMin = "60";
                initialValueSeg = "00";
                initialValueMinRest = "10"
                initialValueSegRest = "00"
                clockValueMin.textContent = initialValueMin
                clockValueSeg.textContent = initialValueSeg
                break;
            default:
                console.log("el switch no coincide con ningun valor")
        }
    }else{
        setTimeout(function(){
            customizeOptionsList[e].checked = true
        },300)
    }
    if(!stopButton.classList.contains("hidden")){
        stop()
    }
}

function switchTypeOfWork(){
    restStylesToggle();
    //Si se está ejecutando el clock
    if(startButton.classList.contains("hidden")){
        console.log("Deteniendo temporizador (forzado por cambio de tipo de trabajo)")
        stop();
    }

    if(workTime.classList.contains("work-pressed")){

        clockValueMin.textContent = initialValueMin
        clockValueSeg.textContent = initialValueSeg
        //si está presionado trabajar
            //Habilitar el modo oscuro
    }

    if(restTime.classList.contains("rest-pressed")){

        clockValueMin.textContent = initialValueMinRest
        clockValueSeg.textContent = initialValueSegRest
        //si está presionado descansar
            //Habilitar el modo claro
    }

};

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

function refreshTasks(){
    console.log("refreshTasks()")
    //limpia las tareas eliminadas de la lista (undefined)
    tasksListObject.id = tasksListObject.id.filter((text) => text != undefined);
    tasksListObject.task = tasksListObject.task.filter((text) => text != undefined);
    console.log(tasksListObject.task)
    console.log(tasksListObject.task[0])
    //redibuja las tareas de la lista de tareas en el DOM
    
    //Actualizar DOM
        //Mostrar Tareas Pendientes
        //Mostrar Tareas Completadas
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
    let elementToRemove = document.getElementById(`pendingTask-${id}`);
    applyReduceTransition(elementToRemove,"%");
    setTimeout(()=>(elementToRemove.remove()),500);
    tasksCounter.textContent = tasksCounter.textContent - 1
    //eliminacion literal de la tarea
    tasksListObjectRemove(id)
    console.log("Tarea eliminada correctamente")
    console.log("tasksListObject.task", tasksListObject.task)
}

function editTask(id) {
    newTask.innerHTML = document.getElementById(`pendingTask-${id}`).querySelector("label").innerHTML;
    deleteTask(id);
    focusInTextAtTheEnd(newTask);
}
function taskPaint(tasksEnumerator,textTask){
    //verificamos el estado en eltasksEnumerator que está el usuario, si work o rest para aplicar los estilos correctos al insertar los elementos en pantalla
    if(startButton.classList.contains("work-button")){
        buttonStyle = "work-button"
    }else{
        buttonStyle = "rest-button"
    }
    //Agregamos a la variable tarea el contenido que iría en el DOM
    task = `<li id="pendingTask-${tasksEnumerator}">
                <div>
                    <button id="upTaskButton-${tasksEnumerator}" class="switch ${buttonStyle}" onclick="upTask(${tasksEnumerator})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
                    </button>
                    <button id="downTaskButton-${tasksEnumerator}" class="switch ${buttonStyle}" onclick="downTask(${tasksEnumerator})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                </div>
                <label>${textTask}</label>
                <div>
                    <button id="editTaskButton-${tasksEnumerator}" class="switch ${buttonStyle}" onclick="editTask(${tasksEnumerator})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                    </button>
                    <button id="deleteTaskButton-${tasksEnumerator}" class="switch ${buttonStyle}" onclick="deleteTask(${tasksEnumerator})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                    </button>
                </div>
            </li>`
    //inserta la tarea para que sea visible en el DOM
    tasks.insertAdjacentHTML('beforeend',task)
}

function saveTask(){
    console.log("saveTask()")

    if(newTaskPlaceHolders.includes(newTask.textContent)){
        blinkingAlert();
    }else{
        
        //funcion que tendrá que:
        //Guardar la tarea en la lista tareas pendientes (pushear tarea)
        tasksListObjectAdd(tasksEnumerator,newTask.innerHTML)
        taskPaint(tasksEnumerator,newTask.innerHTML)
        //Aumentamos el valor del contador para tener un valor utilizable (para editar las tareas)
        tasksEnumerator += 1;

        console.log(localStorage.getItem("tasksListObject"))
        // FocusEvent.click() //quitar el focus del elemento
        tasksCounter.textContent = parseInt(tasksCounter.textContent) + 1
        focusNewTask();
        //Limpiar newTask Label

        console.log("La tarea se guardó correctamente")
        console.log("Mostrando variable tasksListObject.task 'lista de tareas'")
        console.log(tasksListObject.task)
        //Actualizamos los datos del usuario
        updateLocalStorage();
    };
};

function restartSession(){
    localStorage.removeItem("tasksEnumerator")
    localStorage.removeItem("tasksListObject")
    localStorage.removeItem("tasksCounter")
    window.location.reload()
}

function infoClose(){
    document.getElementById('info').style.display = 'none';
}

function upTask(id){
    console.log("upTask()")
    //primero busco el indice
    indexID = tasksListObject.id.indexOf(id)
    console.log("indexID", indexID)
    if(indexID > 0){
        //movemos el indice en la lista de objetos
        [tasksListObject.id[indexID - 1], tasksListObject.id[indexID]] = [tasksListObject.id[indexID], tasksListObject.id[indexID - 1]];
        console.log("IDs", tasksListObject.id)
        //Actualizamos el local storage
        updateLocalStorage()
        //Intercambiamos los elementos en el DOM
        tasks.insertBefore(tasksList[indexID + 1], tasksList[indexID - 1 + 1]);
        console.log("Se intercambiaron correctamente")
        console.log("switchTask")
        taskAnimation(indexID,"switchTaskFromAbove")
        taskAnimation(indexID-1,"switchTaskFromBelow")
    }else{
        //Agrego animacion para cuando el indice esta al principio
        console.log("animacion")
        taskAnimation(indexID,"cantdown")
    }
}
function downTask(id){
    console.log("downTask()")
    //primero busco el indice
    indexID = tasksListObject.id.indexOf(id)
    console.log("indexID", indexID)
    console.log("tasksListObject.id.length",tasksListObject.id.length)
    if(indexID < tasksListObject.id.length-1){
        //movemos el indice en la lista de objetos
        [tasksListObject.id[indexID], tasksListObject.id[indexID + 1] ] = [tasksListObject.id[indexID + 1], tasksListObject.id[indexID]];
        console.log("IDs", tasksListObject.id)
        //Actualizamos el local storage
        updateLocalStorage()

        //Intercambiamos los elementos en el DOM
        tasks.insertBefore(tasksList[indexID + 1 + 1], tasksList[indexID + 1]);
        console.log("Se intercambiaron correctamente")
        
        console.log("switchTask")

        taskAnimation(indexID,"switchTaskFromBelow")
        taskAnimation(indexID+1,"switchTaskFromAbove")

        //anulamos el botón: los botones de posicionamiento
        //tasksList[indexID + 1].children.remo
        //id="upTaskButton-${tasksEnumerator}"

    }else{
        //Agrego animacion para cuando el indice esta al principio
        console.log("animacion")
        taskAnimation(indexID,"cantdown")
    }
}
function taskAnimation(indexID, animation){
    tasksList[indexID+1].classList.add(`${animation}`);
    setTimeout(() => {
        tasksList[indexID+1].classList.remove(`${animation}`);
    }, 500);
}
initialPaint();

//LISTENERS

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

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
customizeButtonOpen.addEventListener('click', customizeOpen);
customizeButtonClose.addEventListener('click', customizeClose);
workTime.addEventListener('click', switchTypeOfWork)
restTime.addEventListener('click', switchTypeOfWork)
newTaskButton.addEventListener("click", saveTask);
for(let i=0; i<customizeOptionsList.length; i++){
    customizeOptionsList[i].addEventListener("change", function() {
        selectOption(i);
    });
    if(i == 1){
        customizeOptionsList[i].defaultChecked = true
    }
}

showNotification();