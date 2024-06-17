import Tooltip from "@/components/Tooltip"
import { Badge } from "@/components/ui/badge"

function InfoCar({ comfort, conservacion, extras }) {

    const comfortComp = comfort && <div ><span >Confort: </span><span className='font-bold'>Alto</span> </div>
    const estadoComp = conservacion && <div ><span >Estado: </span> <span className='font-bold'>Buen Estado</span></div>

    return (
        <div className={`pl-3 flex flex-col w-full flex-1`}>
            <h3 className='font-bold text-lg'>Caracteristicas:</h3>
            <div className='pl-2 text-sm'>
                {comfortComp}
                {estadoComp}
            </div>
            <h3 className='pt-3 font-bold text-lg'>Extras:</h3>
            <div className='pl-2 text-sm'>
                {Extras(extras)}
            </div>

        </div>
    )
}

export default InfoCar



function Extras(listExtras) {


    const extrasString = {
        gps: { text: "GPS", tooltip: "Navegación GPS" },
        sillaBebe: { text: "Bebe", tooltip: "Silla para Bebes" },
        proteccionenCarretera: { text: "Prot. Carretera", tooltip: "Proteccion en carretera" },
        opcionSeguroTodoRiesgo: { text: "Opcion Todo riesgo", tooltip: "Seguro todo riesgo opcional" }
    }
    const extrasBadge = ({ nombre, value }) => {
        if (nombre === "exenciondeFranquicia")
            return { text: `Exencion ${value}`, tooltip: `Exencion Franquicia ${value}` }
        return { "text": "añadir", "tooltip": "añadir" }

    }


    const listaTags = listExtras.map((extra) => {


        if (typeof extra === "string") {
            const { text, tooltip } = extrasString[extra]
            return <Tooltip key={extra} tooltip={tooltip} dark>
                <Badge variant="outline" >
                    {text}
                </Badge>
            </Tooltip>
        }
        const { text, tooltip } = extrasBadge(extra)
        return <Tooltip key={extra} dark tooltip={tooltip}>
            <Badge variant="outline" >
                {text}
            </Badge>
        </Tooltip>
    })

    return (<div className="flex  flex-wrap gap-3">

        {listaTags}
    </div>
    )

}
