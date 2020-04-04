if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const port = process.env.PORT || 8080
const cors = require('cors')

const app = express()
// Allow Cors
app.use(cors())
// JSON Middleware
app.use(express.json())
// ALLOW CORS

// Sync database and spin up server
const { sequelize } = require('./db/models')
sequelize.sync().then(async () => {
  app.listen(port, () =>
    console.info(`Express router listening on port ${port}!`)
  )
})
