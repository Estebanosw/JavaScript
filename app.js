/*
console.log("Hola Mundo");

// VARIABLES

let numero1=45;
let numero2=39;

const pi=3.14156;

let estado=true;

let numero3 = 78;

let nulo = null;

numero3 = 125;

let direccion = "Calle 11 # 40-59"

console.log(numero1);
console.log(numero2);
console.log(pi);
console.log(estado);
console.log(numero3);

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;

console.log(suma)

console.log(direccion)

// Concatenar valores
console.log('El primer valor es :' + numero1);
console.log('El segundo valor es :' + numero2);
console.log('La suma de ' + numero1 + ' y ' + numero2 + ' es :' + suma)
console.log('La suma de ' , numero1 , ' y ' , numero2 + ' es :' , suma)

// Literal Template
console.log(`La suma de ${numero1} y ${numero2} es: ${suma}`);
console.log(`La resta de ${numero1} y ${numero2} es: ${resta}`);
console.log(`La multiplicación de ${numero1} y ${numero2} es: ${multiplicacion}`);

// indagar el estado o tipo de dato de una variable
console.log(typeof(estado));
console.log(typeof(direccion));
console.log(typeof(nulo));
console.log(typeof(numero1));

// Ingreso de datos por el usuario de tipo entero

let num1 = parseInt(prompt("Ingrese el primer valor"));
let num2 = parseInt(prompt("Ingrese el segundo valor"));

let s = num1+num2;

console.log(`El primer valor ingresado es: ${num1} y el segundo valor es: ${num2}`)
console.log(`La suma es: ${s}`)

// Forma 1 Genereación de numeros aleatorios
// Numero aleatorio entre 1 y 50

let alea = Math.floor((Math.random() * 50)+1);
console.log(alea);

// forma 2 para generar numeros aleatorios
// Numero aleatorio entre 0 y 99

let alea1 = Math.floor(Math.random() * 100);
console.log(alea1);
*/

/*
// ESTRUCTURA DEL IF
// Ejercicio 1
let edad = 17;
if(edad>=18){
    console.log("Es mayor de edad")
}else{
    console.log("Es menor de edad")
}

// Ejercicio 2
let calificacion;

calificacion = parseFloat(prompt("Ingrese el valor de calificación"));
if(calificacion<3){
    console.log("Reprobo");
}else{
    console.log("Aprobo");
}

// Ejercicio 3
let calificacion1;

calificacion1 = parseFloat(prompt("Ingrese el valor de calificación"));

if(calificacion1<3){
    console.log("Reprobo");
}else if(calificacion1<3 && calificacion1<=4){
    console.log("Aprobo");
}else{
    console.log("El estudiante es muy bueno")
}

// OPERADORES LOGICOS
// && es utilizado como and o y
// || es utilizado como or o o y se llama pie
*/

/*
// ejercicio 4
let genereacion;

genereacion = parseInt(prompt("Ingrese el año"));
if(genereacion >=0 && genereacion <= 1882){
    console.log("No registra Generación");
}else if(genereacion >=1883 && genereacion <= 1900){
    console.log("Generación perdida");
}else if(genereacion >=1901 && genereacion <= 1924){
    console.log("Generación grandiosa");
}else if(genereacion >=1925 && genereacion <= 1945){
    console.log("Generación silenciosa");
}else if(genereacion >=1946 && genereacion <= 1964){
    console.log("Baby Boomers");
}else if(genereacion >=1965 && genereacion <= 1980){
    console.log("Generación x");
}else if(genereacion >=1981 && genereacion <= 1996){
    console.log("Generación y");
}else if(genereacion >=1997 && genereacion <= 2012){
    console.log("Generación z");
}else{
    console.log("Generación Alpha");
}

// OPERADOR TERNARIO
let edad1 = 18;
let res = (edad1>=18)? "Es mayor de edad": "Es menor de edad";

console.log(res);
*/

/*
// Switch case
let dia=6;

switch(dia){

    case 1: console.log("Imprimir lunes");

    break;

    case 2: console.log("Imprimir Martes");

    break;

    case 3: console.log("Imprimir Miercoles");

    break;

    case 4: console.log("Imprimir Jueves");

    break;

    default: console.log("Dia no existe");
}

// Segundo ejemplo
let operador="*";

switch(operador){

    case '+':

    break;

    case '-':

    break;

    case '*':

    break;

    case '/':

    break;

    default: console.log("Operación no existe");
}
    */
/*
// Ejercicio de dolar
let dolar = 4280
let euro = 4728
let libra = 5601

let valor = parseInt(prompt("Ingrese un valor en pesos para convertirlo a la divisa Dolar, Euro ó Libra:"));
console.log(`Valor: ${valor}`);

let divisa = parseInt(prompt("Ingrese 1. para convertir de pesos a dolar 2. para convertir de pesos a euro 3. para convertir de pesos a libra"));
console.log(`Divisa: ${divisa}`);

let calculo;

switch(divisa){

    case 1: 
    
    calculo = valor / dolar

    console.log(`Aplicó cambio a Dolar por valor de ${calculo}`);

    break;    

    case 2: 
    
    calculo = valor / euro

    console.log(`Aplicó cambio a Euro por valor de ${calculo}`);

    break;

    case 3: 
    
    calculo = valor / libra
    
    console.log(`Aplicó cambio a Libra por valor de ${calculo}`);

    break;

    default: console.log("Esa opción no aplica calculos");
}

*/
/*
// Estructuras repetitivas con for
// Incremento
for (let i = 1; i<=10; i++){
    console.log(i);
}

// Recorrer de 3 en 3 hasta 30

for (let k = 3; k<=30; k+=3){
    console.log(k);
}

// Decremento
for (let j = 30; j>=1; j-=2){
    console.log(j);
}

// Ejercicio de Imprimir la tabla de multiplicar
let tabla = 6;
for (let l = 1; l<=10; l++){
    console.log(`${tabla} * ${l}= ${(tabla * l)}`);
}

let tabla1 = parseInt(prompt("Ingrese un valor para multiplicarlo"));
for (let y = 1; y<=10; y++){
    console.log(`${tabla1} * ${y}= ${(tabla1 * y)}`);
}



// ejercicio suma
let n = parseInt(prompt("Ingrese un numero positivo"));
let sum = 0;

for (let i = 1; i<=n; i++){
    sum +=i;
    // igual a lo que esta en la linea 271 // sum = sum+1;

}
console.log(`La suma de los numeros del 1 al ${n} es: ${sum}`);


// Todas las tablas de multiplicar

for (let i = 1; i<=10; i++){
    console.log(`LA TABLA DEL ${i}`)
    for (let j = 1; j<=10;j++){
        console.log(`${i} * ${j} = ${(i * j)}`);
    }
    console.log("");
}
*/
/*
// Imprimir la suma de los primeros 100 numeros impares
let tabla = 0;
for (let i = 1; i<=200; i+=2){   
    tabla += i;
    console.log(`${i}`);
}
console.log(`La suma de los primeros 100 numeros impares es: ${tabla}`);
*/
/*
for(let i = 1; i<=10;i++){
    console.log(i);
}

// WHILE

let numero = 1
while(numero<=10){
    console.log(numero);
    numero++;
}
    */

// suma numeros positivos
/*
let n = 1;
let sum =0;

while(n>0){
    n = parseInt(prompt("Ingrese un numero positivo para sumarlos e ingrese un numero negativo para salir"));
    if(n>0){
        sum +=n;        
    }
    console.log(sum);
}
console.log(sum);
*/
/*
// Desarrollo de menú de opciones

let opcion;

let estado = true;

let coseno, seno, raiz, numero;

// opciones realizar calculo matematico

while(estado){

    opcion = parseInt(prompt(`Seleccione una opcón \n 1. Raiz \n 2. Seno de N1 \n 3. Coseno de N1 \n 4. Salir`));

switch(opcion){

    case 1:
        alert("Seleccionó Raiz");
        numero = parseFloat(prompt("Ingrese el numero para calcular la raiz"));
        raiz = Math.sqrt(numero);
        alert(`La raiz de ${numero} es: ${raiz}`);
    break;

    case 2:
        alert("Seleccionó Seno N1");
        numero = parseFloat(prompt("Ingrese el numero para calcular el seno"));
        seno = Math.sin(numero);
        alert(`El seno del ${numero} es: ${seno}`);
    break;

    case 3:
        alert("Seleccionó Coseno N1");
        numero = parseFloat(prompt("Ingrese el numero para calcular el seno"));
        coseno = Math.cos(numero);
        alert(`El coseno del ${numero} es: ${coseno}`);
    break;

    case 4:
        alert("Salir ...");
        estado = false;
    break;

    default: 
        alert("Esa opción no aplica calculos");

}
}
*/

// Adivinar un numero generado aleatoriamente

// 1. Generar un numero aleatorio 1 - 50
// 2. Solicitan al usuario un numero

// Aleatorio = 35

// NUMERO = 15
// NO, EL NUMERO GENERADO ES MAYOR

// NUMERO = 60
// NO, EL NUMERO GENERADO ES MENOR

// NUMERO 35
// ADIVINASTE
/*

let alea = Math.floor((Math.random() * 50)+1);
console.log(alea);
let estado = true;

while(estado){
    
    alert(`${alea}`);

    let numerouser = parseInt(prompt("Ingresa un numero para adivinarlo"));
    if(numerouser < 1 || numerouser > 50){
        alert("DEBE INGRESAR UN NUMERO DEL 1 AL 50");
    }
    else if (numerouser < alea){
        alert("NO, EL NUMERO GENERADO ES MAYOR AL QUE INGRESASTE"); 
    }
    else if (numerouser > alea){
        alert("NO, EL NUMERO GENERADO ES MENOR AL QUE INGRESASTE"); 
    }
    else if(numerouser == alea){
        alert("ADIVINASTE");
        estado = false;
    }
}

*/
/*
// ESTRUCTURA DO WHILE
// CALCULO DE AREA DE UN CIRCULO, CUADRADO Y TRIANGULO

// AREA CIRCULOS: A = PI * R*R

// AREA CUADRADO: A = LADO * LADO

// AREA DEL TRIANGULO:  A= B*H/2

let ac, acu, at;

let r,lado,b,h;

const pi = 3.1416;

let opcion;

let estado = true;

do{
    opcion = parseInt(prompt(`1. Area Circulo \n 2. Area del cuadrado \n 3. Area del Triangulo \n 4. Salir`));

    switch(opcion){
        case 1:
            r = parseFloat(prompt(`Ingrese el valor del radio`));

            ac = pi * (r*r);

            alert(`El area del circulo es : ${ac}`);

        break;
        case 2:
            lado = parseFloat(prompt(`Ingrese el valor del lado`));

            acu = lado * lado

            alert(`El area del cuadrado es : ${acu}`);
        break;
        case 3:
            b = parseFloat(prompt(`Ingrese el valor de la base`));

            h = parseFloat(prompt(`Ingrese el valor de la altura`));

            at = (b * h)/2

            alert(`El area del triangulo es : ${at}`);
        break;
        case 4:
            alert("SALIENDO ...");
            estado = false;
        break;
        default:
            alert("Opción no valida")
    }

}while(estado);
*/


// Conversiones Temperaturas
/*
De kelvin a Celsius C = K - 273.15
De Kelvin a Farenheit F = ((9*(K - 273.15)) / 5) + 32
De Farenheit a Celsius C = (5*(F - 32)) / 9
De Farenheit a Kelvin K = ((5*(F - 32)) / 9) + 273.15
De Celsius a Kelvin K = C + 273.15
De Celsius a Farenheit F = ((9 * C) / 5) + 32
*/
/*
let c, k, f;
let opcion;
let estado=true;

do {
    opcion = parseInt(prompt(`Conversor de Temperaturas, digíte una de las siguientes opciones: 
        \n 1 para convertir de kelvin a Celsius
        \n 2 para convertir de Kelvin a Farenheit
        \n 3 para convertir de Farenheit a Celsius
        \n 4 Para convertir de Farenheit a Kelvin
        \n 5 Para convertir de Celsius a Kelvin
        \n 6 Para convertir de Celsius a Farenheit
        \n 7 Para salir`));

    switch(opcion){
        case 1: alert ("Convertir de kelvin a Celsius");
        k = parseFloat(prompt("Ingrese el valor en Kelvin que quiere convertir a Celsius"));
        c = k - 273.15;
        alert (`El valor ${k} en Kelvin equivale a ${c} Celsius`);
        break;

        case 2: alert ("Convertir de Kelvin a Farenheit");
        k = parseFloat(prompt("Ingrese el valor en Kelvin que quiere convertir a Farenheit"));
        f = ((9*(k - 273.15)) / 5) + 32;
        alert (`El valor ${k} en Kelvin equivale a ${f} Farenheit`);
        break;

        case 3: alert ("Convertir de Farenheit a Celsius");
        f = parseFloat(prompt("Ingrese el valor en Farenheit que quiere convertir a Celsius"));
        c = (5*(f - 32)) / 9;
        alert (`El valor ${f} en Farenheit equivale a ${c} Celsius`);
        break;

        case 4: alert ("Convertir de Farenheit a Kelvin");
        f = parseFloat(prompt("Ingrese el valor en Farenheit que quiere convertir a Kelvin"));
        k = ((5*(f - 32)) / 9) + 273.15;
        alert (`El valor ${f} en Farenheit equivale a ${k} Kelvin`);
        break;

        case 5: alert ("Convertir de Celsius a Kelvin");
        c = parseFloat(prompt("Ingrese el valor en Celsius que quiere convertir a Kelvin"));
        k = c + 273.15;
        alert (`El valor ${c} en Celsius equivale a ${k} Kelvin`);
        break;

        case 6: alert ("Convertir de Celsius a Farenheit");
        c = parseFloat(prompt("Ingrese el valor en Celsius que quiere convertir a Farenheit"));
        f = ((9 * c) / 5) + 32;
        alert (`El valor ${c} en Celsius equivale a ${f} Farenheit`);
        break;

        case 7: alert ("Saliendo...");
        estado = false;
        break;

        default:
            alert ("Opción no válida")
    }
} while(estado);
 */

// Funciones
/*
// Ejercicio 1
saludar ("Juan Rojas");

function saludar(nombre){
    alert(`Hola ${nombre}`);
}
*/
/*
// ejercicio 2
function raiz(numero){
    return Math.sqrt(numero)
}
console.log(raiz(32));

// ejercicio 3
function exponente(base, cuadrado){
    return Math.pow(base, cuadrado);
}

console.log(`EL CUADRADO ES: ${exponente(12, 6)}`);

// ejercicio 4

const a = 12;
const b = 6;

function exponente(base1, cuadrado1){
    return Math.pow(base1, cuadrado1);
}

console.log(`EL CUADRADO ES: ${exponente(a, b)}`);

function suma(n1,n2){
    return n1+n2;
}

let opcion1;
let estado = true;
let n1, n2,sum,res,ra;

while(estado){
    opcion1 = parseInt(prompt(`1. Suma \n 2. Resta \n 3. Raiz \n 4. Salir`))
    switch(opcion1){
        case 1: 
            console.log("SUMA");
            n1 = parseInt(prompt(`Ingrese N1`))
            n2 = parseInt(prompt(`Ingrese N2`)) 
            alert(`LA SUMA ES: ${(suma(n1,n2))}`)
        break;

        case 2: 
            console.log("Resta");
            res = n1 - n2;
            alert(`LA RESTA ES: ${res}`)
        break;

        case 3: 
            console.log("Raiz de N1");
            ra = Math.sqrt(n1);
            alert(`LA RAIZ ES: ${ra}`)
        break;

        case 4:
            estado = false;
        break;

        default:
            alert("opcion no existe");
    }
}
    */

/*
De kelvin a Celsius C = K - 273.15
De Kelvin a Farenheit F = ((9*(K - 273.15)) / 5) + 32
De Farenheit a Celsius C = (5*(F - 32)) / 9
De Farenheit a Kelvin K = ((5*(F - 32)) / 9) + 273.15
De Celsius a Kelvin K = C + 273.15
De Celsius a Farenheit F = ((9 * C) / 5) + 32
*/
/*
let c1, k1, f1;
let opcion3;
let estado=true;

function KelvinCelsius(k1){
    return k1 - 273.15;
}

function KelvinFarenheit(k1){
    return ((9*(k1 - 273.15)) / 5) + 32;
}

function KelvinCelsius(f1){
    return (5*(f1 - 32)) / 9;
}

function FarenheitKelvin(f1){
    return ((5*(f1 - 32)) / 9) + 273.15;
}

function CelsiusKelvin(c1){
    return c1 + 273.15;
}

function CelsiusFarenheit(c1){
    return ((9 * c1) / 5) + 32;
}

function ingresarkelvin() {
    let valor;
    valor = parseFloat(prompt("Ingrese el valor en Kelvin que quiere convertir a Celsius"));
    return valor;
}

do {
    opcion3 = parseInt(prompt(`Conversor de Temperaturas, digíte una de las siguientes opciones: 
        \n 1 para convertir de kelvin a Celsius
        \n 2 para convertir de Kelvin a Farenheit
        \n 3 para convertir de Farenheit a Celsius
        \n 4 Para convertir de Farenheit a Kelvin
        \n 5 Para convertir de Celsius a Kelvin
        \n 6 Para convertir de Celsius a Farenheit
        \n 7 Para salir`));

    switch(opcion3){
        case 1: alert ("Convertir de kelvin a Celsius");
        k1 = ingresarkelvin();
        alert (`El valor ${k1} en Kelvin equivale a ${KelvinCelsius(k1)} Celsius`);
        break;

        case 2: alert ("Convertir de Kelvin a Farenheit");
        k1 = parseFloat(prompt("Ingrese el valor en Kelvin que quiere convertir a Farenheit"));
        alert (`El valor ${k1} en Kelvin equivale a ${KelvinFarenheit(k1)} Farenheit`);
        break;

        case 3: alert ("Convertir de Farenheit a Celsius");
        f1 = parseFloat(prompt("Ingrese el valor en Farenheit que quiere convertir a Celsius"));
        alert (`El valor ${f1} en Farenheit equivale a ${KelvinCelsius(f1)} Celsius`);
        break;

        case 4: alert ("Convertir de Farenheit a Kelvin");
        f1 = parseFloat(prompt("Ingrese el valor en Farenheit que quiere convertir a Kelvin"));
        alert (`El valor ${f1} en Farenheit equivale a ${FarenheitKelvin(f1)} Kelvin`);
        break;

        case 5: alert ("Convertir de Celsius a Kelvin");
        c1 = parseFloat(prompt("Ingrese el valor en Celsius que quiere convertir a Kelvin"));
        alert (`El valor ${c1} en Celsius equivale a ${CelsiusKelvin(c1)} Kelvin`);
        break;

        case 6: alert ("Convertir de Celsius a Farenheit");
        c1 = parseFloat(prompt("Ingrese el valor en Celsius que quiere convertir a Farenheit"));
        alert (`El valor ${c1} en Celsius equivale a ${CelsiusFarenheit(c1)} Farenheit`);
        break;

        case 7: alert ("Saliendo...");
        estado = false;
        break;

        default:
            alert ("Opción no válida")
    }
} while(estado);

// Forma1
// Funcion tradicional

function multiplicacion(a,b){
    return a*b;
}
console.log(multiplicacion(8,5));

// Forma 2
// Funcion Flecha
let multiplicacion1 = (a,b) => {
    return a*b;
}
console.log(multiplicacion1(5,3));

// Forma 3
let multiplicacion2 = (a,b) => a*b
console.log(multiplicacion2(3,7));

// Otro ejercicio
let ra1 = (numero) => Math.sqrt(numero);

console.log(ra1(25));

// ejercicio 2 de flecha
let funcion = () => console.log("Hola soy una funcion sin parametros");
funcion();
*/

// ARREGLOS
let estudiantes = ['Laura','Julian','Andres','Oscar','Paula'];

console.log(estudiantes);

// añadir elemento al final
console.log(estudiantes.push('Ricardo'));
console.log(estudiantes);

// añadir elemento al comienzo
console.log(estudiantes.unshift('Esmeralda'));
console.log(estudiantes);

// añadir elemento en cualquier posicion
console.log(estudiantes.splice(2, 0, 'Sofia'))
console.log(estudiantes);

// Eliminar el ultimo elemento
console.log(estudiantes.pop());
console.log(estudiantes);

// Eliminar el primer elemeto
console.log(estudiantes.shift());
console.log(estudiantes);

// Mirar la posicion de un elemento
console.log(estudiantes.indexOf('Andres'));
console.log(estudiantes);

// Elimminar elemento en una posicion

console.log(estudiantes.splice(2, 1));
console.log(estudiantes);

// Recorrer el arreglo
// forma 1

estudiantes.forEach((est) => {
    console.log(est);
})

estudiantes.forEach((est1) => {
    if(est1 === estudiantes[3] ){
        console.log(est1);
    }
});

let vector = [];
vector[0]=15;
vector[1]=63;
vector[2]=48;

console.log(vector);

