const { validationResult } = require('express-validator')
const device = require('../services/device')
require('express-async-errors')

const Device = new device.Device()

const teste = async (req, res) => {
    //Pega as infos da requisição
    const content  = req.body

    try {
        //Tratamento das respostas do método da classe
        const result = await Device.teste(content);
        res.send(result)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const createDevice = async (req, res) => {
    const { patId, deviceName, deviceSala, devicePredio, deviceHist, deviceBattery } = req.body;

    //Valida se algum paremetro é inválido
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: errors.errors[0].msg,
        })
    }

    try {
        //Tratamento das respostas do método da classe
        const result = await Device.createDevice(patId, deviceName, deviceSala, devicePredio, deviceHist, deviceBattery);
        res.send(result)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const getHistory = async (req, res) => {
    const { patId } = req.body;

    //Valida se algum paremetro é inválido
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: errors.errors[0].msg,
        })
    }

    
    try {
        //Tratamento das respostas do método da classe
        const result = await Device.getHistory(patId);
        res.send(result)
    } catch (err) {
        res.status(500).send(err.message)
    }
}


//Exporta as funções do controller para o ROUTER
module.exports = {
    teste,
    createDevice,
    getHistory
}