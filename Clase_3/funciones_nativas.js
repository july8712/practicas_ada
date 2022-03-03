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
console.log(esUltimoCaracter('lovelace', 'f'));