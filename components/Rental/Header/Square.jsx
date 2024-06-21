

function Square({ children, className }) {
    //min-w-[100px]
    return (
        <div className={`   relative   cuadro justify-center items-center rounded-xl overflow-clip ${className} `} >

            {children}

        </div>
    )
}

export default Square
