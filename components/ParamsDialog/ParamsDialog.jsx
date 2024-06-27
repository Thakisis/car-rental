"use client"
import useRentalStore from "@/Store"
import { format, formatDistance } from "date-fns"
import { es } from "date-fns/locale"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

import DatePicker from '@/components/DatePicker'
function ParamsDialog(params) {
    const isDates = params.from || params.top
    const dateVehicleDialog = useRentalStore(state => state.dateVehicleDialog)
    const openVehicleDialog = useRentalStore(state => state.Actions.openVehicleDialog)
    const openDialog = () => openVehicleDialog(true)
    const closeDialog = () => openVehicleDialog(false)
    const { from, to } = params
    const fromComp = from ? format(parseInt(from), "d 'de' MMMM", { locale: es }) : "sin fecha"
    const days = from && to ? formatDistance(parseInt(from), parseInt(to), { locale: es }) : "sin fecha"
    return (
        <>
            <Button onClick={openDialog} variant={isDates ? "default" : "outline"}>{isDates ? `${fromComp} - ${days}` : "Seleccionar Periodo de Alquiler"}</Button>
            < Dialog open={dateVehicleDialog} defaultOpen={false} onOpenChange={closeDialog}>
                <DialogContent className="w-[80rem] ">
                    <DialogTrigger asChild>

                    </DialogTrigger>

                    <DialogHeader>
                        <DialogTitle>Seleccione periodo de alquiler</DialogTitle>
                    </DialogHeader>
                    <DatePicker {...params} />

                    <DialogFooter>
                        <Button onClick={closeDialog}>Confirmar Fechas</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog >
        </ >

    )
}

export default ParamsDialog


