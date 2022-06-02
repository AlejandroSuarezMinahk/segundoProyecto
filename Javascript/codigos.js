//Inicialicazión de variables. 
//Opacity contendrá el valor de la opacidad final.
var opacity = 0;
var intervalID = 0;

function MostrarJujuy() {
    /*Esta función realiza el cambio en los valores de la opacidad 
    del section con el id "Jujuy".
    
    Para esto, creamos una variable local denominada "jujuy" que 
    devuelve una referencia al elemento por su ID, en este caso "Jujuy".

    Luego, actualizamos el valor de la variable Opacity para que sea igual
    al que tiene almacenado la propiedad opacity del section "Jujuy".

    Realizamos la consulta de si es menor a 1;
    si lo es, aumentamos en un pequeño porcentaje esta opacidad. 
    De modo que aumente gradualmente.

    Cuando no lo sea, limpiamos el intervalo con la variable clearInterval.
    */
    var jujuy = document.getElementById("Jujuy");
    opacity = Number(window.getComputedStyle(jujuy)
        .getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 0.1;
        jujuy.style.opacity = opacity
    } else {
        clearInterval(intervalID);
    }
}

function fadeInJujuy() {
    /*
    Esta función tiene como propósito mostrar el resultado de
    la función MostrarJujuy y en cuantos milisegundos.
    */
    setInterval(MostrarJujuy, 200);
    /*
    Argumentos:
    MostrarJujuy: Función
    200: int (valor en milisegundos).
    */
}

function fadeInTodos() {
    /*
    Dado que el comando windows.onload sólo puede mostrar una única función,
    aquí se crea una función mayor que contiene a las cuatro funciones de muestra.
    */
    fadeInJujuy();
}

//Este comando funciona para que apenas se cargue la página, 
//se dispare al función de mostrar todos los elementos.
window.onload = fadeInTodos;

//2. Eventos

function saludo() {
    window.alert('Saludo traido por una función.');
}

/*3. Obtención de datos */

//Ajax reutilizable.

//En primer lugar, creamos una variable global con la dirección de la api.
const url_base = 'http://api.icndb.com/jokes/random'

//Creamos la función para traer los datos, esta función la llamamos cuando tocamos el boton "Traer datos."
function obtenerDatos() {
    //Creamos una variable local con la función xmlhttprequest.
    const request = new XMLHttpRequest();
    /*El método open tiene los distintos parámetros: method, url, async, user, password.
    -Method: El método HTTP a usar:
    -url: La URL a la que se envía el pedido.
    -async: Un parámetro booleano opcional, predeterminado es true, 
    que indica si se debe o no realizar la operación de forma asíncrona. 
    Si este valor es false, el método send() no se devuelve hasta que se reciba la respuesta completa.
    */
    request.open("GET", `${url_base}`);

//Metodo overloading. Sobrecarga de métodos.

    request.onreadystatechange = function () {
        //Preguntamos si la petición ya está completa en el estado 4.
        if (request.readyState == 4) {
            //Preguntamos por el estado de la petición; en caso que no esté correcta, sale un mensaje de error.
            if (request.status == 200) {
                document.getElementById('Datos').innerHTML = this.responseText;
            } else {
                alert('Error cargando la página');
            }
        }
    }
    /*Este método abre la conexión y envía ka solicitud al servidor. 
    El parámetro adicional body contiene el cuerpo de la solicitud.
    Algunos métodos como GET no tienen un cuerpo. 
    Y otros como POST usan el parámetro body para enviar datos al servidor.*/
    request.send();
}

/*

/*3. Obtención de datos */
/*En primer lugar, localizamos el botón que vamos a necesitar para traer los datos
y el lugar dónde vamos a mostrar los datos.
const button = document.getElementById('button');
const $Datos = document.querySelector('#Datos')

const url_base = 'http://api.icndb.com/jokes/random'

function cargarDatos(){
    $Datos.textContent = $Datos
}

/*
 Javascript permite ingresar un parámetro por defecto, en este caso "GET".
 

function ajax({ url, method = 'GET', async = true, done = () => { } }) {
    //Función extra para saber en que estado está la petición.
    function status(readyState) {
        switch (readyState) {
            case 0: return 'Inicializado petición'
            case 1: return 'Cargando petición'
            case 2: return 'Petición cargada'
            case 3: return 'Petición interactiva'
            case 4: return 'Petición completada'
        }
    }
    const request = new XMLHttpRequest();
    console.log(status(request.readyState), request.readyState)
    request.onreadystatechange = () => {
        console.log(status(request.readyState), request.readyState)
        if (request.readyState == 4) {
            if (request.status == 200) {
                document.getElementById('Datos').innerHTML = this.responseText
            }

        }
    }
    request.open(method, url, async)
    request.send(null)
}

ajax({
    url: url_base,
    //method = 'GET',
    //async = true,
    done: cargarDatos,
})

*/



/* Obtención de datos con promesas. */
/**
 * Las promesas son herramientas de los lenguajes de programación que nos sirven 
 * para gestionar situaciones futuras en el flujo de ejecución de un programa
 */

function obtenerDatosConPromesas() {
    const request = new XMLHttpRequest();
    request.open("GET", `${url_base}`);
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
                document.getElementById('DatosConPromesas').innerHTML = this.responseText;
            } else {
                alert('Error cargando la página');
            }
        }
    }
    request.send();
}
