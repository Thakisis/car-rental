import Square from "./Square"

export function TextSide({ className, children }) {


    return (


        <Square className={className}>
            <span className="text-md xl:text-xl">
                {children}
            </span>
        </Square>


    )
}




