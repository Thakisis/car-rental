

function InfoEngine({ tipoMotor, autonomia, prestaciones }) {
    const prestacionesComp = prestaciones && <div ><span > Gama:</span> <span className='font-bold'>Altas Prestaciones</span></div>
    return (
        <div className={`flex flex-col w-full flex-1 `}>
            <h3 className='font-bold text-lg'>Motor</h3>
            <div className='pl-2 text-sm'>
                <div ><span > Tipo: </span><span className='font-bold'>{tipoMotor}</span></div>
                <div ><span > Autonomia: </span><span className='font-bold'>{autonomia} km</span></div>
                {prestacionesComp}
            </div>
        </div>
    )
}

export default InfoEngine
