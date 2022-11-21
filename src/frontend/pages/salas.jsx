import Link from "next/link"
import Sala from "../components/Sala/Sala"

function sala() {

    return (
        <div className="text-center">
            <div className="flex justify-center">
                <div>
                    <Link href="/predios">
                        <button>Voltar</button>
                    </Link>
                </div>
                <div className="bg-blue-500 m-4 w-72 border-2 border-black rounded-2xl">
                    <h2>Andar 0</h2>
                </div>
            </div>

            <div>
                <Sala />
            </div>

            <div className="flex justify-center">
                <div className="bg-blue-500 m-4 w-72 border-2 border-black rounded-2xl">
                    <h2>Andar 1</h2>
                </div>
            </div>


            <div>
                <Sala />
            </div>
        </div>
    )
}

export default sala