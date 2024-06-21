import Image from "next/image"
import Brand from "./Brand"
import ImageSide from "./ImageSide"
import TextSide from "./TextSide"
import { format, formatDistance, formatDuration } from "date-fns"
import { es } from "date-fns/locale"

import './header.css'
function Header({ image, tipo, marca, modelo, tipoMotor, cajaCambios, autonomia, from, to }) {

    const images = {
        fuel: '/images/Fuel.webp',
        electrico: '/images/Plug.webp',
        hibrido: '/images/PlugFuel.webp',
    }
    const imageEngines = {
        BEV: { image: images.electrico, text: "100% Eléctrico", value: "BEV" },
        HEV: { image: images.fuel, text: "Híbrido no enchufable", value: "HEV" },
        MHEV: { image: images.fuel, text: "Hibrido ligero", value: "MHEV" },
        PHEV: { image: images.hibrido, text: "Híbrido Enchufable", value: "PHEV" },  // text es el tooltip=hover
        SHEV: { image: images.hibrido, text: "Híbrido Puro", value: "SHEV" },
    }
    const fromComp = from ? format(parseInt(from), "d 'de' MMMM", { locale: es }) : "No seleccionado"
    const days = from && to ? formatDistance(parseInt(from), parseInt(to), { locale: es }) : "No seleccionado"



    const imageCambio = cajaCambios === "Manual" ? '/images/ManualGear.webp' : '/images/AutomaticGear.webp'
    return (

        <div className="flex w-full justify-center items-center ">

            <div className="hero">
                <div className="relative *:flex  bg-black car rounded-xl overflow-hidden p-0 ">
                    <Image src={`/images/card/${image}`} alt="car" width={1024} height={660} className="w-full h-full " />

                    <Brand brand={marca} />
                    <Image src={`/images/card2/${image}`} alt="car" width={1024} height={660} className={`absolute inset-0 z-10 w-full h-full `} />

                    <div className="flex absolute inset-0 pl-6 items-end justify-end z-10 color-white ">
                        <span className=" text-xl md:text-5xl lg:text-[4rem] w-[200rem] text-white font-bold ">{modelo.toUpperCase()}</span>
                    </div>

                </div>
                <div className="cuadros flex-wrap">
                    <ImageSide image={imageCambio} alt="car" texto="Caja de cambios" >
                        <span className="text-center hidden xl:flex">Caja de Cambios</span>
                        <span className="text-center flex xl:hidden">Cambio</span>
                        <span> {cajaCambios}</span>
                    </ImageSide>
                    <ImageSide image={imageEngines[tipoMotor].image} alt="car"  >
                        <span className="text-center">{imageEngines[tipoMotor].text}</span>
                    </ImageSide>
                    <ImageSide image="/images/Forest.webp" alt="car" texto="Combustible" >
                        <span>Autonomia</span>
                        <span>{autonomia} km</span>
                    </ImageSide>
                    <TextSide className="bg-blue-500">GUADALAJARA</TextSide>
                    <TextSide className="bg-yellow-500">{fromComp}</TextSide>
                    <TextSide className="bg-purple-500">{days}</TextSide>
                    <div className="holder">a</div>
                </div>
            </div>


        </div>
    )

}

export default Header

/*


        
        <div className="flex flex-col  xl:flex-row justify-center items-stretch  mt-20 w-full  gap-4 bg-red-500">
            <div className="flex flex-col  xl:flex-row justify-center items-center bg-blue-300">
                <div className="relative inset-0 z-0 overflow-clip rounded-xl bg-black items-stretch" id="header ">
                    <Image src={`/images/card/${image}`} alt="car" width={1024} height={660} className={carImageClassName} />


                </div>

                <div className="flex flex-col  flex-wrap gap-8  items-stretch">

                    

                </div>





            </div>
        </div>
*/
