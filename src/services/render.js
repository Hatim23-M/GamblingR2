const Stud = require('../model/schema')
const jwt = require('jsonwebtoken')

var i = require('../controller/controller').variable

exports.loginRoute = (req, res) => {
    res.render('landingpage')
}

exports.instructionsRoute =  (req, res) => {
    res.render('instructions')
}

exports.choosegenreRoute = (req, res) => {
    const token = req.cookies.jwt
    jwt.verify(token, 'student secret', async (err, decodedToken) => {
        let stud = await Stud.findById(decodedToken.id)
        var User_Coins = stud.coins
        var i = stud.i
        j=i++
        console.log(User_Coins)
        res.render('Genre', {
            coins: User_Coins,
            i: j
        })
    })

    
}

exports.questionRoute = (req, res) => {
    const token = req.cookies.jwt
    jwt.verify(token, 'student secret', async (err, decodedToken) => {
        let stud = await Stud.findById(decodedToken.id)
        var User_Coins = stud.coins
        console.log(User_Coins)
        res.render('main', {User_Coins})
    })
}

exports.disqualifiedRoute = (req, res) => {
    res.render('disqualified')
}
exports.completedRoute = (req, res) => {
    res.render('won')
}

exports.ThankYouRoute = (req, res) => {
    res.send('Thank You Working')
}


exports.WrongRoute = (req, res) => res.redirect('/')
