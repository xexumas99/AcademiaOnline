const database = require('../data/data.store');
const _ = require('lodash');

const type = {
    Estudiante: {
        courses: parent => {
            
            const cursosLista = []

            parent.courses.map( e => {
                cursosLista.push(_.filter(database.courses, ['id', e])[0])
            })

            return cursosLista
        }
    },
    Curso: {
        students: parent => {
            const estudiantesLista = []
            const idCurso = parent.id

            database.students.map(e => {
                if (e.courses.filter(id => id === idCurso) > 0) {
                    estudiantesLista.push(e)
                }
            })

            return estudiantesLista
        },
        path: parent => `https://www.udemy.com${parent.path}`
    }
}

module.exports = type
