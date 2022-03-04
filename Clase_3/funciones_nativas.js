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