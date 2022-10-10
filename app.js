/*1.  Ejercicios destructuring
Dado el siguiente objeto:*/

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
  ];
  
  /*Extrae la empleada Ana con todos sus datos personales:*/

  const [ , p2] = empleados
  console.log(p2)

  /*Extrae el email del empleado Luis --> Luis@gmail.com*/

  const [ p1] = empleados
  console.log(p1.email)

  //Dado el siguiente objeto:

  const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}
//Cambia el nombre de la propiedad “name” por “nombre

const {name: nombre} = pokemon
console.log(nombre)

//Extrae el nombre del Pokemon

const { name } = pokemon;
console.log(nombre);

//Extra el tipo de Pokemon que es

const { type } = pokemon;
console.log(type);

//Extra el movimiento “Tackle”

const {moves} = pokemon
const [ , m1] = moves
console.log(m1)

//2. Ejercicios spread/rest
//Mergea el siguiente pokémon con el Pokemon del ejercicio anterior:

const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}
const pokemonMix = {...pokemon, ...pikachu}
console.log(pokemonMix)

//Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.



function sumEveryOther(...numbers){
    const sum = numbers.reduce((a,b)=> a + b)
    console.log(sum)
}

    
sumEveryOther(6, 8, 2, 3, 1)
sumEveryOther(11, 3, 12);


/*Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.
*/

function addOnlyNums  (...grupo){

    let result =[]
    
    for (const elemento of grupo) {
    
    if(typeof elemento === "number"){
    
    result.push(elemento)
    }

}
console.log(result)

let sum = result.reduce((a,b)=> a + b)
return {
    array: grupo, 
    result: sum,
}
}
const suma = addOnlyNums(1, 'perro', 2, 4)
console.log(suma)

console.log(addOnlyNums("pepe", 3, 6, 33, 68, 1, {
    name: "pepe",
}));

/*Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.*/

function countTheArgs (...argumentos){

   console.log(argumentos.length)
};

countTheArgs('gato', 'perro'); //2
countTheArgs('gato', 'perro', 'pollo', 'oso'); //4

/*Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).*/



function combineTwoArrays(array1, array2){

    const array3 = [...array1,...array2]
    console.log(array3)

}

combineTwoArrays(['a', 'b', 'c'] , ['d', 'e', 'f']);

