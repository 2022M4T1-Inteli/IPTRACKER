import Link from "next/link";
import ContainerEquipamentos from "../components/ContainerEquipamentos/ContainerEquipamentos";

import {faHouse, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from '../styles/equipamentos.module.css'


function equipamentos() {
    return (
        <div className="text-center mt-5">
            <h1 className="text-lg font-bold">Sala x - Equipamentos</h1>
            <div className="justify-center flex">
                    <div className="rounded-lg w-80">
                        <FontAwesomeIcon className="pr-5" icon={faMagnifyingGlass}></FontAwesomeIcon>
                        <input className="w-70 border-hidden justify-center" placeholder="Digite o ID que deseja!" ></input>
                    </div>
                </div>
            <div>
                <ContainerEquipamentos></ContainerEquipamentos>
            </div>
        <button id={styles.margin} className="bg-transparent border-2 rounded-full border-cyan-600 w-10 hover:bg-cyan-400 hover:border-transparent">
            <Link href="/salas"><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon></Link>
        </button>
        </div>
    )
}

export default equipamentos