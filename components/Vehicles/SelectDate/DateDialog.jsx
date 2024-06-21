"use client"
import useRentalStore from "@/Store"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { DatePickerVehicle } from './DatePickerVehicle'
function DateDialog(props) {

    const dateVehicleDialog = useRentalStore(state => state.dateVehicleDialog)
    return (
        < Dialog open={dateVehicleDialog} defaultOpen={false} >
            <DialogContent className="w-[80rem] bg-red-500">
                <DialogHeader>
                    <DialogTitle>Seleccione periodo de alquiler</DialogTitle>
                    <DialogDescription>
                        text
                    </DialogDescription>
                </DialogHeader>
                <DatePickerVehicle />
                <DialogFooter>
                    <Button type="submit">Confirmar Fechas</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog >

    )
}

export default DateDialog


