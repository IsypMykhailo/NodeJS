const portfolios = require("../models/portfolio")

// Read students
exports.get = function(request, response){
    portfolios.find({},
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
    const newPortfolio = new portfolios(request.body)
    newPortfolio.save(function(err){
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
    response.json(portfolios)
}

// Create students
exports.postOld = function(request, response){
    console.log(request.body)
    portfolios.push(request.body)
    response.sendStatus(201)
}