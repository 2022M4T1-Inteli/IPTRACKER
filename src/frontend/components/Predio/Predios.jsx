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
            <div className='grid grid-cols-2 lg:grid-cols-4 lg:gap-20 justify-items-center lg:w-110 md:w-100 w-2/3'>
                {mock.map((element) => (
                    <button onClick={()=>{teste(element.number,element.quandidade)}} key={element.number} >
                        <div className="lg:rounded rounded-full bg-gray-800 hover:bg-blue-500 text-white lg:h-36 lg:w-52 h-24 w-24 flex flex-col items-center justify-center cursor-pointer mb-5"  >
                            <h1 className="text-3xl">{element.number}</h1>
                            <h2> {element.quandidade} equipamentos </h2>
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