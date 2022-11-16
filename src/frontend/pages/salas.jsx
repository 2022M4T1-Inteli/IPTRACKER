import Sala from "../components/Sala/Sala"
import Link from "next/link"

function sala() {

    return (
        <div className="text-center">
            <div className="bg-blue-500 m-4">
                <h2>Andar 0</h2>
            </div>

            <div>
                <Sala/>
            </div>
        </div>
    )
}

export default sala