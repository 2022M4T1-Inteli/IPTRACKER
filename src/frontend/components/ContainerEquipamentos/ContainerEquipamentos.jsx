import EquipamentosBloco from "../EquipamentosBloco/EquipamentosBloco";


const mock = [{link:"/"}, {link:"/a"}, {link:"/b"}, {link:"/c"}, {link:"/d"}, {link:"/e"},{link:"/f"},{link:"/g"},{link:"/h"},]

function ContainerEquipamentos() {
    return (
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 justify-items-center cursor-pointer">
            {mock.map((element) => (
                <EquipamentosBloco key={element.link}></EquipamentosBloco>
            ))}
        </div>
    )
}

export default ContainerEquipamentos;