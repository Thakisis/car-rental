/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WI3InzhJFyA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { intervalToDuration, format } from "date-fns"
import { es } from "date-fns/locale"
import Steps from "./Steps"

export default function PaymentDialog({ ciudad, dropoff, from, to, ofertaEspecial, precioDia, precioOferta }) {

    const precio = ofertaEspecial ? precioOferta : precioDia
    const start = new Date(parseInt(from))
    const end = new Date(parseInt(to))
    const fromDate = from ? format(parseInt(from), "d 'de' MMMM", { locale: es }) : "-"
    const toDate = to ? format(parseInt(to), "d 'de' MMMM", { locale: es }) : "-"
    const days = from && to ? intervalToDuration({ start, end }).days : "-"


    return (
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-6 pb-2 px-4 md:px-6">
            <div>
                <Steps />
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 space-y-4">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Resumen</h2>

                    <div className="flex justify-between">
                        <span>Precio por dia</span>
                        <span>{precio} €</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Dias totales</span>
                        <span>{days} dias</span>
                    </div>
                    <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>{precio * days} €</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <h3 className="text-lg font-bold">Vehiculo</h3>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span>Ford Mustang</span>

                        </div>
                    </div>
                    <h3 className="text-lg font-bold mt-3">Periodo Alquiler</h3>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span>Fecha recogida</span>
                            <span>{fromDate}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Fecha entrega</span>
                            <span>{toDate}</span>
                        </div>

                    </div>
                    <h3 className="text-lg font-bold mt-5">Punto de recogida entrega</h3>
                    <div className="space-y-2">
                        {dropoff ?
                            <>
                                <div className="flex justify-between">
                                    <span>Ciudad alquiler</span>
                                    <span>{ciudad}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Ciudad de entrega</span>
                                    <span>{dropoff}</span>
                                </div>
                            </> :
                            <div className="flex justify-between">
                                <span>Ciudad</span>
                                <span>{ciudad}</span>
                            </div>
                        }
                    </div>


                </div>
            </div>
        </div>
    )
}
