// Crear una función tienenMismaLongitud que tome como argumentos dos strings a y b y devuelva true si tienen la misma longitud o false de lo contrario

function tienenMismaLongitud(palabra1, palabra2){
    return palabra1.length === palabra2.length;
}

console.log(tienenMismaLongitud('javascript', 'java'));
console.log(tienenMismaLongitud('manzana', 'cerveza'));
