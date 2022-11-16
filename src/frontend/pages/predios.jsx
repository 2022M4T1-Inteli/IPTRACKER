import Predio from "../components/Predio/Predios"


function Predios() {
    

    return (
        <div className="text-center">
            
            <h1 className="text-lg font-bold">Prédios</h1>
            <input type="text" className="border-2 border-black mb-5 rounded-xl " placeholder="Digite o número do prédio" />
            <div className="">
                <Predio/>
            </div>
        </div>
    )
}

export default Predios