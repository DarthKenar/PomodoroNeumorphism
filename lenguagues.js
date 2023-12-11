//modal
var lenguageModal = document.getElementById('lenguageModal');
var customizeModal = document.getElementById("customizeModal")

//lenguage buttons (display modal)
var lenguageButtonOpen = document.getElementById("lenguageButtonOpen")
var lenguageButtonClose = document.getElementById("lenguageButtonClose")

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

lenguageButtonOpen.addEventListener('click',lenguageOpen)
lenguageButtonClose.addEventListener('click',lenguageClose)

// Spanish
function spanishLenguageSelected(){
    console.log("Switched to Spanish")
};
// English
function englishLenguageSelected(){
    console.log("Switched to English")
};