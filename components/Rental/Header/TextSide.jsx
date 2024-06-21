import Square from "./Square"

function TextSide({ className, children }) {


    return (


        <Square className={className}>
            <span className="text-md xl:text-xl">
                {children}
            </span>
        </Square>


    )
}

export default TextSide

//< div className = { cn("relative  h-[20vw] xl:w-auto xl:h-[30%] aspect-square bg-black rounded-xl  overflow-hidden mr-4", className) } >
