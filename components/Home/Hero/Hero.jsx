import Image from "next/image"
import bgHero from '@/public/images/BgHero.webp'
import Widget from "./Widget"
import HeroRight from "./HeroRight"
export function Hero(props) {
    return (
        <div className=" relative flex items-center w-full  min-h-screen pt-24    ">
            <div className="absolute inset-0 ">
                <Image src={bgHero} alt="fotografia vehiculos" className="object-cover object-left-bottom h-full w-full" />
            </div>
            <div className="w-100 mx-auto text-neutral-800 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-full xl:p-28   z-50">
                <div className="grid items-center gap-12 lg:grid-cols-2 h-full">

                    <div className="relative mb-12 lg:mb-0">
                        <div className="relative bg-[hsla(0,0%,100%,0.3)] backdrop-blur-[25px] backdrop-saturate-[200%] block rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,15%,0.9)] dark:shadow-black/20 md:px-12">
                            <Widget></Widget>
                        </div>
                    </div>
                    <div className="mt-12 lg:mt-0 h-full items-stretch " style={{ zIndex: 10 }}>
                        <HeroRight />
                    </div>
                </div>
            </div>
        </div>

    )
}


