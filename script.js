function start(){

    var runningTime = setInterval(()=>clockValue.textContent-=1,1000)
    //sitch por boton parar
    //parar tiempo 
    //llamar alarma
    //notificacion
    //etc

}
function checkClock(clockValue){
    if(clockValue < 1){
        clearInterval(runningTime)
    };
};
var clockValue = document.getElementById("clockValue")
clockValue.addEventListener('change', checkClock(clockValue))