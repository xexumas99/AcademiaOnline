const database = require('../data/data.store');
const _ = require('lodash');

const mutation = {
    cursoNuevo: (__, {curso}) => {

        const itemCurso = {
            id: (database.courses.length + 1).toString(),
            title: curso.title,
            description: curso.description,
            clases: curso.clases,
            time: curso.time,
            level: curso.level,
            logo: curso.logo,
            path: curso.path,
            teacher: curso.teacher,
            reviews: []
        }

        if (database.courses.filter(e => e.title === itemCurso.title ).length === 0) {
            
            database.courses.push(itemCurso)
    
            return itemCurso
        }
        else{
            return {
                id: "-1",
                title: "DUPLICATED",
                description: "",
                clases: 0,
                time: 0.0,
                level: "ALL",
                logo: "",
                path: "",
                teacher: "",
                reviews: []
            }
        }


    },
    modificarCurso: (__, {curso}) => {
        const elementoExiste = _.findIndex(database.courses, (e) => {
            return e.id === curso.id
        })

        if(elementoExiste > -1){
            const valoraciones = database.courses[elementoExiste].reviews

            curso.reviews = valoraciones

            database.courses[elementoExiste] = curso

            return database.courses[elementoExiste]
        }
        else{
            return {
                id: "-1",
                title: "NOT FOUND",
                description: "",
                clases: 0,
                time: 0.0,
                level: "ALL",
                logo: "",
                path: "",
                teacher: "",
                reviews: []
            }
        }


    },
    eliminarCurso: (__, {id}) => {
        const borraCurso = _.remove(database.courses, (e) => {
            return e.id === id
        })

        if(borraCurso[0] !== undefined){
            return borraCurso[0]
        }
        else{
            return {
                id: "-1",
                title: "NOT FOUND",
                description: "",
                clases: 0,
                time: 0.0,
                level: "ALL",
                logo: "",
                path: "",
                teacher: "",
                reviews: []
            }
        }


    },
}

module.exports = mutation