const database = require('../data/data.store');
const _ = require('lodash');

const query = {
    estudiantes: () => {
        return database.students
    },
    estudiante: (_, {id}) => {

        const estudent = database.students.find(e => {
            return e.id == id
        })

        return estudent != null ? estudent : {id: "-1", name: "NOT FOUND", email: '', courses: []}
    },
    cursos: () => {
        return database.courses
    },
    curso: (_, {id}) => {

        const curso = database.courses.find(e => {
            return e.id == id
        })

        return curso != null ? curso : {
            id: "-1",
            title: "NOT FOUND",
            description: "NOT FOUND",
            clases: 0,
            time: 0.0,
            level: "TODOS",
            logo: "",
            path: "",
            teacher: "",
            reviews: []
        }
    },
}

module.exports = query