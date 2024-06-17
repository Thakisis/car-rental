import Image from "next/image"
import Brand from "./Brand"

function Header({ imagen_url, tipo, marca_vehiculo, modelo_vehiculo }) {
    console.log(imagen_url)
    return (
        <div className="flex  justify-center items-center pt-20">
            <div className="relative inset-0 z-0 overflow-clip " id="header ">
                <Image src={`/images/card/${imagen_url}`} alt="car" width={1024} height={660} className="" />

                <Brand brand={marca_vehiculo} />
                <Image src={`/images/card2/${imagen_url}`} alt="car" width={1024} height={660} className="absolute inset-0 z-10" />

                <div className="flex absolute inset-0 pl-6 items-end justify-end z-10 color-white ">
                    <span className="text-[4rem] w-[200rem] text-white font-bold ">{modelo_vehiculo.toUpperCase()}</span>pru
                </div>

            </div>

        </div>
    )
}

export default Header
