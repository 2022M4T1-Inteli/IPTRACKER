import Link from 'next/link'
import { useRef } from 'react'
import { useState } from 'react'
import ModalPredio from "../ModalPredio/ModalPredio"
import mock from "./mock"

function Predio({}) {

    const [view, setView] = useState(false)
    const [numberD, setNumberD] = useState(0)
    const [quandi, setQuanti] = useState(0)

    const handleOnClose = () => setView(false)

    function teste(number,quandidade){
        setNumberD(number)
        setQuanti(quandidade)
        setView(true)
    }

    
    return (

        <div className='flex justify-center'>
            <div className='grid grid-cols-2 lg:grid-cols-4 lg:gap-14 justify-items-center w-96'>
                {mock.map((element) => (
                    <button onClick={()=>{teste(element.number,element.quandidade)}} key={element.number} >
                        <div className="rounded-full bg-black hover:bg-blue-500 text-white h-24 w-24 flex flex-col items-center cursor-pointer mb-5"  >
                            <h1 className="text-3xl">{element.number}</h1>
                            <p>Dispositivos</p>
                            <h2>{element.quandidade}</h2>
                        </div>
                    </button>
                ))}
                <ModalPredio visible={view} number={numberD} quantidade={quandi} tempo={10} links={"/salas"} onClose={handleOnClose}></ModalPredio>

                {/*  */}
            </div>
        </div>


    )
}

export default Predio