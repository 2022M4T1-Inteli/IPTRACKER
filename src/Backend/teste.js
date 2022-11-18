const infos = {"ssid":["esp-S1P5","esp-S2P5","REDE HB","Martina 2G","MAXY2 ","C@LVET","Os Beibinhos 1.0","REDE HB","Yuri2G","Romeu","HOUSI_506_2G","Cazil2.4","mv10510404_EXT_A","ESCRITORIO PAULINO"],"rssi":[-34,-35,-44,-56,-66,-66,-66,-79,-80,-88,-88,-90,-90,-93]}

let newSSIDs = {"ssid": [], "rssi": []};

async function getRoom(array) {

    array.ssid.map(async (each, index) => {
        if(each[0] == "e" && each[1] == "s" && each[2] == "p") {
            newSSIDs.ssid.push(each);
            newSSIDs.rssi.push(array.rssi[index]);
        }
    })

    if (newSSIDs.ssid.length > 1) {
        const max = Math.max(...newSSIDs.rssi);
        const index = newSSIDs.rssi.indexOf(max)
        const location = newSSIDs.ssid[index].split("-")[1]
        const room = location[1]
        const building = location [3]

        console.log(`O objeto está localizado na sala ${room} do prédio ${building}`)
    }
}

getRoom()

// async function locateRoom() {
//     await getRoom(infos);
//     if (newSSIDs.ssid.length > 1) {
//         const min = Math.min(newSSIDs.rssi);
//         console.log(min)
//     }
//     console.log(newSSIDs)
// }

// locateRoom();