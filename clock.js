var runningTime;
var clockValueMin = document.getElementById("clockValueMin");
var clockValueSeg = document.getElementById("clockValueSeg");
var initialValueMin = clockValueMin.textContent
var initialValueSeg = clockValueSeg.textContent
var startButton = document.getElementById("startButton");
var stopButton = document.getElementById("stopButton")
var customizeButtonOpen = document.getElementById("customizeButtonOpen")
var customizeModal = document.getElementById("customizeModal")
var customizeOptionsList = customizeModal.getElementsByTagName("input")
var customizeButtonClose = document.getElementById("customizeButtonClose")

var workTime = document.getElementById("workTime")
var restTime = document.getElementById("restTime")

var initialValueMinRest = "05"
var initialValueSegRest = "00"
mostrarNotificacion();

function reproducirAlarma() {
    let alarma = new Audio("./alarma.mp3");
    alarma.play();
}

function mostrarNotificacion() {
    // Verificar si el navegador soporta la API de Notificaciones
    if (!("Notification" in window)) {
      alert("Este navegador no soporta notificaciones");
    } else if (Notification.permission === "granted") {
      // Si la permisión está concedida, mostrar la notificación
      var notificacion = new Notification("¡Gracias por permitir la notificación!");
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
        reproducirAlarma();
        mostrarNotificacion();

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
    clockValueMin.textContent = initialValueMin
    clockValueSeg.textContent = initialValueSeg

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
    if(restTime.classList.contains("pressed")){
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
                initialValueMin = "1";
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
    workTime.classList.toggle("pressed")
    restTime.classList.toggle("pressed")

    //Si se está ejecutando el clock
    if(startButton.classList.contains("hidden")){
        stop();
    }

    if(workTime.classList.contains("pressed")){

        clockValueMin.textContent = initialValueMin
        clockValueSeg.textContent = initialValueSeg

        //si está presionado trabajar
            //Habilitar el modo oscuro
    }

    if(restTime.classList.contains("pressed")){

        clockValueMin.textContent = initialValueMinRest
        clockValueSeg.textContent = initialValueSegRest

        //si está presionado descansar
            //Habilitar el modo claro
    }

};

workTime.addEventListener('click', switchTypeOfWork)
restTime.addEventListener('click', switchTypeOfWork)

