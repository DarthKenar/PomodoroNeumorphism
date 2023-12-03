var initialValue = 60;
var runningTime;
var clockValue = document.getElementById("clockValue");
var startButton = document.getElementById("startButton");
var stopButton = document.getElementById("stopButton")
function switchStartStopButton() {
    startButton.classList.toggle("hidden");
    stopButton.classList.toggle("hidden");
}

function start() {
    if (clockValue.textContent > 0) {
        runningTime = setInterval(() => {
            clockValue.textContent -= 1;
            checkClock();
        }, 1000);
        console.log("Started Running time");
        switchStartStopButton();
    }
}

function checkClock() {
    if (clockValue.textContent < 1) {
        clearInterval(runningTime);
        clockValue.textContent = initialValue
        switchStartStopButton();
        console.log("Stopped running time automatically");
    }
}

function stop() {
    clearInterval(runningTime);
    clockValue.textContent = initialValue
    switchStartStopButton();
    console.log("Stopped running time forced by user");
}
startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);