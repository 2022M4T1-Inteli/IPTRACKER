import Link from "next/link";
import ContainerEquipamentos from "../components/ContainerEquipamentos/ContainerEquipamentos";



function equipamentos() {
    return (
        <div className="text-center mt-5">
            <button className="bg-transparent border-2 border-cyan-600 rounded-md hover:bg-cyan-400 hover:border-transparent">
                <Link href="/salas">Voltar</Link>
            </button>

            <h1 className="text-lg font-bold">Sala x - Equipamentos</h1>
            <input type="text" className="border-2 border-black mb-5 rounded-xl " placeholder="ID equipamento" />

            <div>
                <ContainerEquipamentos></ContainerEquipamentos>
            </div>
        </div>
    )
}

export default equipamentos