//15 instala o mongoose no git npm i mongoose
//16
const mongoose = require('mongoose')
const estabelecimentosSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    //     "likes": 1,
    //     "deslikes": 0,
    nome:{
        type: String,
        unique: true,//não consegue inserir o mesmo nome2x
        required: true
    },
    categoria:{
        type: String,
        required: true
    },
    endereço:{
        type: String,
        required: true
    },
    número:{
        type: Number
    },
    bairro:{
        type: String,
        required: true
    },
    cidade:{
        type: String,
        required: true
    },
    telefone:{
        type: String
    },
    pagamento:{
        type: [String]
    },
    delivery:{
        type: Boolean
    },
    criadoEm:{
        type: Date,
        default: new Date()
    }
})//new é atribuir dado àquela instancia vazia

//17 exporta o model.... dá um nome pra pea collection e após a vírgula chama a const criada
module.exports = mongoose.model("estabelecimento", estabelecimentosSchema)