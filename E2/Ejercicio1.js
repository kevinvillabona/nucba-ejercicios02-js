// Crear el array de objetos "Pizzas". 🍕
// 👉 Debemos crear 6 objetos como mínimo.
// 👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

// 🔥 Crear una iteración del array que imprima en consola:
// a) Las pizzas que tengan un id impar.
// b) ¿Hay alguna pizza que valga menos de $600?
// c) Los nombres de todos las pizzas.
// d) Los precios de las pizzas.
// e) El nombre de cada pizza con su respectivo precio.

// Cada respuesta debe ser, como siempre, usuario friendly. 
// Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
// Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

// Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸

const pizzas =[
    {
        id: 1,
        nombre: 'muzzarella',
        ingredientes:['Muzzarella','Aceitunas'],
        precio: 599
    },
    {
        id: 2,
        nombre: 'especial',
        ingredientes:['Muzzarella','Aceitunas','Jamon','Morron'],
        precio: 1100
    },
    {
        id: 3,
        nombre: 'panceta',
        ingredientes:['Muzzarella','Panceta','Morron'],
        precio: 1800
    },
    {
        id: 4,
        nombre: 'primavera',
        ingredientes:['Muzzarella','Aceitunas','Jamon','Tomate','Huevo'],
        precio: 1350
    },
    {
        id: 5,
        nombre: 'napolitana',
        ingredientes:['Muzzarella','Tomate','Aceitunas','Ajo','Perejil'],
        precio: 1300
    },
    {
        id: 6,
        nombre: 'capresse',
        ingredientes:['Muzzarella','Aceitunas','Tomate','Albahaca','Oliva'],
        precio: 1600
    }
];

// a) Las pizzas que tengan un id impar.
const idImpar=pizzas.filter(pizza => pizza.id % 2 ==! 0)
idImpar.forEach(pizza => console.log(`A) La pizza ${pizza.nombre} tiene un id impar`));

// b) ¿Hay alguna pizza que valga menos de $600?
const menorPrecio=(pizzas.filter(pizza => pizza.precio < 600).length)>=1?
console.log("B) Hay al menos una pizza que tiene valor menor a 600") : 
console.log("B) Todas las pizzas tienen un valor mayor a 600")

// c) Los nombres de todos las pizzas.
const nombres = pizzas.map(pizza => pizza.nombre);
console.log("C) Tenemos las siguientes pizzas: " + nombres.join(', '));

// d) Los precios de las pizzas.
const precios = pizzas.map(pizza => pizza.precio);
console.log("D) Tenemos los siguientes precios: " + precios.join(', '));

// e) El nombre de cada pizza con su respectivo precio.
pizzas.forEach(pizza => console.log(`E) La pizza ${pizza.nombre} tiene un precio de ${pizza.precio}`));
