import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi, faBatteryQuarter, faLocationDot } from '@fortawesome/free-solid-svg-icons'

function TipoNotificacao() {
    return(
        <div className="flex flex-row justify-center">
            <div className="flex justify-center items-center border-solid border-2 border-black rounded-lg h-11 m-2 lg:w-96 cursor-pointer hover:p-6 hover:shadow-cyan-700 hover:shadow-lg">
                <h1>Conectividade</h1>
                <FontAwesomeIcon icon={faWifi} size="lg" />
            </div>
            <div className="flex justify-center items-center border-solid border-2 border-black rounded-lg h-11 m-2 lg:w-96 cursor-pointer hover:p-6 hover:shadow-cyan-700 hover:shadow-lg">
                <h1>Saída do IPT</h1>
                <FontAwesomeIcon icon={faLocationDot} size="lg" />
            </div>
            <div className="flex justify-center items-center border-solid border-2 border-black rounded-lg h-11 m-2 lg:w-96 cursor-pointer hover:p-6 hover:shadow-cyan-700 hover:shadow-lg">
                <h1>Bateria</h1>
                <FontAwesomeIcon icon={faBatteryQuarter} size="lg" />
            </div>
        </div>
    )
}

export default TipoNotificacao