- Hacer que se pueda seleccionar todo el texto de una new task con doble click
- Corregir animaciones en switch tasks
- Guardar en cache seleccion de lenguaje
- Guardar en cache Seleccion de temporizador
- Guardar en cache el visualizador de info inicial
  - Agregar cehckbox de (no recordar nuevamente)
- Notificacion de tarea terminada?
- revisar la forma en la que se autoselecciona el campo para una nueva tarea (tiene que hacerse despacio y el teclado virtual del celular no debe tapar el textfield)
- Corregir temporizador, se desfasa por alún motivo. quizas sea bueno utilizar algo así como datetime en python

-al hacer click arriba si se puede sitchear hacer:
  -bloquear boton de ese mismo id:
  -animacion arriba de este mismo (se desvanece)
  -animacion abajo del que esta arriba de este (se desvanece)
  -cambiar posicion de los elementos
  (darles una opacidad de 0?)
  -(desbloquear boton en este punto?)
  -animacion de que ahora esta abajo (llegando a su posicion)
  -animacion de que ahora esta arriba (llegando a su posicion)
  -habilitar boton (ver habilitacion )

  PD: La animacion no debe entorpecer la velocidad del usuario al switchear tareas
    - Debe ser una animacion limpia y rapida

- Fijarse si se peude dividir las animaciones en animaciones (funciones ) mas pequeñas:
- una para iniciar las 2 animaciones de los dos elementos, otra para switchear el DOM y otra para volver a animar:
- 2 funciones en vez de una sola? que se reutilizan Piensalo
