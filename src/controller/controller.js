var Stud = require('../model/schema')
const jwt = require('jsonwebtoken')
const { restart } = require('nodemon')

var i=0

//handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code)
}

// we will use this to give an age to the jwt created
var maxAge = 3 * 60 *60
var createToken = (id) => {
    return jwt.sign({ id }, 'student secret', {
        expiresIn: maxAge
    })
}

exports.loginRoutePOST = async (req, res) => {

    var {text, email,  password} = req.body 

    try{

        if(password != "MATHSASSOCGR2") {
            return res.redirect('/')
        }else{
            
            var newStudent = await Stud.create({ teamname:text, email, coins: 500, i})
            var token = createToken(newStudent._id)
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000})
            res.status(201).redirect('/instructions')
        }
    }catch(err) {
        handleErrors(err)
        res.status(400).send('error! user not created')
    } 
    
}

exports.afterGenreCoins = async (req, res) => {
    const token = req.cookies.jwt
    var newcoins = req.body.Final_Coins

    jwt.verify(token, 'student secret', async (err, decodedToken) => {
        // let stud = await Stud.findById(decodedToken.id)

        Stud.findByIdAndUpdate(decodedToken.id, { coins: newcoins }, () => { //error
            if (err){
                console.log(err)
                res.redirect('/')
            }
            // else{
            //     // console.log("Updated Coins of User")
            //     // res.send(newcoins)
            //     res.redirect('/question')
            // }
        })

        
    })
}

exports.finalScore = async (req, res) => {
    const token = req.cookies.jwt
    var newcoins = req.body.new_coins

    jwt.verify(token, 'student secret', async (err, decodedToken) => {
        // let stud = await Stud.findById(decodedToken.id)

        Stud.findByIdAndUpdate(decodedToken.id, { coins: newcoins }, () => { //error
            if (err){
                console.log(err)
            }
            else{
                // console.log("Updated Coins of User")
                // res.send(newcoins)
                res.redirect('/choosegenre')
            }
        })

        
    })
}

exports.variable = i