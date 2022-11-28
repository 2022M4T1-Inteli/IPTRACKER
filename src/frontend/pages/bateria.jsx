import StatusdaBateria from "../components/Bateria/Bateria"
import styles from '../styles/Predios.module.css'


function Bateria() {
    return (
        <div className="text-center " >
            <h1 className="Montserrat font-bold text-2xl text-black lg:pl-28">Status da Bateria</h1>
            <input type="text" className={styles.input}   placeholder="Código do equipamento" />
            <div>
                <StatusdaBateria/>
            </div>
        </div>
    )
}

export default Bateria