import SideBar from "../components/SideBar"
import Link from "next/link"
import Notificacao from "../components/Notificacao/notificacao"
import TipoNotificacao from "../components/TipoNotificacao/TipoNotificacao"

function Notificacoes() {
    return(
        <div className="justify-center grid-row">

            <div className="text-center justify-center mt-6 mb-3">
                <h1 className="Montserrat font-bold text-2xl text-black">Painel de Notificações</h1>
            </div>
            
            <div className="grid-cols-3">
                <div id="tipoNotificacao" className="grid grid-row justify-center pb-3">
                    <TipoNotificacao></TipoNotificacao>
                </div>
            </div>

            <div className="grid grid-row justify-center">
                <Notificacao></Notificacao>
            </div>
        </div>
    )
}

export const getServerSideProps = async (ctx) => {
    let cookieToken = ctx.req.cookies['token'];

    await axios.get(`${process.env.NEXT_PUBLIC_URL_SANDBOX}/User/Infos`, {
        headers: { Authorization: `Bearer ${cookieToken}` }
    }).then(response => {}).catch(error => {
        ctx.res.writeHead(302, {
        Location: '/'
        });
        ctx.res.end();
    });

    return {props: {}};
}

export default Notificacoes