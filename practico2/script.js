let jugadas = ["piedra","papel","tijera"];  /*declaro un array con las distintas opciones de las jugadas*/
let  textosRonda = ["La ronda termino en empate","La ronda fue ganada por el jugador","La ronda fue ganada por la computadora"]; /*array con los distintos resultados de las rondas*/
let  textosJuego = ["El juego termino en empate","El ganador del juego fue el jugador","El ganador del juego fue la computadora"]; /*array con los distintos resultados del juego */


function obtenerNombreJugador(){     /*funcion para validar el nombre ingresado del jugador, si es una cadena vacia imprime una alerta */
        let a = prompt("Ingrese nombre jugador");  
        if (a !==""){
           let b =  a.toLocaleUpperCase(); 
           document.getElementById("nombre").value = b;
           activarControles(b);   /*al comienzo la pagina solo muestra el titulo y la seccion que pide ingresar el nombre, se llama a esta funcion para  habilitar la visibilidad de los demas elementos */
        } else{
            window.alert("Nombre de jugador invalido");
    }
}    
       
function activarControles(parametro1){   /*si bien ya se controlo con la funcion anterior que el nombre no sea "", si presionaba en el alert cancelar, se ejecutaba codigo que no debia ejecutarse, se nuevo "paso" para evitarlo*/
    let c = document.getElementById("nombre").value;
    if (c !==""){
    document.getElementById("nombre-jugador").innerHTML= parametro1;    
    document.getElementById("inicio").style.display="none";
    document.getElementById("lado-jugador").style.display="block";
    document.getElementById("lado-pc").style.display="block";
    document.getElementById("datos-juego").style.display="flex";
    document.getElementById("ingresar-nombre").style.display="none";
    document.getElementById("reset").style.display="block"
    }
}

function siguienteRonda(){      /* funcion que reestablece las imagenes (que cumplen el papel de opciones); si no se elige una opcion previamente, no permite avanzar a la siguiente ronda */
    let j = parseInt(document.getElementById("rondaNro").value);  /* se recupera el contador de ronda, y se lo incrementa para la siguiente ronda */
    let k = document.getElementById("eleccion").value;
    if (k===""){
        window.alert("HAGA SU JUGADA!");
    } else {
    j += 1;    
    document.getElementById("rondaNro").value = j;    
    document.getElementById("piedra").style.display="block";
    document.getElementById("papel").style.display="block";
    document.getElementById("tijera").style.display="block";
    document.getElementById("eleccion").value="";
    document.getElementById("resultado-ronda").innerHTML="";
    document.getElementById("papel-pc").style.display="block";
    document.getElementById("piedra-pc").style.display="block";
    document.getElementById("tijera-pc").style.display="block";
    }
 }

function obtenerJugadaComputadora(){  /*funcion que me permite obtener un numero aleatorio y usarlo como subindice  en el arreglo de posibles jugadas, para obtener la jugada de la pc */
  let numero = Math.round((Math.random()*2))
  window.alert("La pc eligio: "+ jugadas[numero] );
  return jugadas[numero];
}  

function mostrarOpcionPc(parametro2){  /*funcion que apartir de la opcion obtenida aleatoriamente (pasada como parametro) oculta los elementos las opciones que no fueron elegidas */
    let f= parametro2;
    switch (f) {
        case "piedra":
            document.getElementById("papel-pc").style.display="none";
            document.getElementById("tijera-pc").style.display="none";
        break;
        case "papel":
            document.getElementById("piedra-pc").style.display="none";
            document.getElementById("tijera-pc").style.display="none";
        break;
        default:
            document.getElementById("piedra-pc").style.display="none";
            document.getElementById("papel-pc").style.display="none";       
    }
}

function obtenerGanador(parametro4,parametro5){    /*funcion que obtiene el ganador de cada ronda, donde las opciones obtenidas son pasadas como parametros y se aplican las reglas del juego para determinar el ganador*/
    let a = parseInt(document.getElementById("victorias-jugador").value); 
    let b = parseInt(document.getElementById("victorias-pc").value);
    document.getElementById("instrucciones").style.display="none";
    let x = parametro4;
    let y = parametro5;
                                                  /* una vez determinado el ganador, se imprime en pantalla y en un alert el resultado de la ronda, y actualizando el marcador de las respectivas victorias */  
    if (x==y){
        document.getElementById("resultado-ronda").innerHTML=textosRonda[0];
        window.alert(textosRonda[0]);

    } else {
        switch (x){
            case "piedra":
                if ( y=== "tijera"){
                    document.getElementById("resultado-ronda").innerHTML=textosRonda[1];
                    document.getElementById("victorias-jugador").value = a+1;
                    window.alert(textosRonda[1]);           
                } else {
                    document.getElementById("victorias-pc").value = b+1;
                    document.getElementById("resultado-ronda").innerHTML=textosRonda[2];
                    window.alert(textosRonda[2]);
                }
            break;
            case "papel":   
                if ( y === "piedra"){
                document.getElementById("resultado-ronda").innerHTML=textosRonda[1]
                document.getElementById("victorias-jugador").value = a+1;
                window.alert(textosRonda[1]); 
                
                } else {
                document.getElementById("victorias-pc").value = b+1;
                document.getElementById("resultado-ronda").innerHTML=textosRonda[2];
                window.alert(textosRonda[2]);
                } 
            break;
            default:
                if (y ==="papel"){ 
                    document.getElementById("resultado-ronda").innerHTML=textosRonda[1]    
                    document.getElementById("victorias-jugador").value = a+1;                               
                    window.alert(textosRonda[1]);    
                } else {
                    document.getElementById("victorias-pc").value = b+1;
                    document.getElementById("resultado-ronda").innerHTML=textosRonda[2];                      
                    window.alert(textosRonda[2]);         
                }
        }   
    }
}
 


function jugar(){  /*funcion que a partir de los resultados de las funciones invocadas  verifica los contadores de victorias de ambas partes y el numero de ronda para dar final al juego; luego se imprime por pantalla y alerta el resultado del mismo  */
    let c = document.getElementById("rondaNro").value;
    let jugJugador = document.getElementById("eleccion").value; /* cuando se hace click sobre una de las imagenes de las opciones, la eleccion se almacena en un input que no esta visible, para luego trabajar con ese valor */
    let jugPc = obtenerJugadaComputadora();
    mostrarOpcionPc(jugPc);
    obtenerGanador(jugJugador,jugPc); 
    let a = document.getElementById("victorias-jugador").value; 
    let b = document.getElementById("victorias-pc").value;

    if (a == 3 || b == 3 || c == 5 ){ /*el juego finaliza cuando el numero de victorias de una parte llega a 3 o una vez jugada la ronda numero 5*/
        if ( a == b){
            document.getElementById("resultado-juego").innerHTML=textosJuego[0];
            window.alert(textosJuego[0]);
        } else {
            if ( a > b){
                document.getElementById("resultado-juego").innerHTML=textosJuego[1];
                window.alert(textosJuego[1]);  
            } else {
                document.getElementById("resultado-juego").innerHTML=textosJuego[2];
                window.alert(textosJuego[2]);
            }
        }
    document.getElementById("next").style.display= "none";    /*si se alcanzo algun valor limite, se esconde el boton de la siguiente ronda */
    }
}

function capturarClick(parametro3){  /*Esta funcion apartir del click elegido como opcion por el jugador, "esconde" las otras dos opciones, y asigna el valor a un campo input no visible*/
let a = document.getElementById("eleccion").value;    
let b = parametro3;
    
    if (a ==="") {
        switch (b){
            case piedra:
                document.getElementById("papel").style.display="none";
                document.getElementById("tijera").style.display="none";
                document.getElementById("eleccion").value="piedra";
                window.alert("El jugador eligio piedra");
            break;
            case papel:
                document.getElementById("piedra").style.display="none";
                document.getElementById("tijera").style.display="none";
                document.getElementById("eleccion").value="papel";
                window.alert("El jugador eligio papel");
            break;
            default:
                document.getElementById("piedra").style.display="none";
                document.getElementById("papel").style.display="none";
                document.getElementById("eleccion").value="tijera";
                window.alert("El jugador eligio tijera");    
        }
        jugar(); 
    } else {
        window.alert("Ya jugo esta ronda, pase a la siguiente"); /* si ya se realizo la jugada en la ronda actual imprime una alerta */
    }  
    
}

