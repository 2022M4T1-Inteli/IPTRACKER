import mock from "./mock"
import Link from "next/link"

function Sala({ numeroSala }) {
    return (
        <div>
            {mock.map((element) => (
                <div key={element.numero} className="flex row-auto justify-center items-center border-solid border-2 border-black rounded-lg w-96 text-center h-11 m-4 cursor-pointer hover:p-6 hover:shadow-cyan-700 hover:shadow-lg">
                    <Link href={"/equipamentos"}>
                        <h1>Sala {element.numero}</h1>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Sala