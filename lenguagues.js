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
var brBtn = document.getElementById('brBtn')
var jpBtn = document.getElementById('jpBtn')

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

var newTaskPlaceHolders = ["","Escribe aquí...","Write here...","Escribao Aquio...",""]
// Spanish
function spanishLenguageSelected(){
    console.log("Switched to Spanish")

    esLabel.textContent = "Español"
    enLabel.textContent = "Inglés"
    brLabel.textContent = "Portugués"
    jpLabel.textContent = "Japonés"

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
    brLabel.textContent = "Portugués"
    jpLabel.textContent = "Japonés"

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

// Portugués
function portuguesLenguageSelected(){
    console.log("Switched to Portugueis")

    esLabel.textContent = "Españolo"
    enLabel.textContent = "Englisholo"
    brLabel.textContent = "Portuguese"
    jpLabel.textContent = "Japanese"

    title1.textContent = "Pomodoro Neumorphiq"
    title2.textContent = title1.textContent

    startButton.textContent = "Empezao"
    stopButton.textContent = "Stopao"

    clockOption1.textContent = "Chilino pasao"
    clockOption2.textContent = "Populeo"
    clockOption3.textContent = "Medioeo"
    clockOption4.textContent = "Extendeo"

    tasksLabel.textContent = "Tarqao"

    customizeLabel.textContent = "Custimizao"
    restartSessionLabel.textContent = "Comezao nuevo"
    lenguageLabel.textContent = "Lenguao"

    if(newTaskPlaceHolders.includes(newTask.textContent)){
        newTask.textContent = "Escribao Aquio..."
    }
        
};

brBtn.addEventListener("click",portuguesLenguageSelected);

// Japonés
function japaneseLenguageSelected(){
    console.log("Switched to Portugueis")

    esLabel.textContent = "[[[[%%]]]]"
    enLabel.textContent = "==¨¨*"
    brLabel.textContent = "!2&/"
    jpLabel.textContent = "//%%$"

    title1.textContent = "Pomodoro Neumorphiq"
    title2.textContent = title1.textContent

    startButton.textContent = "Empezao"
    stopButton.textContent = "Stopao"

    clockOption1.textContent = "Chilino pasao"
    clockOption2.textContent = "Populeo"
    clockOption3.textContent = "Medioeo"
    clockOption4.textContent = "Extendeo"

    tasksLabel.textContent = "Tarqao"

    customizeLabel.textContent = "Custimizao"
    restartSessionLabel.textContent = "Comezao nuevo"
    lenguageLabel.textContent = "Lenguao"

    if(newTaskPlaceHolders.includes(newTask.textContent)){
        newTask.textContent = "Escribao Aquio..."
    }
        
};

jpBtn.addEventListener("click",japaneseLenguageSelected);

