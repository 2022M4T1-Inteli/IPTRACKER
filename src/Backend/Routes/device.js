const express = require("express");
const router = express.Router();
const { body, param, validationResult } = require("express-validator");

const deviceController = require("../controllers/device");


//Criar registro de palestra e todos os alunos que participaram
router.post(
    "/teste",
    deviceController.teste
);

//Criar registro de palestra e todos os alunos que participaram
router.post(
    "/createDevice",
    [body("patId", "ID de Patrimonio é necessário").exists({ checkFalsy: true })],
    [body("deviceName", "Nome do Patrimonio é necessário").exists({ checkFalsy: true })],
    [body("deviceSala", "Sala do Patrimonio é necessário").exists({ checkFalsy: true })],
    [body("devicePredio", "Prédio do Patrimonio é necessário").exists({ checkFalsy: true })],
    [body("deviceHist", "Histórico Patrimonio é necessário").exists({ checkFalsy: true })],
    [body("deviceBattery", "Bateria do Patrimonio é necessário").exists({ checkFalsy: true })],
    deviceController.createDevice
);

//Exporta o ROUTER
module.exports = router;
