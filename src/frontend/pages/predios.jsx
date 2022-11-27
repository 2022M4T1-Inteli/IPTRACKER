import Predio from "../components/Predio/Predios"
import styles from '../styles/Predios.module.css'


function Predios() {
    return (
        <div className="text-center justify-center " >
            <h1 className="Montserrat font-bold text-2xl text-black lg:pl-28">Prédios</h1>
            <input type="text" className={styles.input}   placeholder="Digite o número do prédio" />
            <div>
                <Predio/>
            </div>
        </div>
    )
}

export default Predios