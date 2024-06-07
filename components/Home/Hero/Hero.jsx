import Image from "next/image"
import bgHero from '@/public/images/BgHero.webp'
import Widget from "./Widget"
export function Hero(props) {
    return (
        <div className="w-full  h-screen">
            <div className="absolute inset-0 ">
                <Image src={bgHero} alt="fotografia vehiculos" className="object-cover object-left-bottom h-full w-full" />
            </div>
            <div className="w-100 mx-auto text-neutral-800 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-full xl:p-28 h-full  z-50">
                <div className="grid items-center gap-12 lg:grid-cols-2 h-full">

                    <div className="relative mb-12 lg:mb-0">
                        <div className="relative bg-[hsla(0,0%,100%,0.3)] backdrop-blur-[25px] backdrop-saturate-[200%] block rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,15%,0.9)] dark:shadow-black/20 md:px-12">
                            <Widget></Widget>
                        </div>
                    </div>
                    <div className="mt-12 lg:mt-0 " style={{ zIndex: 10 }}>
                        <h1 className="mt-0 mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[hsl(120,100%,66%)] [text-shadow:_5px_5px_10px_rgb(0_0_0_/_90%)]">
                            Tu mejor oferta en <br />
                            <span className="text-[hsl(0,0%,100%)]">Vehiculos de alquiler</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>

    )
}


