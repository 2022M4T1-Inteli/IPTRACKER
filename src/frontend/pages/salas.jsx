import Link from "next/link"
import Sala from "../components/Sala/Sala"
import styles from '../styles/salas.module.css'
import stylePredio from '../styles/Predios.module.css'
import { faMagnifyingGlass, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function sala() {

    return (
        <div className="flex justify-center text-center">
            <div className="">

                <h1 className="Montserrat font-bold text-2xl">Salas</h1>

                <div className="relative">
                    <FontAwesomeIcon className="absolute lg:pl-3 pt-7 h-7 pl-5" icon={faMagnifyingGlass}></FontAwesomeIcon>
                    <input type="text" className={stylePredio.inputSala} placeholder="Digite a sala que deseja !" />
                </div>


                {/* <div className={styles.line}>
                    <div className={styles.responsivity} />
                    <div>
                        <p className={styles.text}>Andar 0</p>
                    </div>
                    <div className={styles.responsivity} />

                </div> */}

                {/* <div className="flex justify-center">
                    <div className={styles.line}>
                        <div className={styles.responsivity} />
                        <div>
                            <p className={styles.text}>Andar 1</p>

                        </div>
                        <div className={styles.responsivity} />
                    </div>
                </div> */}

                <div>
                    <Sala />
                </div>

                {/* <button id={styles.margin} className="bg-transparent border-2 rounded-full border-cyan-600 w-10 hover:bg-cyan-400 hover:border-transparent">
                    <Link href="/predios"><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon></Link>
                </button> */}
            </div>
        </div>
    )
}


export default sala