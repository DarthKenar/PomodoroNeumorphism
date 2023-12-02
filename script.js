function start(){

    var runningTime = setInterval(()=>clockValue.textContent-=1,1000)

    //ocultar botón
    //mostrar boton parar
    
    //comenzar el tiempo
    
    let clockValue = document.getElementById("clockValue")
    console.log(clockValue.textContent)
    if (clockValue.textContent > 0){
        var runningTime = setInterval(()=>clockValue.textContent-=1,1000)
        if(clockValue.textContent < 1){
            //llamar alarma
        }
        //si es mayor a 0
            
        //sino 
            //parar tiempo 
            //llamar alarma
            //notificacion
            //etc
    }else{
        clearInterval(runningTime)
        //mostrar un cartel que diga establecer temporizador
        // o que se establezca automaticamente
    }

}
function checkClock(){
    let clockValue = document.getElementById("clockValue")
    if(clockValue < 1){
        clearInterval(runningTime)
    };
};
document.getElementById("clockValue").addEventListener('change', checkClock())