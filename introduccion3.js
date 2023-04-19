function nombre (){
    const pepe = 5;

}

function esMayor(valor1, valor2) {
    if(valor1 > valor2){
        return true;
    } else {
        return false;
    }
}

// pepe NO EXISTE

const nombreFuncion = () => {
}

const esMenor = (valor1, valor2) => {
    if(valor1 < valor2){
        return true;
    }
    return false;
}

const esMenorOIgual = (valor1, valor2) => valor1 <= valor2;

const numeros = [20, 50, 25, 3];
for (let i = 0; i < numeros.length; i++) {
    const resultado = esMayor(numeros[i], 5);
    console.log('Es '+numeros[i]+' mayor', resultado);
}

const personas = [
    {
        nombre: 'fede',
        sexo: 'masculino',
        edad: 33,
    },
    {
        nombre: 'eduardo',
        sexo: 'masculino',
        edad: 70,
    },
    {
        nombre: 'mariana',
        sexo: 'femenino',
        edad: 25,
    },
    {
        nombre: 'yolanda',
        sexo: 'femenino',
        edad: 60,
    },
    {
        nombre: 'lean',
        sexo: 'masculino',
        edad: 10,
    },
];

const esMujer = (obj) => obj.sexo === 'femenino';
const esHombre = (obj) => obj.sexo === 'masculino';

const filtrarPor = (arr, comparador) => arr.filter(comparador);

console.log(filtrarPor(personas, esMujer));
console.log(filtrarPor(personas, esHombre));