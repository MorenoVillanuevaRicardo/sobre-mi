function validarOperandos(){  /*funcion para validar los numeros ingresados*/
  let valor1 = document.getElementById("number1").value;  /*asigno el valor a una variable de los numeros ingresados*/
  let valor2 = document.getElementById("number2").value;
  if (valor1 != "" && valor2 != ""){ /*comparo que no sean vacios*/
  return true;
  } else if ( valor1 =="" && valor2==""){     /*condiciones para ver si ambos operandos son vacios, el primero o el segundo */
    window.alert("Ambos operandos son invalidos");
   }else if ( valor1==""){
    window.alert("El primer operando es invalido");
  } else  {
    window.alert("El segundo operando es invalido")
  }
} 

function evaluarResultado(resOpe, ope2){ /*funcion para evaluar si el resultado excede un numero tanto minimo como maximo*/
  let absoluto = Math.abs(resOpe);  /*obtengo el valor absoluto de manera que puedo evaluar tanto los positivos como los negativos*/
  if (absoluto > 999999999999999 && ope2 !== 0 ){ /*agrego la condicion que el que operador 2 no sea 0*/
   window.alert("El resultado es demasiado grande");
  } else if (absoluto > 0 && absoluto < 0.000000000000001){ /*que el resultado no sea inferior a un numero */
    window.alert("El resultado es demasiado pequeño")
  } else {
    return resOpe; /*si el resultado es valido, devuelve el mismo numero pasado como argumento, es redundante, pero de las otras formas que probe, me daba error */
  }
}

function operacion(x){   /*funcion que realiza el calculo*/
    if (validarOperandos()== true) {  /*si los operandos son validos, declaro dos variables y "capturo" los numeros ingresados*/
    let a = parseFloat(document.getElementById("number1").value);
    let b = parseFloat(document.getElementById("number2").value);
    let c = 0;   /*declaro la variable se donde se almacena el resultado*/
    switch (x){   /*de acuerdo a la seleccion en el menu, ejecuta la operacion*/
        case "+": c= a+b;
        break;
        case "-": c= a-b;
        break;
        case "*": c= a*b;
        break;
        case "/": c= a/b;
        if (b === 0){     /*no se admite la division por 0*/
            window.alert("La operacion no es valida");
        }
        break;
    }
    document.getElementById("resultado").value = evaluarResultado(c,b);
    
}
}
   
