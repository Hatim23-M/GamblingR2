const express = require('express')

//instead of creating another const app = express() we create the routers
const route = express.Router()

const services = require('../services/render')
const postmethod = require('../controller/controller')
const { Router } = require('express')
const { requireAuth, checkUser } = require('../middleware/authmiddleware')

/** 
 * @description Check if user exists
 * @method middleware
*/

// route.get('*', checkUser)

/** 
 * @description Root Route
 * @method GET/
*/

// notice how we have used callback function for every route, we will seperate this so that we can maintain it in the services folder.
route.get('/', services.loginRoute)

/** 
 * @description Login Page
 * @method Post/login
*/

route.post('/', postmethod.loginRoutePOST)

/** 
 * @description Login Page
 * @method GET/Instructions
 * Also check if the user is authenticated
*/

route.get('/instructions', requireAuth, services.instructionsRoute)

/** 
 * @description Choose Genre Page
 * @method GET/choosegenre
*/

route.get('/choosegenre', services.choosegenreRoute)

/** 
 * @description Choose Genre Page (Calculate Coins)
 * @method Post/choosegenre
*/

route.get('/choosegenre', postmethod.afterGenreCoins)

route.get('/question', services.questionRoute)

route.post('/question', postmethod.finalScore)

/** 
 * @description Question Page
 * @method GET/question
*/

route.get('/disqualified', services.disqualifiedRoute)

route.get('/completed', services.completedRoute)

route.get('/thankyou', services.ThankYouRoute)

/** 
 * @description If someone goes to any other route then they are redirected to login page
*/

route.get('*', services.WrongRoute)

module.exports = route