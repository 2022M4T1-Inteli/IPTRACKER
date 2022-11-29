require('dotenv').config();
const mongoose = require('mongoose');
const { ERROR } = require('sqlite3');

let newSSIDs = { "ssid": [], "rssi": [] };

async function getRoom(array) {
    if (array.ssid == "" || array.rssi == "") {
        throw new Error("Sem salas por perto");
    }

    array.ssid.map(async (each, index) => {
        if (each[0] == "i" && each[1] == "p" && each[2] == "t" && each[3] == "-") {
            newSSIDs.ssid.push(each);
            newSSIDs.rssi.push(array.rssi[index]);
        }
    })

    if (newSSIDs.ssid.length > 1) {
        const max = Math.max(...newSSIDs.rssi);
        const index = newSSIDs.rssi.indexOf(max)
        let location = newSSIDs.ssid[index].split("-")[1]
        location = location.split("_")
        const room = location[0]
        const building = location[1]

        return {
            "room": room,
            "building": building
        }
    } else {
        let location = newSSIDs.ssid[0].split("-")[1]
        location = location.split("_")
        const room = location[0]
        const building = location[1]

        return {
            "room": room,
            "building": building
        }
    }
}

const Patrimonio = require('../models/Devices');

class Device {
    async teste(content) {
        let sala;
        let predio;

        try {
            const { room, building } = await getRoom(content);
            sala = room;
            predio = building;
        } catch (err) {
            throw new Error(err);
        }

        console.log("O objeto está na sala ", sala, " do prédio ", predio)

        newSSIDs = { "ssid": [], "rssi": [] };

        return `O objeto está na sala ${sala} do prédio ${predio}`;
    }

    async pegarTodos() {
        try {
            return await Patrimonio.find()
        } catch (error) {
            throw new ERROR("erro ao pegar todos")
        }
    }

    async createDevice(patID, deviceName, deviceSala, devicePredio, deviceHist, deviceBattery) {
        const actualData = new Date().toUTCString();

        const device = new Patrimonio({
            patrimonioId: patID,
            name: deviceName,
            sala: deviceSala,
            predio: devicePredio,
            historico: deviceHist,
            batery: deviceBattery,
            created_at: actualData
        })

        try {
            await device.save();
            return device;
        } catch {
            throw new Error("Erro ao criar o dispositivo");
        }
    }

    async getHistory({ patID }) {

        //Consertar a maneira que busca no mongo
        try {
            const result = await Patrimonio.findOne({patrimonioId:patID});
            return result;
        } catch {
            throw new Error("Erro ao buscar o dispositivo");
        }
    }

    async getPrediosSalasEquipamentos(){
        // code here
    }
}

module.exports = {
    Device,
}