"use client"
import useRentalStore from "@/Store"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
import { es } from "date-fns/locale"
import { format, formatWithOptions } from 'date-fns'
function DateButton(props) {
    const setIsCalendar = useRentalStore(state => state.Actions.setIsCalendar)
    const { isOpen, dates } = useRentalStore(state => ({ isOpen: state.isCalendar, dates: state.datesRental }))
    const onClick = () => {
        setIsCalendar(!isOpen)
    }
    const { from, to } = dates ?? {}

    const Nodates = <><CalendarIcon className="mr-2 h-4 w-4" /><span>Seleccione Fechas</span></>
    const startDate = from ? <div className="flex w-1/2 h-full bg-primary items-center p-2 text-accent"><CalendarIcon className="mr-2 h-4 w-4 " />{from && format(from, 'dd/MM/yyyy')} </div>
        :
        <div className="flex w-1/2 h-full  items-center p-2 "><CalendarIcon className="mr-2 h-4 w-4 " />Fecha recogida</div>
    const endDate = to ? <div className="flex w-1/2 h-full bg-primary items-center p-2 text-accent"><CalendarIcon className="mr-2 h-4 w-4 " />{to && format(from, 'dd/MM/yyyy')} </div>
        :
        <div className="flex w-1/2 h-full  items-center p-2 "><CalendarIcon className="mr-2 h-4 w-4 " />Fecha entrega</div>


    return (
        <Button
            onClick={onClick}
            variant="rental"
            className="w-[240px] justify-start text-left font-normal p-0 items-center  flex overflow-clip bg-white/70 hover:bg-white/90 "
        >

            {startDate}{endDate}

        </Button>
    )
}

export default DateButton


