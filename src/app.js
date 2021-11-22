//4
const express = require('express')
//5
const cors = require('cors')
//34 importa e depois cria o arquivo .env.example
require('dotenv-safe').config()
//22
const db = require('./database/mongoConfig')
//27
const estabelecimentoRoutes = require('./routes/estabelecimentosRoutes')

//6
const app = express()
//7
app.use(cors())
app.use(express.json())
//28
app.use("/estabelecimento", estabelecimentoRoutes)

//23
db.connect()

//8
module.exports = app
//9 - vai no git e dá npm start pra ver se está rodando certo