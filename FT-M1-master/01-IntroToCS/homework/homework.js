'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
 /* var decimal = 0
 for (var i = 0; i < num.length; i++) {
  decimal = decimal +  num[i] *2**(num.length - 1 -i);
   }
 return decimal
} */

// num = '1010' split() --> [1,0,1,0] reverse --> [0,1,0,1]


num = num.split('').reverse(); // num = [0,1,0,1]
// Sum 2^Posicion * valor index
let result = 0   // i significa posición
for (let i = 0; i < num.length; i++) {
  result = result + (Math.pow(2, i)* parseInt(num[i])); // el Mat.pow eleva a la potencia  estamos diciendo
  // que al 2^0*0
  // el parseInt (inter--- o sea entero) va a convertir el segundo 0 en numero. porque ese valor index hasta ese momentoo es una string
}return result 
}
// shift + alt+ a comenta todo a la vez.
// map es usado mas para objetos q para arrays
 

function DecimalABinario(num) {
  // tu codigo aca
// return num.toString(2) */

// para pasar de decimal a binario dividir el num entre 2 hasta llegar a 0

let result = []
// KISS KEEP IT SIMPLE & STUPID
while (num >0) {    // mientras nuestro  numero sea mayor a cero ejecuta lo q hay aqui
  result.push(num%2) // le pongo el push para q me lo guarde en result.... var resto = num%2 // aca lo q le pido es gujardar el resto de las divisiones o sea 15/2 me va a guardar 1
  num = Math.floor(num/2) // math redondea y floor hacvia el piso o sea hacia abajo, math.ceil redondea hacia arriba

} return result.reverse().join('') // el metodo .join agarra todos los valores del arreglo y los vuele una string y las comillas es porque  con comillas decimos como lo va a juntar en neste caso queremnos q lo junte sin meter nada entre ellos 
                       // el metodo reverse lo da vuelta en este caso porque el binario se arma con los restos de atras para adelante

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}