const students = require("../models/student")

// Read students
exports.get = function(request, response){
    students.find({},
        function(err,all){
        if(err){
            console.log(err)
            return err
        }
        response.json(all)
        })
}

// Create students
exports.post = function(request, response){
    console.log(request.body)
    const newStudent = new students(request.body)
    newStudent.save(function(err){
        if(err){
            console.log(err)
            return err
        }
        response.sendStatus(201)
    })
}

//*----------------------------------------------------

//let students = []
//students[0] = {id:1, name:"Ivanov"}
//students[1] = {id:2, name:"Petrov"}

// Read students
exports.getOld = function(request, response){
    response.json(students)
}

// Create students
exports.postOld = function(request, response){
    console.log(request.body)
    students.push(request.body)
    response.sendStatus(201)
}