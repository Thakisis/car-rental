import SideFilter from "./SideFilter"
import { decodeQuery } from "@/lib/queryParams"
import Carlist from "./Carlist"
import { Suspense } from "react"
import SelectParams from "@/components/ParamsDialog"
import Citypicker from "@/components/Citypicker"
import ParamsRecover from "./ParamsRecover/ParamsRecover"
export async function Vehicles({ params }) {

    const decodeParams = decodeQuery(params)

    const { from, to, ciudad } = decodeParams

    const text = <div><p>Puede cambiar los criterios mostrando el panel de filtros a continuación </p> <MensajeParams from={from} to={to} ciudad={params.ciudad} /></div>
    return (
        <>
            <div className="flex w-full justify-center flex-col pt-8 container mx-auto sm:w-full">
                <ParamsRecover params={decodeParams} />
                <div className=" h-20 text-md flex flex-col justify-center items-center w-full mb-10">
                    <p>Puede cambiar los criterios mostrando el panel de filtros a continuación </p>
                    <MensajeParams from={from} to={to} ciudad={ciudad} />
                </div>
                <div className=" flex  flex-col md:flex-row w-full items-center justify-center gap-6">

                    <SideFilter params={decodeParams} /><SelectParams {...decodeParams} /><Citypicker writeUrl params={params} />
                </div>

            </div>
            <div className=" sm:px-0 lg:px-24  flex flex-col items-center justify-center gap-10 py-10">
                <Suspense fallback={<div>Loading...</div>}>
                    <Carlist {...decodeParams} />
                </Suspense>
            </div>

        </>
    )
}

export default Vehicles

function MensajeParams({ from, to, ciudad }) {

    if ((!from || !to) && !ciudad) return <p className=" mt-2 text-red-900 font-semibold">!No se han seleccionado ni la ciudad ni las fechas,  No se puede asegurar la disponibilidad de los vehiculos </p>
    if (!from || !to) return <p className=" mt-2 text-red-900 font-semibold">!No se han seleccionado el periodo de alquiler, ciertos vehiculos mostrados podrian no estar disponibles</p>
    if (!ciudad) return <p className=" mt-2 text-red-900 font-semibold">!No se han seleccionado ciudad, los vehiculos mostrados podrian no estar disponibles</p>
    return null

}
