//modal
var lenguageModal = document.getElementById('lenguageModal');
var customizeModal = document.getElementById("customizeModal")

//lenguage buttons (display modal)
var lenguageButtonOpen = document.getElementById("lenguageButtonOpen")
var lenguageButtonClose = document.getElementById("lenguageButtonClose")

// Clock start/stop buttons

var startButton = document.getElementById("startButton")
var stopButton = document.getElementById("stopButton")

//lenguage buttons
var esBtn = document.getElementById('esBtn')
var enBtn = document.getElementById('enBtn')

// Textos para traducir

//Títulos de seleccion de lenguaje
var esLabel = document.getElementById('esLabel')
var enLabel = document.getElementById('enLabel')

//Títulos de pagina y cuerpo de html
var title1 = document.getElementById('title1')
var title2 = document.getElementById('title2')

//Opciones del temporizador (texto)
var clockOption1 = document.getElementById('clockOption1')
var clockOption2 = document.getElementById('clockOption2')
var clockOption3 = document.getElementById('clockOption3')
var clockOption4 = document.getElementById('clockOption4')

// Título de la seccion tareas (tasks)
var tasksLabel = document.getElementById("tasksLabel")

//Navbar textos
var customizeLabel = document.getElementById("customizeLabel")
var restartSessionLabel = document.getElementById("restartSessionLabel")
var lenguageLabel = document.getElementById("lenguageLabel")

//newTask texto de invitacion (escribe aqui...)

var newTask = document.getElementById("newTask")

//for close any modals
window.onclick = function(event) {
    if (event.target == lenguageModal) {
        lenguageModal.style.display = 'none';
    }
    if (event.target == customizeModal) {
        customizeModal.style.display = 'none';
    }
}

function lenguageOpen(){
    console.log("Modal Opened")
    lenguageModal.style.display = 'block';
}

function lenguageClose(){
    console.log("Modal Opened")
    lenguageModal.style.display = 'none';
}

lenguageButtonOpen.addEventListener('click',lenguageOpen);
lenguageButtonClose.addEventListener('click',lenguageClose);

var newTaskPlaceHolders = ["","Escribe aquí...","Write here..."]
// Spanish
function spanishLenguageSelected(){
    console.log("Switched to Spanish")

    esLabel.textContent = "Español"
    enLabel.textContent = "Inglés"

    title1.textContent = "Pomodoro Neumorfista"
    title2.textContent = title1.textContent

    startButton.textContent = "Empezar"
    stopButton.textContent = "Parar"

    clockOption1.textContent = "Paso de bebé"
    clockOption2.textContent = "Popular"
    clockOption3.textContent = "Medio"
    clockOption4.textContent = "Extendido"

    tasksLabel.textContent = "Tareas"

    customizeLabel.textContent = "Personalizar"
    restartSessionLabel.textContent = "Reiniciar sesión"
    lenguageLabel.textContent = "Lenguaje"

    if(newTaskPlaceHolders.includes(newTask.textContent)){
        newTask.textContent = "Escribe aquí..."
    }
};

esBtn.addEventListener("click",spanishLenguageSelected);

// English
function englishLenguageSelected(){
    console.log("Switched to English")

    esLabel.textContent = "Spanish"
    enLabel.textContent = "English"

    title1.textContent = "Pomodoro Neumorphism"
    title2.textContent = title1.textContent

    startButton.textContent = "Start"
    stopButton.textContent = "Stop"

    clockOption1.textContent = "Baby step"
    clockOption2.textContent = "Popular"
    clockOption3.textContent = "Medium"
    clockOption4.textContent = "Extended"

    tasksLabel.textContent = "Tasks"

    customizeLabel.textContent = "Customize"
    restartSessionLabel.textContent = "Restart session"
    lenguageLabel.textContent = "Lenguage"

    if(newTaskPlaceHolders.includes(newTask.textContent)){
        newTask.textContent = "Write here..."
    }
        
};

enBtn.addEventListener("click",englishLenguageSelected);