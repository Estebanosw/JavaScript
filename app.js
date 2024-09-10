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