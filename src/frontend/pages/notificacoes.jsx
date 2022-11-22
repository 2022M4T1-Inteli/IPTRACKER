import SideBar from "../components/SideBar"
import Link from "next/link"
import Notificacao from "../components/Notificacao/notificacao"
import TipoNotificacao from "../components/TipoNotificacao/TipoNotificacao"

function Notificacoes() {
    return(
        <div className="justify-center flex-row">

            <div className="text-center justify-center">
                <h1 className="Montserrat font-bold text-2xl text-black">Painel de Notificações</h1>
            </div>
            
            <div id="tipoNotificacao" className="flex flex-row justify-center">
                <TipoNotificacao></TipoNotificacao>
            </div>

            <div className="flex flex-row justify-center">
                <Notificacao></Notificacao>
            </div>
        </div>
    )
}

export default Notificacoes