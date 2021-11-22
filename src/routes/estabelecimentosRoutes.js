//10 - cria a pasta routes e o arquivo routes.js
//11
const express = require('express')
const router = express.Router()
//25 importa
const controller = require("../controller/estabelecimentosController")
//26 cria um endpoint
router.get("/all", controller.getAll)
//extra
router.get("/getName", controller.estabelecimentoPorNome)
//32
router.post("/create", controller.createEstabelecimentos)
//36 DEMANDA: atualizar uma nota
router.patch("/update/:id", controller.updateEstabelecimentoById)
//38 
router.delete("/delete/:id", controller.deleteEstabelecimento)
//12
module.exports = router