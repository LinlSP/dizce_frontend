////////////////////////////////////////////MODULES
const express = require('express')
const cors = require('cors')
const path = require('path')
// const mongoose = require('mongoose')
// const Schema = mongoose.Schema
require('dotenv').config()

////////////////////////////////////////////IMPORTS
////////////////////////////////////////////CONSTANTS
const app = express()
const { PORT } = process.env
const frontendRoutes = ['/','/about','/contact','/resources','/services','/*']
////////////////////////////////////////////SETTINGS
app.use(cors())
app.use(express.static('../client/dist'));
////////////////////////////////////////////BACKEND ROUTES
////////////////////////////////////////////FRONTEND ROUTES

frontendRoutes.map((route, index)=>{
  return (
    app.get(route, function (req, res) {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
      })
    })         
  )
})
    
////////////////////////////////////////////RETURNING SERVER
app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`)
})
