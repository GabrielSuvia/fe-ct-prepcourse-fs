/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   let cambio = "";
   let i=0;

  if(nombre != ""){
   nombre[0] = nombre[0].UpperCase;

    while(i <= nombre.length){
      cambio =cambio + nombre[i];
      i++;
    }
  }
   
return cambio;
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:

   cb();

}







function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:

   function cb(a,b){

      return (a+b);
   }
   cb(num1, num2);
}






function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   var sum = 0;
   for(let i=0; i<arrayOfNumbers.length; i++){
    sum = sum + cb(arrayOfNumbers[i]);
   
      }
}




function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:

   for(let i=0; i<array.length; i++){
   cb(array[i])
   }

}






function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   var arr = [];


   function cb(arg){
      arr[i] = arg[i]
      
   }

   for(let i=0; i<array.length; i++){
      cb(array[i])
      }
   return arr;
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
    let i = 0;
    let nuevo = [];
    let j = 0;
    while(i<arrayOfStrings.length){
       if(arrayOfStrings[i] === "a"){
             nuevo[j]=arrayOfStrings[i]
       }
       i++;
    }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
