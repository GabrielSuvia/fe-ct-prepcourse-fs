Array.prototype.modificarArray = function (){

    const arreglo = [];

    for(var i = 0; i< this.length; i++){
          if(this[i]>3){
                  arreglo.unshift(true);
          }else{
                  arreglo.push(this[i]);
          }
    }

    return arreglo;
}

var arregloNew = [1,3,5,7,8];
var arregloModificado = arregloNew.modificarArray();
console.log(arregloModificado)
