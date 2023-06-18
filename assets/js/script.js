console.log('Tarea 6 - Iteraciones y funciones Javascript');

// Paso 0: Declaración e inicialización de variables

const numeroFibonacci = 1000;

const pokemones = ['Pikachu',  'Charmander',  'Bulbasaur',  'Squirtle']

const pokemonLst = [
                    {
                        nombre: 'Pikachu',
                        tipo: 'Electrico'
                    },
                    {
                        nombre: 'Charmander',
                        tipo: 'Fuego',
                    },
                    {
                        nombre: 'Bulbasaur',
                        tipo: 'Planta'
                    },
                    {
                        nombre: 'Squirtle',
                        tipo: 'Agua'
                    },
                    {
                        nombre: 'Charmeleon',
                        tipo: 'Fuego'
                    },
                    {
                        nombre: 'Weedle',
                        tipo: 'bicho'
                    },
                    {
                        nombre: 'Charizard',
                        tipo: 'Fuego'
                    }
   ]



// Paso 1: Declaracion de funciones para Fibonacci

// Funcion 1: Contruye el arreglo de valores Fibonacci para procesar 
   function fibo_list(numero){

    // Paso 0: Se crea la situación base de Fibonacci [F(0) = 0 y F(1) = 1]
    const traza = [0, 1];

    // Paso 1: Para casos mayores a 1: se usa la función para calcular los valores Fibonacci
    //                                 el resultado se guarda en el arreglo de traza
    for(let i = 2; i <= numero ; i++){
        traza[i] = traza[(i-1)] + traza[(i-2)];
    }

    return traza;

}

// Funcion 2: Llama a la generación de Fibonacci y en base al filtro se despliegan los valores necesarios
//            Opciones de tipoFiltro: 1 - Impares | 2 - pares | otro valor - todos los resultados
function filtrar_fibo(numero, tipoFiltro){

    // Crear arreglo con los valores Fibonacci
    let arreglo = fibo_list(numero);

    // Filtro para el despliegue de datos de salida
    switch(tipoFiltro){
        case 1:
            return arreglo.filter((elemento, i) => {
                 return ((i%2) !== 0);
                });
            break;
        case 2:
            return arreglo.filter((elemento, i) => {
                return ((i%2) === 0);
               });
            break;
        default:
            return arreglo;
    }    

}

// Paso 3: Despliegue y métricas del proceso 

console.log("Calculo de Fibonacci para valor: " + numeroFibonacci);
console.log("Fibonacci números del 0 al " + numeroFibonacci + ".");
const fibonacci_base = filtrar_fibo(1000, 0);
console.log("Resultado: " + fibonacci_base); // Valores regulares
console.log("Fibonacci números impares del 0 al " + numeroFibonacci + ".");
const fibonacci_impar = filtrar_fibo(1000, 1);
console.log("Resultado: " + fibonacci_impar); // Valores impares
console.log("Fibonacci números pares del 0 al " + numeroFibonacci + ".");
const fibonacci_par = filtrar_fibo(1000, 2);
console.log("Resultado: " + fibonacci_par); // Valores pares
console.log("Valores de comparación:");
console.log("Total de elementos fibonacci 0-1000: " + fibonacci_base.length);
console.log("Total de elementos fibonacci impares 0-1000: " + fibonacci_impar.length);
console.log("Total de elementos fibonacci pares 0-1000: " + fibonacci_par.length);
const ultimos_base = fibonacci_base.slice(-2);
const ultimo_impares = fibonacci_impar.slice(-1);
const ultimo_pares = fibonacci_par.slice(-1);
console.log("Últimos 2 elementos de Fibonacci base : " + ultimos_base);
console.log("Último elemento de Fibonacci impares : " + ultimo_impares);
console.log("Último elemento de Fibonacci pares : " + ultimo_pares);













// Situacion 2: Tomar un arreglo de Pokemons y devolver sus nombres en mayuscula

// Paso 1: Utilizar map para crear un nuevo array con los nombres en mayuscula

const pokemonesMayusc = pokemones.map(pokemon => pokemon.toUpperCase())
console.log("Lista de Pokémons en mayúscula.");
console.log(pokemonesMayusc);


// Situacion 3: Hacer que una lista de objetos sea filtrada con únicamente los pokemon de tipo fuego


const pokemonFuegoLst = pokemonLst.filter(pokemon => {
    return (pokemon.tipo === 'Fuego');
})

console.log("Lista de Pokémons de tipo fuego.");
console.log(pokemonFuegoLst);

