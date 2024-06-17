"use client"
import useRentalStore from "@/Store"
import { DatePickerHero as DatePicker } from "../DatePicker"
function HeroRightClient({ children }) {
    const isCalendar = useRentalStore(state => state.isCalendar)
    const CalendarComp = isCalendar ? <DatePicker></DatePicker> : null
    return (
        <div className="relative w-full h-full flex justify-center items-center ">
            <div className="absolute inset-0">
                {CalendarComp}
            </div>
            {children}
        </div>
    )
}

export default HeroRightClient
