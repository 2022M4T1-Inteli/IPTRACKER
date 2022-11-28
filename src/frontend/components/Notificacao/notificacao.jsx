import mock from "./mock"
import Link from "next/link"

function Notificacao() {
    return(
        <div>
            <div className="flex flex-row justify-center">
                
            </div>
            <div className="flex flex-col justify-center">
                <div className="flex flex-col justify-center lg:items-center">
                    {mock.map((element) => (
                        <Link href={"/notificacao"} key={element.tipo}>
                            <div className="flex justify-center items-center border-solid border-2 border-black rounded-lg h-9 m-2 lg:w-96 cursor-pointer hover:p-6 hover:shadow-cyan-700 hover:shadow-lg">
                                <h1>ID {element.id} {element.tipo}</h1>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Notificacao