const express = require('express')
const cors = require('cors')
// const mongoose = require('mongoose')
// const Schema = mongoose.Schema

require('dotenv').config()

const app = express()
app.use(cors())

const { PORT } = process.env

app.get('/', function (req, res) {
  res.send('Hallo dies ist Dizce')
})

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`)
})
