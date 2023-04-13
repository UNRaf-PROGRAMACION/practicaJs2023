const arr = [];
for (let i = 0; i < 10; i++) {
    // arr[i] = i*3;
    arr.push(i*3);
    console.log(i);
}
console.log(arr)

for (let i = 10; i >= 0; i--) {
    if (i%2===0) {
        console.log('El numero '+i+' es par');
    } else {
        console.log('El numero '+i+' es impar');
    }
    
}

// OBJETOS LITERALES
// clase
//  - template

// objeto - una instancia de una clase

// clase silla
//     propiedades
//         - patas
//         - posadera
//         - respaldar
//         - altura

// objeto silla de casa
//     propiedades
//         - patas: 4
//         - posadera: madera
//         - respaldar: plastico

const cubo6 = {
    caras: 6,
    colores: 6,
    nombre: 'rubik'
};

console.log(cubo6);
console.log(cubo6.nombre + ' tiene '+ cubo6.colores+' colores');

const auto = {
    ruedas: 4,
    color: 'red',
    usable: true,
    armas: [
        'pistola',
        'minigun',
        'misiles'
    ],
    conductor: {
        nombre: 'Javier',
        edad: 11
    }
}

console.log('Mis armas son: ')
auto.armas.forEach(element => {
    console.log(element)
});