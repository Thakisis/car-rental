import Image from "next/image"
import Square from "./Square"
export function ImageSide({ image, alt, children }) {

    const ImageComponent = image && <Image src={image} alt={alt} fill className="object-cover aspect-square " />
    return (
        <Square>
            <div className="flex  absolute inset-0 text-xl capitalize justify-center items-center p3 z-10 text-white w-full h-full">
                <div className="flex flex-col justify-center items-center gap-2 bg-black/70  p-4 rounded-xl text-sm uppercase tracking-wider border-solid border border-white/20   ">
                    {children}
                </div>
            </div>
            {ImageComponent}
        </Square>
    )
}

