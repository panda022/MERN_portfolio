// where to register the express app

require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const portfolioRoutes = require('./routes/portfolios')

// express app
const app = express()

// middleware,between request and response on the server 
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })

// routes
app.use('/api/portfolios', portfolioRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 

