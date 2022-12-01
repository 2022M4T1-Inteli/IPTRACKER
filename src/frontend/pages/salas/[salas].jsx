import { useRouter } from "next/router"
import {useState} from "react"
import Sala from "../../components/Sala/Sala"   
import stylePredio from '../../styles/Predios.module.css'
import { faMagnifyingGlass, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"


function sala() {

    const router = useRouter();

    const [sala, setSala] = useState([])

    const {salas} = router.query

    async function teste(){
        await axios.post("http://localhost:3001/Device/getSalas", {
            number: salas            
        }).then((element)=> {
            setSala(element.data) 
        })
        
        
    }

    teste()   
    

    return (
        <div className="flex justify-center text-center">
            <div>

                <h1 className="Montserrat font-bold text-2xl">Salas</h1>

                <div className="relative">
                    <FontAwesomeIcon className="absolute lg:pl-3 pt-7 h-7 pl-5" icon={faMagnifyingGlass}></FontAwesomeIcon>
                    <input type="text" className={stylePredio.inputSala} placeholder="Digite a sala que deseja" />
                </div>

                <div>
                    <Sala numeroSala={sala} numeroPredio={salas} />
                </div>

            </div>
        </div>
    )
}


export default sala