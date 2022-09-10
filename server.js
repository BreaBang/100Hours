const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const MongoStore = require('connect-mongo') //! unlike traversy Media - don't added session here. 
const connectDB = require('./config/db')
const { default: mongoose } = require('mongoose')


// Load config by calling dotenv and creating an object with the path
dotenv.config({path: './config/.env'})

connectDB()

const app = express()


// Static Folder named public
app.use(express.static(path.join(__dirname, 'public'))) //__dirname means go to the root directory, then look for a public folder. 


const PORT = process.env.PORT || 5017

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    )