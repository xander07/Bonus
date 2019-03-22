const {mostrarCursos,cursoEncontrado,crearArchivo} = require('./datos');
const opciones = {
    id: {
        demand: true,
        alias: 'i'
    },
    nombre_interesado: {
        demand: true,
        alias: 'n'
    },
    cedula_interesado: {
        demand: true,
        alias: 'c'
    }
}


const argv = require('yargs')
            .command('inscribir','inscribir curso',opciones)
            .argv


if (argv._ == 'inscribir'){
    const curso_a_inscribir = cursoEncontrado(argv.id);
    crearArchivo(curso_a_inscribir,argv);
}
else if(argv._ == '') {
    mostrarCursos();
}
else{
    console.log('Ha ingresado una opción inválida');
}