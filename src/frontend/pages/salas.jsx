import Link from "next/link"
import Sala from "../components/Sala/Sala"
import styles from '../styles/salas.module.css'
import {faMagnifyingGlass, faHouse} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
function sala() {

    return (
        <div className="text-center">

            <div className="justify-center">
                <div className="justify-center flex">
                    <div className="rounded-lg w-80">
                        <FontAwesomeIcon className="pr-5" icon={faMagnifyingGlass}></FontAwesomeIcon>
                        <input className="w-200px border-hidden justify-center" placeholder="Digite o andar que deseja!" ></input>
                    </div>
                </div>
                <div className={styles.line}>
                    <div className={styles.responsivity} />
                        <div>
                            <p className={styles.text}>Andar 0</p>
                        </div>
                    <div className={styles.responsivity} />

                </div>
                <div className="justify-center flex">
                    <div className="bg-blue-500 m-4 w-72 border-2 border-black rounded-2xl text-white font-bold	">
                            <h2>Andar 0</h2>
                    </div>
            </div>

            <div>
                <Sala />
            </div>
            <div className="flex justify-center">
            <div className={styles.line}>
                <div className={styles.responsivity} />
                <div>
                    <p className={styles.text}>Andar 1</p>

                </div>
                <div className={styles.responsivity} />
            </div>
            </div>

            <div>
                <Sala />
            </div>
            <button id={styles.margin} className="bg-transparent border-2 rounded-full border-cyan-600 w-10 hover:bg-cyan-400 hover:border-transparent">
                <Link href="/predios"><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon></Link>
            </button>
        </div>
    )
}

export default sala