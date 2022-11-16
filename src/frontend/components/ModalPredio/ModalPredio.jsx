import Link from "next/link"
import { useState } from "react";

function ModalPredio({ visible, number, quantidade, tempo, links, onClose }) {


    if (visible == false) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-5 rounded">

                <button onClick={onClose} className="bg-red-600 w-20 mb-5">X</button>

                <div className="bg-blue-600 rounded-full h-24">
                    <h1 className="text-3xl">{number}</h1>
                    <p>Dispositivos</p>
                    <h2>{quantidade}</h2>
                </div>

              
                <h1>{tempo} minutos</h1>
                <Link href={links != null ? links : "/"}>
                    <button className="bg-blue-500 rounded-lg mt-4 p-2 hover:bg-blue-200">Ver detalhes</button>
                </Link>
            </div>
        </div>
    )
}

export default ModalPredio