//modal
var lenguageModal = document.getElementById('lenguageModal');

//lenguage buttons (display modal)
var lenguageButtonOpen = document.getElementById("lenguageButtonOpen")
var lenguageButtonClose = document.getElementById("lenguageButtonClose")

//lenguage buttons
var esBtn = document.getElementById('esBtn')
var enBtn = document.getElementById('enBtn')

//lenguage labels
var esLabel = document.getElementById('esLabel')
var enLabel = document.getElementById('enLabel')

//titles
var title1 = document.getElementById('title1')
var title2 = document.getElementById('title2')

//options 
var option1 = document.getElementById('option1')
var option2 = document.getElementById('option2')
var option3 = document.getElementById('option3')
var option4 = document.getElementById('option4')



window.onclick = function(event) {
    if (event.target == lenguageModal) {
        lenguageModal.style.display = 'none';
    }
}

function lenguageOpen(){
    lenguageModal.style.display = 'block';
}

function lenguageClose(){
    lenguageModal.style.display = 'none';
}

lenguageButtonOpen.addEventListener('click',lenguageOpen)
lenguageButtonClose.addEventListener('click',lenguageClose)