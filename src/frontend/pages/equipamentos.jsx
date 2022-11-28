import Link from "next/link";
import ContainerEquipamentos from "../components/ContainerEquipamentos/ContainerEquipamentos";

import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from '../styles/equipamentos.module.css'
import stylePredio from '../styles/Predios.module.css'


function equipamentos() {
    return (
        <div className="text-center mt-5">
            <h1 className="Montserrat font-bold text-2xl">Equipamentos</h1>
            <div className="justify-center flex">

                <div className="relative">
                    <FontAwesomeIcon className="absolute lg:pl-3 pt-7 h-7 pl-5" icon={faMagnifyingGlass}></FontAwesomeIcon>
                    <input type="text" className={stylePredio.inputSala} placeholder="Digite a sala que deseja !" />
                </div>

            </div>
            <div>
                <ContainerEquipamentos></ContainerEquipamentos>
            </div>
            {/* <button id={styles.margin} className="bg-transparent border-2 rounded-full border-cyan-600 w-10 hover:bg-cyan-400 hover:border-transparent">
            <Link href="/salas"><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon></Link>
        </button> */}
        </div>
    )
}

export default equipamentos