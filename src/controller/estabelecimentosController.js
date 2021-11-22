//13 - em src cria a pasta controller e dentro dela o arquivo controler.js
//23- por boas práticas a const da classe inicia com letra maiuscula
const EstabelecimentosSchema = require('../models/estabelecimentoSchema')
const mongoose = require('mongoose')

//24 primeira coisa é um getAll pra obter toaos os estabelecimentos
const getAll = async (req, res) => {
    try {
        const estabelecimentos = await EstabelecimentosSchema.find()
        res.status(200).json(estabelecimentos)
    } catch (error) {
        res.status(500).json({
            messagem:error.message
        })
    }
}
//EXTRA procurando por outro parametro
const estabelecimentoPorNome = async (req, res) => {
    try {
        const estabelecimentoEncontrado = await EstabelecimentosSchema.find({nome: req.query.nome})
        res.status(200).json(estabelecimentoEncontrado)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
    

//29
const createEstabelecimentos = async (req, res) => {
    try {
        const newEstabelecimento = new EstabelecimentosSchema({
            _id: new mongoose.Types.ObjectId(),
            nome: req.body.nome,
            categoria: req.body.categoria,
            endereço: req.body.endereço,
            número: req.body.número,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            telefone: req.body.telefone,
            pagamento: req.body.pagamento,
            delivery: req.body.delivery
        })
        //30
        const estabelecimentoSalvo = await newEstabelecimento.save()
        res.status(200).json({
            message:"Estabelecimento adicionado com sucesso!",
            estabelecimentoSalvo
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
//35 atualização do item
const updateEstabelecimentoById = async (req, res) => {
    try {//definir informações q podem ser alteradas na nota.
        const findEstabelecimento = await EstabelecimentosSchema.findById(req.params.id)//find para achar a nota, achada através no noteSchema
        console.log(findEstabelecimento)

        if (findEstabelecimento) {//definir ação a ser tomada quando achar o id
            findEstabelecimento.nome = req.body.nome || findEstabelecimento.nome//ou vc coloca o valor da atualização ou mantem o existente
            findEstabelecimento.telefone = req.body.telefone || findEstabelecimento.telefone//idem pro titulo
            findEstabelecimento.pagamento = req.body.pagamento || findEstabelecimento.pagamento
            findEstabelecimento.delivery = req.body.delivery || findEstabelecimento.delivery
        }//para data de atualização pode findEstabelecimento.updateAt=

        const savedEstabelecimento = await findEstabelecimento.save()//salva alteração e executa apois a execução do código
        console.log('APÓS ATUALIZAÇÃO', savedEstabelecimento)

        res.status(200).json({//envia resposta
            message: "Estabelecimento atualizado com sucesso!!!!",
            savedEstabelecimento
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
//37
const deleteEstabelecimento = async (req, res)=>{
    try {
        const estabelecimentoEncontrado = await EstabelecimentosSchema.findById(req.params.id)

        await estabelecimentoEncontrado.delete()

        res.status(200).json({
            messagem: estabelecimentoEncontrado.nome + "Estabelecimento deletado com sucesso."
        })
    } catch (error) {
        res.status(400).json({
            messagem: error.message
        })
    }
}
//14 - já deixa pronto o exports. resumo aula 30/10 em 3:22:00
module.exports = {
    getAll,
    //31
    createEstabelecimentos,
    //36
    updateEstabelecimentoById,
    //38
    deleteEstabelecimento,
    //extra
    estabelecimentoPorNome
}