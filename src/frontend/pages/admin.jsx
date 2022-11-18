import SideBar from "../components/SideBar"
import ESP32 from "../components/ESP32"

const axios = require('axios');

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faDoorOpen } from '@fortawesome/free-solid-svg-icons'

function callBuzzer() {
    console.log("callBuzzer");
    axios.get('http://localhost:3001/ligar').then(res => {
        console.log(res)
    });
    document.getElementById("btnAccept").style.display = "none";
    document.getElementById("btnCancel").style.display = "flex";
}

function cancelBuzzer() {
    console.log("cancelBuzzer");
    axios.get('http://localhost:3001/desligar').then(res => {
        console.log(res)
    });
    document.getElementById("btnCancel").style.display = "none";
    document.getElementById("btnAccept").style.display = "flex";
}

function Admin() {
    return (
        <div>
            <div>

                <div className="absolute w-full sm:w-5/6 top-28 left-0 sm:top-12 sm:left-56">
                    <div className="flex flex-col w-full gap-6 justify-center items-center">
                        <div className="flex w-full justify-center items-center">
                            <div className="w-5/6 flex justify-center items-center h-12 bg-gray-200 rounded-xl">
                                <h1 className="Montserrat">iPad / 123123123123123123</h1>
                            </div>
                        </div>
                        <div className="w-5/6 gap-6 flex flex-col sm:flex-row">
                            <div className="flex w-full justify-center items-center">
                                <div className="w-full flex justify-center items-center h-80 bg-gray-200 rounded-3xl">
                                    <ESP32 />
                                </div>
                            </div>
                            <div className="flex w-full justify-center items-center">
                                <div className="w-full flex flex-row justify-center items-center h-44 sm:h-80 bg-gray-200 rounded-3xl">
                                    <div className="w-full flex justify-center border-r-4 border-ipt">
                                        <div className="flex flex-col gap-6 justify-center items-center">
                                            <div className="flex flex-row items-center gap-2">
                                                <FontAwesomeIcon icon={faBuilding} size="lg" />
                                                <label className="Montserrat font-semibold">Predio 1</label>
                                            </div>
                                            <div className="flex flex-row items-center gap-2">
                                                <FontAwesomeIcon icon={faDoorOpen} size="lg" />
                                                <label className="Montserrat font-semibold">Sala 4</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-center border-ipt">
                                        <img src="/batGood.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="btnAccept" className="flex w-5/6 justify-center items-center">
                            <button className="w-full bg-green-btn hover:bg-green-600 h-12 rounded-xl font-bold Montserrat transition duration-300" onClick={() => { callBuzzer() }}>Chame o equipamento</button>
                        </div>
                        <div id='btnCancel' className="hidden w-5/6 justify-center items-center">
                            <button className="w-full bg-red-btn hover:bg-red-600 h-12 rounded-xl font-bold Montserrat transition duration-300" onClick={() => { cancelBuzzer() }}>Cancele o chamado do equipamento</button>
                        </div>
                        <h1 className="Montserrat font-bold text-ipt text-xl">Histórico</h1>
                        <div className="flex flex-wrap gap-6 w-5/6 mb-6 justify-center items-center">
                            <div className="w-full sm:w-5/12 flex flex-row justify-between items-center h-16 bg-gray-200 rounded-xl border-l-8 border-green-btn">
                                <h1 className="ml-2 Montserrat font-bold">1 FEV</h1>
                                <h1 className="Montserrat font-bold text-xl">20:30</h1>
                                <div className="flex flex-col mr-2">
                                    <h1 className="Montserrat font-bold">P1</h1>
                                    <h1 className="Montserrat font-bold">S4</h1>
                                </div>
                            </div>
                            <div className="w-full sm:w-5/12 flex flex-row justify-between items-center h-16 bg-gray-200 rounded-xl border-l-8 border-red-btn">
                                <h1 className="ml-2 Montserrat font-bold">1 FEV</h1>
                                <h1 className="Montserrat font-bold text-xl">20:30</h1>
                                <div className="flex flex-col mr-2">
                                    <h1 className="Montserrat font-bold">P1</h1>
                                    <h1 className="Montserrat font-bold">S4</h1>
                                </div>
                            </div>
                            <div className="w-full sm:w-5/12 flex flex-row justify-between items-center h-16 bg-gray-200 rounded-xl border-l-8 border-green-btn">
                                <h1 className="ml-2 Montserrat font-bold">1 FEV</h1>
                                <h1 className="Montserrat font-bold text-xl">20:30</h1>
                                <div className="flex flex-col mr-2">
                                    <h1 className="Montserrat font-bold">P1</h1>
                                    <h1 className="Montserrat font-bold">S4</h1>
                                </div>
                            </div>
                            <div className="w-full sm:w-5/12 flex flex-row justify-between items-center h-16 bg-gray-200 rounded-xl border-l-8 border-red-btn">
                                <h1 className="ml-2 Montserrat font-bold">1 FEV</h1>
                                <h1 className="Montserrat font-bold text-xl">20:30</h1>
                                <div className="flex flex-col mr-2">
                                    <h1 className="Montserrat font-bold">P1</h1>
                                    <h1 className="Montserrat font-bold">S4</h1>
                                </div>
                            </div>
                            <div className="w-full sm:w-5/12 flex flex-row justify-between items-center h-16 bg-gray-200 rounded-xl border-l-8 border-green-btn">
                                <h1 className="ml-2 Montserrat font-bold">1 FEV</h1>
                                <h1 className="Montserrat font-bold text-xl">20:30</h1>
                                <div className="flex flex-col mr-2">
                                    <h1 className="Montserrat font-bold">P1</h1>
                                    <h1 className="Montserrat font-bold">S4</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Admin