

function Square({ children, className }) {
    return (
        <div className={`  min-w-[100px] relative   cuadro justify-center items-center rounded-xl overflow-clip ${className} `} >

            {children}

        </div>
    )
}

export default Square
