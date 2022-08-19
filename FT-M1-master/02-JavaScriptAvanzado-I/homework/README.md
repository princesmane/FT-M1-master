
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

Var tiene hoisting y la otra no. 


```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // 10
  console.log(a); //  8
  var f = function(a, b, c) {
    b = a;
    console.log(b); // 8
    b = c;
    var x = 5; 
  }
  f(a,b,c); 
  console.log(b); // 9
}
c(8,9,10);
console.log(b); // 10
console.log(x); // 1
```

```javascript
console.log(bar); // undefined
console.log(baz); // error
foo(); // nada xq al largar error de baz se rompio todo "crasheado"
function foo() { console.log('Hola!'); } // nada xq al largar error de baz se rompio todo "crasheado"
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // franco 
```

```javascript
var instructor = "Tony";
console.log(instructor); // tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // franco
   }
})(); // funcion autoinvocada
console.log(instructor); // tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash"; // let respeta los bloques... solo va a vivir en este bloque
    console.log(instructor); // the flash
    console.log(pm); // reverse flash
}
console.log(instructor); // the flash
console.log(pm); // franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45 --> es $4 + 5 y concatena
"4" - 2 // 2
"4px" - 2 // Nan
7 / 0 // Infinity
{}[0] // undefined no existe 
parseInt("09") // 9
5 && 2 // 2 devuelve el flase y si ambos son verdaderos el ultimo true
2 && 5 // 5
5 || 0 // 5 devuelve el true
0 || 5 // 5  como el 0 es false.. devuelve el 5 q es true
[3]+[3]-[10] // hace "3" + "3" -10 = 23 (la suma concatena, pero la resta no por eso te deja restar)
3>2>1 // false --> 3>2 es true ... y true es 1 entonces 1>1 es false
[] == ![] // true ?????????????
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // undefined
   console.log(foo()); // 2

   var a = 1;
   function foo() {
      return 2;
   }
}

test(); // undefined
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); // undefined ????????
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname; //Aurelio de rosa
      }
   }
};

console.log(obj.prop.getFullname()); // juan perez

var test = obj.prop.getFullname; 

console.log(test()); // undefined
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1); // 1° 
   setTimeout(function() { console.log(2); }, 1000); // 4°
   setTimeout(function() { console.log(3); }, 0); // 3°
   console.log(4); // 2°
}

printing(); // 
```
