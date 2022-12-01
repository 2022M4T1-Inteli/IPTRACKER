import Link from "next/link"
import { useEffect } from "react";
import { useState } from "react"

function EquipamentosBloco({ nome, ID, link, status }) {

    const [statusDispositivo, setStatusDispositivo] = useState("sky");
    const [colorStatus, setColorStatus] = useState({animate:"400",ball:"500"})

    useEffect(() => {
        if (status === false) {
            setStatusDispositivo("red")
            setColorStatus({animate:"600",ball:"700"})
            
        }else{
            setStatusDispositivo("sky")
            setColorStatus({animate:"400",ball:"500"})
        }
    },[])


    return (
        <div className=" rounded border-2 border-black w-56 h-44 p-2">

            <div className="mt-5">
                <h1><span className="font-bold">Nome:</span> {nome}</h1>
                <h1><span className="font-bold">ID:</span>  {ID}</h1>
            </div>

            <Link href={`/admin`}>
                <button className="bg-blue-500 hover:scale-125 duration-200 rounded-lg mt-4  mb-4 p-2 hover:bg-blue-400">Ver detalhes</button>
            </Link>



        </div>
    )
}

export default EquipamentosBloco