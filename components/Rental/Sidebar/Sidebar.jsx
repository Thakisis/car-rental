import { Button } from "@/components/ui/button"
import { format, intervalToDuration } from "date-fns"
import { es } from "date-fns/locale"
import Tooltip from '@/components/Tooltip'
import Citypicker from "@/components/Citypicker"
import ParamsDialog from "../ParamsDialog"
import { createQueryUrl } from "@/lib/queryParams"
import Link from "next/link"


function Sidebar({ carId, ciudad, dropoff, from, to, ...data }) {
    const params = { ciudad, dropoff, from, to }
    const start = new Date(parseInt(from))
    const end = new Date(parseInt(to))
    const fromComp = from ? format(start, 'yyyy-MM-dd') : "No seleccionado"
    const toComp = to ? format(end, 'yyyy-MM-dd') : "No seleccionado"
    const days = from && to ? intervalToDuration({ start, end }).days : "-"

    const isValidData = ciudad && from && to && days >= 0
    const cityPicker = <Citypicker writeUrl params={params} />
    const urlQuery = createQueryUrl({ ciudad, dropoff, from, to })
    return (
        <div className=" w-full mt-12 shadow-md p-5 rounded-xl bg-slate-100 text-lg mb-10">
            <h4 className="text-2xl font-light text-blue-800 ">Vehiculo</h4>
            <div className="ml-4">{data.nombre}</div>
            <div className="border border-gray-200 my-3"></div>

            <h4 className="text-2xl font-light text-blue-800 ">Ciudad</h4>
            <div className="ml-4">Recogida en {ciudad}</div>
            {dropoff && dropoff !== ciudad && <div className="ml-4">Entrega en {dropoff}</div>}

            <div className="border border-gray-200 my-3"></div>

            <h4 className="mt-4 text-2xl font-light text-blue-800">Periodo de Alquiler</h4>
            <div className="flex flex-col items-start ml-4">
                <span className="font-bold">Fecha de recogida</span>
                <button className="text-gray-500 ml-4   ">{fromComp}</button>
            </div>
            <div className="flex flex-col items-start ml-4">
                <span className="font-bold">Fecha de devolución</span>
                <button className="text-gray-500 ml-4">{toComp}</button>
            </div>
            <div className="border border-gray-200 my-3"></div>


            <h4 className="mt-4 text-2xl font-light text-blue-800">Precio</h4>
            <div className="flex justify-between items-start ml-4">
                <span className="font-bold">Precio por dia</span>
                <span>{data.precioDia} €</span>
            </div>
            <div className="flex justify-between items-start ml-4">
                <span className="font-bold">dias</span>
                <span>{days}</span>
            </div>
            <div className="border border-gray-200 "></div>
            <div className="flex justify-between items-start ml-4">
                <span className="font-bold">Total</span>
                <span > {from && to ? ` ${days * parseFloat(data.precioDia)} €` : "-"} </span>
            </div>

            <div className="pt-8 w-full flex justify-between items-center ">
                <Tooltip tooltip={isValidData ? "Asegurese que las fechas son correctas" : "Parametros no validos"} dark>
                    <div>
                        <Button

                            disabled={!isValidData}
                        >
                            <Link href={`/payment/${carId}?${urlQuery}`} prefetch={true} scroll={false}> Proceder al pago</Link>
                        </Button>

                    </div>

                </Tooltip>
                <ParamsDialog citiesComponent={cityPicker} {...params} />

            </div>
        </div>


    )
}

export default Sidebar
