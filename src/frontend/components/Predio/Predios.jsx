import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { useState } from 'react'
import ModalPredio from "../ModalPredio/ModalPredio"
import cell from "../../public/cell.png"
import mock from "./mock"


function Predio({ }) {

    return (

        <div className='flex justify-center'>
            <div className='grid  lg:grid-cols-3 lg:gap-20 md:grid-cols-1 justify-items-center lg:w-100 md:w-90 lg:pl-28'>
                {mock.map((element) => (
                    <div className='flex flex-col rounded-lg border-2 border-black w-80 shadow-md lg:mb-0 mb-4 '>
                        <div className='flex justify-start m-4 rounded-md bg-ipt w-24 p-2 text-white'>
                            <p className='ml-2'>Prédio {element.number}</p>
                        </div>

                        <div className='flex gap-2 text-2xl items-center m-4'>
                            <Image src={cell} height={40} width={30}></Image>
                            <div className='text-ipt'>{element.quandidade}</div>
                            <h1>Dispositivos</h1>
                        </div>

                        <div className='text-2xl'>
                            <p>Última atualização - <span>10:00</span></p>
                        </div>

                        <div className='flex justify-center'>
                            <Link href="/salas">
                                <button className="bg-green-500 hover:scale-125 duration-200 rounded-lg mt-4  mb-4 p-2 hover:bg-green-400">Ver detalhes</button>
                            </Link>
                        </div>
                    </div>
                ))}

            </div>
        </div>


    )
}

export default Predio