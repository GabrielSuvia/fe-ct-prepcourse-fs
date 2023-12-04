/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
let arr = [['A',1],['B', 2],['C', 3]];


arr.map((a) =>{
   
   this.map((b) =>{
           objeto.set(b[0], b[1])
   })
})

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   let newstring = [];
   let contador = 0;
         for(let i=0; i < string.length; i++){

            for(let j=0; j < string.length; j++)
               if( string[i]=== string[j]){
                   
                       contador++;
               }
            }
         }




function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
let i = 0;
let may = "";
let min = ""; 
let sums = "";
   while(i < string.length){
         if(string[i] >= 65 && string[i]<=90){
            may = may + string[i];
         }else{
            min = min + string[i];
         };
   }
   sums = may+min;

   return sums;

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

let cam = "";
let pal = frase.length;
let conta = 0;
let j =0;
for(let i=0; i<frase.length; i++){

       if(frase[i] != " "){
             j=i;    

            while(j<pal){
               if(frase[j] != " "){                 
                  conta++;
                 }
            }
             
                  for(let k=i; k<=conta; k++){
                   cam = frase[k];
                  frase[k] = frase[j-1];
                  frase[j-1] = cam;
                  j--;

                  }
                
            }
       }
}



function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
let inve = 0;
let num = 0;
   while(numero>0){
       num = (numero/10)
       numero = Math.trunc(numero/10);
       inve = (inve*10) + ((num - numero)*10)
       
   }
   if(inve === numero){
      console.log("si es capicua")
   }else{
      console.log("no es capicua")
   }
  
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   //buscar,encontrar, eliminar
   for(let i=0; i<string.length;i++){
      if(string[i] === "a" || string[i] === "b" || string[i] === "c"){
         string[i] = "";
      }
   }
   return string;

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

let cam = 0;
   for(let i=0; i<arrayOfStrings.length ; i++){
         if(arrayOfStrings[i].length > arrayOfStrings[i+1].length)
               cam = arrayOfStrings[i];
               arrayOfStrings[i] = arrayOfStrings[i+1];
               arrayOfStrings[i+1] = cam;
   }

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   
let may = 0;
let men = 0;
let inter = [];
let k = 0;
if(array1.length < array2.length){
    may =array2;
    men =array1
}else{
   may = array1;
   men = array2;
}

for(let i=0; i < may.length; i++){

   for(let j=0; j<men.length ; j++){

   }
     if(may[i] === men[j]){

      for(let l=0; l<inter.length; l++){
         if(inter[l] != may[i] ){

            inter[k] = may[i];
            k++;
         }
      }
      
     }
}
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
