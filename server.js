const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const logger = require('morgan')
const connectDB = require('./config/db')
const mainRoutes = require('./routes/main')
const resourceRoutes = require('./routes/resources')

// Load config by calling dotenv and creating an object with the path
require('dotenv').config({ path: './config/.env' })

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))


app.use('/', mainRoutes) //Things that need a route will go to the /main file to find the correct route
app.use('/', resourceRoutes)

// Port
const PORT = process.env.PORT || 5017

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    )