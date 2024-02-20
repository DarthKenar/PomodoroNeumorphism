Al hacer click upTask() debe:
    comprobar el indice del ID de la tarea:
    Si se encuentra en la posicion 0:
        - Debería pasarlo al final (Se correría todo un lugar)
        o mostrar una animacion de intentar achicarse pero que vuelva a su lugar. (como cuando eliminamos una tarea pero sin completar)
    de lo contrario:
        - Tiene que cambiar el orden de las tareas en el objeto de memoria:
        - Tiene qur actualizar el LocalStorage con el objeto
        - Tiene que mostrar alguna animacion y cambio visual en el front. 
          - Podría Sustraer directamente las dos estructuras de las tareas o solo los textos e intercambiarlos

Al hacer click en UP hace:
    - Busca el indice de la tarea en tasksListObject (Ahora tenemos el id de la tarea y el índice)
    Si el indice es != de 0:
        hay que: 
            - cambiarlo por el anterior en la lsita tasksListObject:
            - actualizar la lista localStorage
            - cambiar la posicion en el DOM
    Sino:
        Hay que:
            - Mostrar animacion de que no se puede
