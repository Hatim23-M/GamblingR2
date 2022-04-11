const jwt = require('jsonwebtoken')
const Stud = require('../model/schema')

const requireAuth = ( req, res, next) => {

    const token = req.cookies.jwt

    //check json web token exists and is valid

    if(token) {
        jwt.verify(token, 'student secret', (err, decodedToken) => {
            if(err) {
                console.log(err.message)
                res.redirect('/auth/login')
            } else {
                // console.log(decodedToken)
                next()
            }
        })
    }
    else {
        res.redirect('/')
    }
}

//check current user
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt

    if(token) {
        jwt.verify(token, 'student secret', async (err, decodedToken) => {
            if(err) {
                console.log(err.message)
                res.locals.stud = null
                next()
            } else {
                // console.log(decodedToken)
                let stud = await Stud.findById(decodedToken.id)
                res.locals.stud = stud
                next()
            }
        })
    }
    else {
        res.locals.stud = null
        next()
    }
} 

module.exports = { requireAuth, checkUser }