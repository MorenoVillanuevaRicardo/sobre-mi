La calculadora se basa en :
2 entradas para los datos numericos
salida del resultado
un menu desplegable desde el cual se selecciona la operacion a realizar
y dos botones que nos permiten confirmar/ realizar la operacion o borrar los campos de entrada y salida, para realizar otra operacion

Arroja cuadros de alerta cuando se ingresan datos vacios, ya sea ambos, o alguno de los operandos
Cuando el segundo operando es un 0 y la operacion a realizar es una division, se arroja mensaje de alerta, ya que no esta permitida la divison por 0
Tambien arroja cuadros de alerta cuando el valor absoluto de un numero excede un maximo y cuando es menor que un minimo

Pruebas
1) cualquier operacion, cuando 1 o ambos operandos son ""; alerta por operandos invalidos
2)multiplicacion  100000000000*10000; resultado esperado: alerta por numero grande, resultado obtenido: alerta por numero grande
3) division, colocando el numero 0 como segundo operando; resultado esperado: alerta de operacion invalida, resultado obtenido alerta de operacion invalida + alerta de numero muy grande
(supongo que tomara al 0 como un numero muy pequeño de modo que al dividir queda un numero muy grande, por eso en la linea 17 del .js agrego la condicion de que el numero sea distinto de 0, para que no me salte este alerta y solo el de operacion invalida)
En cuanto a las pruebas, eso fue lo mas destacable
