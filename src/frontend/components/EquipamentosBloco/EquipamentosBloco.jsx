import Image from "next/image"
import Link from "next/link"
import imagebloco from "./image.png"

function EquipamentosBloco({ link }) {
    return (
        <div className="hover:shadow-sm hover:shadow-cyan-500">
            <Link href="/admin">
                <div className="rounded border-2 border-black w-36 h-36 ">
                    <Image src={imagebloco} alt="teste" width={64} height={64}></Image>
                    <h1 className="font-bold">Product image</h1>

                    <div className="mt-5">
                        <h1>Nome/ID</h1>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default EquipamentosBloco