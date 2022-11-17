import mock from "./mock"
import Link from "next/link"

function Sala({ numeroSala }) {
    return (
        <div className="flex flex-col justify-center">
            <div className="flex flex-col justify-center lg:items-center">
                {mock.map((element) => (
                    <Link href={"/equipamentos"} key={element.numero}>
                        <div  className="flex justify-center items-center border-solid border-2 border-black rounded-lg h-11 m-2   lg:w-96 cursor-pointer hover:p-6 hover:shadow-cyan-700 hover:shadow-lg">
                            <h1>Sala {element.numero}</h1>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sala