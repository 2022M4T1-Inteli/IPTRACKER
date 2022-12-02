import Link from "next/link";
import ContainerEquipamentos from "../components/ContainerEquipamentos/ContainerEquipamentos";
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from '../styles/opcoes.module.css'



function Opcoes() {
    return (
        <div className="text-center justify-center flex">
            <div className={styles.middle}>
                <h1 className="text-xl Montserrat">Escolha o tipo preferido de busca!</h1>
                
                <div className="mt-24">
                    <Link href="/buscaId">
                        <button className={styles.button}>BUSCA POR ID</button>
                    </Link>
                </div>
               
                <div className="mt-12">
                    <Link href="/predios">
                    <button className={styles.button}>BUSCA POR PRÉDIO</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Opcoes
