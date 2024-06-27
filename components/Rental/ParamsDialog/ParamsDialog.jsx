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
import { useState } from 'react'
import DatePicker from '@/components/DatePicker'
function ParamsDialog({ citiesComponent, ...params }) {

    const [isOpen, setIsOpen] = useState(false)


    const openDialog = () => setIsOpen(true)
    const closeDialog = () => setIsOpen(false)

    const { from, to, ciudad } = params
    const isParams = from && to && ciudad

    return (
        <>
            <Button variant={isParams ? "outline" : "default"} onClick={openDialog}>{isParams ? "Modificar datos" : "Seleccionar Fechas / ciudad"}</Button >
            < Dialog open={isOpen} defaultOpen={false} onOpenChange={closeDialog}>
                <DialogContent className="w-[80rem] ">
                    <DialogHeader>
                        <DialogTitle>Seleccione periodo de alquiler</DialogTitle>
                    </DialogHeader>
                    <DatePicker {...params} />
                    <DialogHeader>
                        <DialogTitle>Seleccione ciudad  de alquiler</DialogTitle>
                    </DialogHeader>
                    <div className="mt-8 mb-6 ml-4">
                        {citiesComponent}
                    </div>
                    <DialogFooter>
                        <Button onClick={closeDialog}>Cerrar</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog >
        </ >

    )
}

export default ParamsDialog


