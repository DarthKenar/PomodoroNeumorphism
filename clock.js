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

var customizeButtonOpen = document.getElementById("customizeButtonOpen")
var restartSessionButton = document.getElementById("restartSessionButton")
var lenguageButtonOpen = document.getElementById("lenguageButtonOpen")

var taskTitle = document.getElementById("taskTitle")
var tasks = document.getElementById("tasks")
var taskContainer = document.getElementById("taskContainer")

var lenguageModalContent = document.getElementById("lenguageModalContent")
var customizeModalContent = document.getElementById("customizeModalContent")

var title = document.getElementById("title2")
var customizeModal = document.getElementById("lenguageModal")

var workTime = document.getElementById("workTime")
var restTime = document.getElementById("restTime")

var initialValueMinRest = "05"
var initialValueSegRest = "00"

var body = document.getElementById("body")
var clock = document.getElementById("clock")

showNotification();

function playAlarm() {
    let alarm = new Audio("./alarma.mp3");
    alarm.play();
}

function restStylesToggle(){
    
    body.classList.toggle("work-color-background")
    body.classList.toggle("rest-color-background")
    body.classList.toggle("work-color-text")
    body.classList.toggle("rest-color-text")

    customizeModal.classList.toggle("work-color-text")
    customizeModal.classList.toggle("rest-color-text")

    lenguageModal.classList.toggle("work-color-text")
    lenguageModal.classList.toggle("rest-color-text")

    customizeModalContent.classList.toggle("work-color-marco")
    customizeModalContent.classList.toggle("rest-color-marco")

    lenguageModalContent.classList.toggle("work-color-marco")
    lenguageModalContent.classList.toggle("rest-color-marco")

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

    restTime.classList.toggle("work-button")
    restTime.classList.toggle("rest-button")

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

    //Task buttons
    for (let i = 0; i < pendingTasks.length; i++){

        //Obtengo todos los botones de la tarea con id "i"
        upTaskButton = document.getElementById(`upTaskButton-${i}`)
        downTaskButton = document.getElementById(`upTaskButton-${i}`)
        editTaskButton = document.getElementById(`upTaskButton-${i}`)
        upTaskButton = document.getElementById(`upTaskButton-${i}`)

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
}

function customizeClose(){
    document.getElementById('customizeModal').style.display = 'none';
}

function selectOption(e){
    if(restTime.classList.contains("rest-pressed")){
        switchTypeOfWork();
        //Si esta en modo descanso poner los valores en el reloj correspondientes al descnaso
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


startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
customizeButtonOpen.addEventListener('click', customizeOpen);
customizeButtonClose.addEventListener('click', customizeClose);



for(let i=0; i<customizeOptionsList.length; i++){
    customizeOptionsList[i].addEventListener("change", function() {
        selectOption(i);
    });
    if(i == 1){
        customizeOptionsList[i].defaultChecked = true
    }
}

function switchTypeOfWork(){
    restStylesToggle();
    workTime.classList.toggle("work-pressed")
    restTime.classList.toggle("rest-pressed")
    //Si se está ejecutando el clock
    if(startButton.classList.contains("hidden")){
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

workTime.addEventListener('click', switchTypeOfWork)
restTime.addEventListener('click', switchTypeOfWork)

