const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({ path:'config.env'})

const connect = async() => {
    try {
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true
        })

        console.log(`MongoDB Connected: ${con.connection.host}`)
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = connect