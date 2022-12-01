import Link from "next/link"
import { useRouter } from "next/router"
import Sala from "../../components/Sala/Sala"   
import stylePredio from '../../styles/Predios.module.css'
import { faMagnifyingGlass, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function sala() {

    const router = useRouter();

    const {salas} = router.query
    console.log(salas)

    return (
        <div className="flex justify-center text-center">
            <div className="">

                <h1 className="Montserrat font-bold text-2xl">Salas</h1>

                <div className="relative">
                    <FontAwesomeIcon className="absolute lg:pl-3 pt-7 h-7 pl-5" icon={faMagnifyingGlass}></FontAwesomeIcon>
                    <input type="text" className={stylePredio.inputSala} placeholder="Digite a sala que deseja" />
                </div>

                <div>
                    <Sala />
                </div>

            </div>
        </div>
    )
}


export default sala