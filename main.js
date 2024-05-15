'use strict';

//Soluzione numero uno
for (let numeroCiclo=1; numeroCiclo<=100; numeroCiclo++){

    let restoDivisoTre = numeroCiclo % 3;
    let restoDivisoCinque = numeroCiclo % 5;

    if (restoDivisoTre === 0 && restoDivisoCinque === 0) {
        console.log('FizzBuzz')
    } else if (restoDivisoTre === 0) {
        console.log('Fizz');
    } else if (restoDivisoCinque === 0) {
        console.log('Buzz');
    } else {
        console.log(numeroCiclo)
    }
}

// Soluzione numero 2 (un po' più ragionata, elimino però l'utilizzo di 2 variabili accorciando il codice)

// for (let numeroCiclo = 1; numeroCiclo <= 100; numeroCiclo++) {
//     if (numeroCiclo % 15 === 0) {
//         console.log('FizzBuzz');
//     } else if (numeroCiclo % 3 === 0) {
//         console.log('Fizz');
//     } else if (numeroCiclo % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(numeroCiclo);
//     }
// }



