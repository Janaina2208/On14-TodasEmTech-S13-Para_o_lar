//18
const mongoose = require("mongoose")

//20 - link do mongo atlas ou compass
//33Recorta e cola no .env depois de cria-lo
const MONGODB_URI = process.env.MONGODB_URI
//19 funçao de conexao mongoose x mongo. funçao assincrona pq espera resposta externa
const connect = async () => {
    try {//aqui cria a configuração do banco
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("banco conectado!")
    } catch (error) {
        console.log(error.message)        
    }
}
//21
module.exports = {
    connect
}