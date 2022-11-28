import Predio from "../components/Predio/Predios"
import styles from '../styles/Predios.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faHouse } from '@fortawesome/free-solid-svg-icons'

function Predios() {
    return (
        <div className="text-center justify-center " >
            <h1 className="Montserrat font-bold text-2xl text-black lg:pl-28">Prédios</h1>
            <div className="relative    ">
                <FontAwesomeIcon className="absolute lg:pl-32 pt-7 h-7 sm:pl-5" icon={faMagnifyingGlass}></FontAwesomeIcon>
                <input type="text" className={styles.input} placeholder="Digite o número do prédio"/>
            </div>
            <div>
                <Predio />
            </div>
        </div>
    )
}

export default Predios