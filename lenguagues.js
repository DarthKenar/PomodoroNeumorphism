//modal
// let lenguageModal = document.getElementById('lenguageModal');
// let customizeModal = document.getElementById("customizeModal")

// //lenguage buttons (display modal)
// let lenguageButtonOpen = document.getElementById("lenguageButtonOpen")
let lenguageButtonClose = document.getElementById("lenguageButtonClose")

// //Type Time (work/rest)
// let workTime = document.getElementById("workTime")
// let restTime = document.getElementById("restTime")

// Clock start/stop buttons
// let startButton = document.getElementById("startButton")
// let stopButton = document.getElementById("stopButton")

// //lenguage buttons
// let esBtn = document.getElementById('esBtn')
// let enBtn = document.getElementById('enBtn')
// let brBtn = document.getElementById('brBtn')
// let jpBtn = document.getElementById('jpBtn')

//Boton guardar
newTaskButton = document.getElementById("newTaskButton")

//Footer texto (hecho por)
footerLabel = document.getElementById("footerLabel")
footerIcon = document.getElementById("footerIcon")
coffeeIcon = '<svg id="footerIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-coffee"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>'

// Textos para traducir

//Títulos de seleccion de lenguaje
let esLabel = document.getElementById('esLabel')
let enLabel = document.getElementById('enLabel')

//Títulos de pagina y cuerpo de html
let title1 = document.getElementById('title1')
let title2 = document.getElementById('title2')

//Opciones del temporizador (texto)
let clockOption1 = document.getElementById('clockOption1')
let clockOption2 = document.getElementById('clockOption2')
let clockOption3 = document.getElementById('clockOption3')
let clockOption4 = document.getElementById('clockOption4')

// Título de la seccion tareas (tasks)
let tasksLabel = document.getElementById("tasksLabel")

//Navbar textos
let customizeLabel = document.getElementById("customizeLabel")
let restartSessionLabel = document.getElementById("restartSessionLabel")
let lenguageLabel = document.getElementById("lenguageLabel")

//newTask texto de invitacion (escribe aqui...)
// let newTask = document.getElementById("newTask")

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
    console.log("Lenguage Modal Opened")
    lenguageModal.style.display = 'block';
}

function lenguageClose(){
    console.log("Lenguage Modal Closed")
    lenguageModal.style.display = 'none';
}

lenguageButtonOpen.addEventListener('click',lenguageOpen);
lenguageButtonClose.addEventListener('click',lenguageClose);

//Transformar esto en un objeto de tipo diccionario con clave valor en donde el valor de la clave se añade al newTask.textContent de cada lenguaje
let newTaskPlaceHolders = ["","Escribe aquí...","Write here...","Escreva aqui...","ここに書いてください..."]
// Spanish
function spanishLenguageSelected(){
    console.log("Switched to Spanish")

    title1.textContent = "Pomodoro Neumorfista"
    title2.textContent = title1.textContent

    workTime.textContent = "Trabajar"
    restTime.textContent = "Descansar"

    startButton.textContent = "Empezar"
    stopButton.textContent = "Parar"

    newTaskButton.textContent = "Guardar"

    footerLabel.textContent = "Hecho por"

    clockOption1.textContent = "Corto"
    clockOption2.textContent = "Popular"
    clockOption3.textContent = "Medio"
    clockOption4.textContent = "Extendido"

    tasksLabel.textContent = "Tareas"

    customizeLabel.textContent = "Personalizar"
    restartSessionLabel.textContent = "Reiniciar sesión"
    lenguageLabel.textContent = "Lenguaje"

    footerIcon.innerHTML = coffeeIcon

    if(newTaskPlaceHolders.includes(newTask.textContent)){
        newTask.textContent = "Escribe aquí..."
    }

    lenguageClose();
    //Agregar efecto que cuando hago click desaparece el texto contenido de cada objeto que se traduce y aparece el nuevo.
};

esBtn.addEventListener("click",spanishLenguageSelected);

// English
function englishLenguageSelected(){
    console.log("Switched to English")

    title1.textContent = "Pomodoro Neumorphism"
    title2.textContent = title1.textContent

    workTime.textContent = "Work"
    restTime.textContent = "Rest"

    startButton.textContent = "Start"
    stopButton.textContent = "Stop"

    newTaskButton.textContent = "Save"

    footerLabel.textContent = "Made by"

    clockOption1.textContent = "Baby step"
    clockOption2.textContent = "Popular"
    clockOption3.textContent = "Medium"
    clockOption4.textContent = "Extended"

    tasksLabel.textContent = "Tasks"

    customizeLabel.textContent = "Customize"
    restartSessionLabel.textContent = "Restart session"
    lenguageLabel.textContent = "Lenguage"

    footerIcon.innerHTML = coffeeIcon

    if(newTaskPlaceHolders.includes(newTask.textContent)){
        newTask.textContent = "Write here..."
    }

    lenguageClose();
};

enBtn.addEventListener("click",englishLenguageSelected);

// Portugués
function portuguesLenguageSelected(){
    console.log("Switched to Portugueis")

    title1.textContent = "Pomodoro Neumorfismo"
    title2.textContent = title1.textContent

    workTime.textContent = "Trabalhar"
    restTime.textContent = "Repouso"

    startButton.textContent = "Começar"
    stopButton.textContent = "Parar"

    newTaskButton.textContent = "Manter"

    footerLabel.textContent = "Feito por"

    clockOption1.textContent = "Passo de bebé"
    clockOption2.textContent = "popular"
    clockOption3.textContent = "médio"
    clockOption4.textContent = "Alargado"

    tasksLabel.textContent = "Tarefa"

    customizeLabel.textContent = "Personalização"
    restartSessionLabel.textContent = "Reiniciar sessão"
    lenguageLabel.textContent = "Linguagem"

    footerIcon.innerHTML = coffeeIcon

    if(newTaskPlaceHolders.includes(newTask.textContent)){
        newTask.textContent = "Escreva aqui..."
    }

    lenguageClose();
        
};

brBtn.addEventListener("click",portuguesLenguageSelected);

// Japonés
function japaneseLenguageSelected(){
    console.log("Switched to Japanese")

    title1.textContent = "ポモドーロニューモーフィズム"
    title2.textContent = title1.textContent

    workTime.textContent = "仕事"
    restTime.textContent = "休憩"

    startButton.textContent = "始める"
    stopButton.textContent = "停止"

    newTaskButton.textContent = "保つ"

    footerLabel.textContent = "作られた"

    clockOption1.textContent = "パソデベベ"
    clockOption2.textContent = "人気のある"
    clockOption3.textContent = "メディアーノ"
    clockOption4.textContent = "エクステンディド"

    tasksLabel.textContent = "風袋"

    customizeLabel.textContent = "カスタマイズ"
    restartSessionLabel.textContent = "セッションを再開する"
    lenguageLabel.textContent = "言語"
    footerIcon.innerHTML = '<svg id="footerIcon" fill="currentColor" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M327.102,273.972l25.935-25.935l11.851,11.851c3.272,3.272,7.562,4.909,11.85,4.909s8.578-1.636,11.85-4.909 c6.545-6.545,6.545-17.156,0-23.7l-11.851-11.851L507.091,93.982c6.545-6.545,6.545-17.156,0-23.7L459.69,22.881 c-6.544-6.545-17.156-6.545-23.7,0c-6.628,6.628-123.568,123.568-130.354,130.354l-11.851-11.851 c-6.544-6.545-17.156-6.545-23.7,0s-6.545,17.156,0,23.7l11.851,11.851l-25.935,25.935l-25.936-25.935l11.851-11.851 c6.545-6.546,6.545-17.157,0-23.702c-6.544-6.545-17.156-6.545-23.7,0l-11.851,11.851C199.579,146.449,82.639,29.509,76.011,22.88 c-6.544-6.545-17.156-6.545-23.7,0L4.909,70.282c-6.545,6.545-6.545,17.156,0,23.7l130.354,130.354l-11.851,11.851 c-6.545,6.545-6.545,17.156,0,23.7c6.544,6.545,17.156,6.546,23.7,0l11.851-11.851l25.936,25.936L4.909,453.961 c-7.908,7.907-5.982,21.2,3.809,26.554c16.34,8.937,34.263,13.513,52.575,13.513c28.21,0,56.36-10.606,77.995-32.241 l116.713-116.713l116.713,116.713c21.655,21.655,49.814,32.241,77.995,32.241c18.311,0,36.236-4.577,52.575-13.513 c9.81-5.364,11.701-18.662,3.809-26.554L327.102,273.972z M447.841,58.431l23.701,23.7l-23.701,23.7l-23.7-23.7L447.841,58.431z M400.44,105.833l23.7,23.7l-23.702,23.702l-23.7-23.7L400.44,105.833z M353.038,153.234l23.7,23.7l-23.7,23.7l-23.7-23.7 L353.038,153.234z M40.46,82.132l23.7-23.7l23.7,23.7l-23.7,23.7L40.46,82.132z M111.562,153.234l-23.702-23.702l23.7-23.7 l23.702,23.702L111.562,153.234z M158.963,200.635l-23.7-23.7l23.7-23.7l23.7,23.7L158.963,200.635z M182.665,224.335l23.7-23.7 l25.936,25.935L208.6,250.271L182.665,224.335z M115.586,438.086c-18.122,18.123-44.025,25.567-68.403,21.001l258.453-258.452 l23.701,23.7L115.586,438.086z M396.414,438.087L279.701,321.373l23.702-23.702l161.415,161.417 C440.439,463.657,414.537,456.208,396.414,438.087z"></path> </g> </g> </g></svg>'

    if(newTaskPlaceHolders.includes(newTask.textContent)){
        newTask.textContent = "ここに書いてください..."
    }
    
    lenguageClose();
    
};

jpBtn.addEventListener("click",japaneseLenguageSelected);

