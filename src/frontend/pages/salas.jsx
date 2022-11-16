import Sala from "../components/Sala/Sala"
import Link from "next/link"

function sala() {

    return (
        <div>
            <div className="p-5">

                <Link href={"/predios"}>
                    <button className="bg-transparent border-2 border-cyan-600 rounded-md hover:bg-cyan-400 hover:border-transparent">Voltar</button>
                </Link>
            </div>

            <div className="flex items-center mb-5">
                <div className="flex flex-auto bg-black">
                    <hr></hr>
                </div>

                <div className="text-center">
                    <h2>Andar 0</h2>
                </div>

                <div className="flex flex-auto bg-black">
                    <hr></hr>
                </div>
            </div>

            <div className="flex col-auto justify-center">
                <Sala></Sala>
            </div>
        </div>
    )
}

export default sala