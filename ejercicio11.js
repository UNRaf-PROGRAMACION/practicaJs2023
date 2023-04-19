// persona
const person = {
    nombre: 'nombre',
    sexo: 'sexo',
    edad: 0,
}

// personas
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

// promedio de edades
let sumaEdades = 0;
let promedioEdades = 0;
const cantidadPersonas = personas.length;

for (let i = 0; i < personas.length; i++) {
    console.log(personas[i].nombre + ' tiene '+personas[i].edad+' años')
    sumaEdades = sumaEdades + personas[i].edad;
}
promedioEdades = sumaEdades/cantidadPersonas;
console.log('El promedio de edades es: '+promedioEdades);

// nombre de la mujer con mayor edad
let mujerMayor;
console.log('mujerMayor ' + mujerMayor);
for (let i = 0; i < personas.length; i++) {
    const p = personas[i];
    if(p.sexo === 'femenino'){
        if (!mujerMayor) { // mujerMayor !== undefined
            mujerMayor = p;
        } else {
            if (p.edad > mujerMayor.edad) {
                mujerMayor = p;
            }
        }
    }
}
// console.log('mujerMayor ' + JSON.stringify(mujerMayor));
console.log(mujerMayor);

const mujeres = personas.filter(p => p.sexo === 'femenino');
console.log(mujeres);
let mujerMayor2 = { edad: 0 };
for (let i = 0; i < mujeres.length; i++) {
    if (mujeres[i].edad > mujerMayor2.edad) {
        mujerMayor2 = mujeres[i];
    }
}
console.log(mujerMayor2);