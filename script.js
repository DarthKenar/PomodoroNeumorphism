
var runningTime;
var clockValueMin = document.getElementById("clockValueMin");
var clockValueSeg = document.getElementById("clockValueSeg");
var initialValueMin = clockValueMin.textContent
var initialValueSeg = clockValueSeg.textContent
var startButton = document.getElementById("startButton");
var stopButton = document.getElementById("stopButton")
var customizeButton = document.getElementById("customizeButton")
var customizeModal = document.getElementById("customizeModal")
var customizeOptionsList = customizeModal.getElementsByTagName("input")
var eventoClick = new Event('click');

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
        clockValueMin.textContent = initialValueMin
        clockValueSeg.textContent = initialValueSeg
        switchStartStopButton();
        //Ejecutar Notificacion y alarma cuanto todo llega a 0
        console.log("Stopped running time automatically");
        // audio = new Audio("https://drive.google.com/file/d/1xQ6D76vi0_1byf3nM5CV9xfbDxQM5Rdh/view")
        // audio2 = new Audio("https://www.mediafire.com/file/j5qcrwepzlizc7f/alarm-clock-short-6402.mp3")
        // audio.play();
        // audio2.play();
    }else if(parseInt(clockValueMin.textContent) > 1 && parseInt(clockValueSeg.textContent) < 1){
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

window.onclick = function(event) {
    var modal = document.getElementById('customizeModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

function selectOption(e){
    if(customizeOptionsList[e].checked){
        for(let i=0; i<customizeOptionsList.length; i++){
            if(i!=e){
                customizeOptionsList[i].checked = false
            };
        };
        switch(e) {
            case 0:
                initialValueMin = 10;
                initialValueSeg = 0;
                clockValueMin.textContent = initialValueMin
                clockValueSeg.textContent = initialValueSeg
                break;
            case 1:
                initialValueMin = 20;
                initialValueSeg = 0;
                clockValueMin.textContent = initialValueMin
                clockValueSeg.textContent = initialValueSeg
                break;
            case 2:
                initialValueMin = 40;
                initialValueSeg = 0;
                clockValueMin.textContent = initialValueMin
                clockValueSeg.textContent = initialValueSeg
                break;
            case 3:
                initialValueMin = 60;
                initialValueSeg = 60;
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
customizeButton.addEventListener('click', customizeOpen);

for(let i=0; i<customizeOptionsList.length; i++){
    customizeOptionsList[i].addEventListener("change", function() {
        selectOption(i);
    });
    if(i == 1){
        customizeOptionsList[i].defaultChecked = true
    }
}