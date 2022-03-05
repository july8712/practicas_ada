// Crear una función tienenMismaLongitud que tome como argumentos dos strings a y b y devuelva true si tienen la misma longitud o false de lo contrario

/*
function tienenMismaLongitud(palabra1, palabra2){
    return palabra1.length === palabra2.length;
}

console.log(tienenMismaLongitud('javascript', 'java'));
console.log(tienenMismaLongitud('manzana', 'cerveza'));
*/


// Crear una función esUltimoCaracter que tome como argumentos una palabra y un caracter y devuelva true si la palabra termina con el caracter o false de lo contrario

function esUltimoCaracter(palabra, caracter){
    return palabra.slice(-1) === caracter;
}
// console.log(esUltimoCaracter('lovelace', 'f'));

//Crear una función esValida que tome como argumento una contrasenia (string) y devuelva true si tiene 8 caracteres o más o false si tienen menos de 8 caracteres

const esValida = (contrasenia) => {
    return contrasenia.length >= 8;
}

// console.log(esValida('contraseniaMuySegura'), esValida('abc123'));

// Crear una función sonIguales que tome como argumentos dos strings a y b y devuelva true si ambos strings tienen el mismo contenido independientes del caso y false en caso contrario.

// sonIguales('javascript', 'JavaScript') // true
// sonIguales('AdA LoVeLaCe', 'Ada Lovelace') // true
// sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO') // false

const sonIguales = (a,b)=>{
   
    return a.toUpperCase() === b.toUpperCase();

} 


// console.log(sonIguales("NO ESTOY GRITANDO", "ESTOY GRITANDO"), sonIguales('AdA LoVeLaCe', 'Ada Lovelace'), sonIguales('javascript', 'JavaScript'));


// Crear una función contarPalabras que tome como argumento un string str y devuelva la cantidad de palabras que posee

///contarPalabras('javascript') // 1
//contarPalabras('ada lovelace') // 2
//contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos') // 14

const contarPalabras = (palabras) => {
     return palabras.split(' ').length;

}

//console.log(contarPalabras('javascript'), contarPalabras('ada lovelace'), contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos'));

// burlarse(str)

// Crear una función burlarse que tome como argumento un string str y devuelva el mismo string con todas las vocales reemplazadas por la letra i

// burlarse('programar es dificil') // 'prigimir is dificil'


const burlarse = (palabras) => {
    return palabras.replace(/[aeou]/g, "i");
}

// console.log(burlarse('programar es dificil'));


// esFraccionMayorAUno(fraccion)

// Crear una función esFraccionMayorAUno que tome como argumento un string fraccion (en el formato 'numerador/denominador') y devuelva true si dicha fracción es mayor a 1 o false de lo contrario

// esFraccionMayorAUno('1/2') // false
// esFraccionMayorAUno('2/2') // false
// esFraccionMayorAUno('4/2') // true

const esFraccionMayorAUno = (fraccion) => {
    let frac = fraccion.split("/");
    let numerador = parseInt(frac[0]);
    let denominador = parseInt(frac[1]);
    // console.log(numerador);
    return numerador > denominador;
}

// console.log(esFraccionMayorAUno("3/2"));


// capitalizar(str)

// Crear una función capitalizar que tome como argumento un string str y devuelva el mismo string con la primera letra en mayúscula

// capitalizar('lovelace') // 'Lovelace'
// capitalizar('había una vez...') // 'Había una vez...'

const capitalizar = (string) => {
    let inicial = string.slice(0, 1);
    let inicialMay = inicial.toUpperCase();
    return string.replace(inicial, inicialMay);
}

console.log(capitalizar("hola"));