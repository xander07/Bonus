const express = require('express');
const app = express();

let cursos = [{
    id: 1,
    nombre: 'Introduccion a Node.Js',
    duracion: '1 mes',
    valor: 0
},
{
    id: 2,
    nombre: 'Python para desarrollo científico',
    duracion: '3 meses',
    valor: 150000
},
{
    id: 3,
    nombre: 'MEAN stack',
    duracion: '5 meses',
    valor: 3000000
}];

let mostrarCursos = () => {
    for (const i in cursos) {
        setTimeout(function () {
            console.log('El id del curso es: ' + cursos[i].id);
            console.log('El nombre del curso es: ' + cursos[i].nombre);
            console.log('La duración del curso es de: ' + cursos[i].duracion);
            console.log('El precio del curso es: ' + cursos[i].valor + ' pesos.')
            console.log('--------------------------------------------------------');
        }, 2000 * i);
    }
}

let cursoEncontrado = (_id) => {
    var aux = '';
    for (const i in cursos) {
        if (cursos[i].id == _id) {
            aux = cursos[i];
            break;
        }
        else {
            aux = 'undefined'
        }
    }
    return aux;
}
let crearArchivo = (curso_a_inscribir, argv) => {
    if (cursoEncontrado(curso_a_inscribir.id) == 'undefined') {
        console.log('El curso no ha sido encontrado');
        console.log('-----------------------------------------');
        mostrarCursos();
    }
    else {
        texto = 'El aspirante ' + argv.n +
                ', con cédula # ' + argv.c + '\n' +
                'Se ha matriculado en el curso ' + curso_a_inscribir.nombre + '\n' +
                'cuyo id es ' + curso_a_inscribir.id + '\n' +
                'el cual tiene una duración de ' + curso_a_inscribir.duracion + '\n' +
                'y un costo de ' + curso_a_inscribir.valor + ' pesos.'
        app.get('/', function (req, res) {
  			res.send(texto)
		});
 
		app.listen(3000)
        
        };   
}

module.exports = {
    mostrarCursos,
    cursoEncontrado,
    crearArchivo
};
