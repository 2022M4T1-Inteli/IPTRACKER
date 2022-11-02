import SideBar from "../components/SideBar"
import ESP32 from "../components/ESP32"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faDoorOpen } from '@fortawesome/free-solid-svg-icons'

function Admin() {
    return (
        <div>
            <div>
                <SideBar />
                <div className="absolute w-full sm:w-5/6 top-28 left-0 sm:top-12 sm:left-64">
                    <div className = "flex flex-col w-full gap-6 justify-center items-center">
                        <div className="flex w-full justify-center items-center">
                            <div className="w-5/6 flex justify-center items-center h-12 bg-gray-200 rounded-xl">
                                <h1 className="Montserrat">iPad / 123123123123123123</h1>
                            </div>
                        </div>
                        <div className = "w-5/6 gap-6 flex flex-col sm:flex-row">
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
                                                <FontAwesomeIcon icon={faBuilding} size="lg"/>
                                                <label className="Montserrat font-semibold">Predio 1</label>
                                            </div>
                                            <div className="flex flex-row items-center gap-2">
                                                <FontAwesomeIcon icon={faDoorOpen} size="lg"/>
                                                <label className="Montserrat font-semibold">Sala 4</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-center border-ipt">
                                        <img src = "/batGood.svg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full justify-center items-center">
                            <button className = "w-5/6 bg-green-btn hover:bg-green-600 h-12 rounded-xl font-bold Montserrat transition duration-300">Chame o equipamento</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Admin