"use client"
import { es } from "date-fns/locale"
import { Calendar } from "@/components/ui/calendar"
import useCarStore from "@/Store/Store"
export function DatePickerHero() {
    const datesRental = useCarStore(state => state.datesRental)
    const setDatesRental = useCarStore(state => state.Actions.setDatesRental)
    const setIsCalendar = useCarStore(state => state.Actions.setIsCalendar)
    const isSmallScreen = window.innerWidth < 960 ? true : false
    const changeDates = (dates) => {
        setDatesRental(dates)
    }
    const closeCalendar = () => {
        if ((datesRental?.from && datesRental?.to))
            setIsCalendar(false)
    }
    return (


        <div className="bg-white w-full h-full p-8 justify-center items-center  select-none" onMouseLeave={closeCalendar}>
            <Calendar

                mode="range"
                locale={es}
                selected={datesRental}
                onSelect={changeDates}
                numberOfMonths={isSmallScreen ? 1 : 2}
                disabled={(current) => current < new Date()}
                hidden={(current) => current < new Date() - 24 * 60 * 60 * 1000}
                fromMonth={new Date(
                    new Date().setMonth(
                        new Date().getMonth()
                    )
                )}
                defaultMonth={
                    new Date(
                        new Date().setMonth(
                            new Date().getMonth() + (isSmallScreen ? 0 : 0)
                        )
                    )
                }
            /></div>

    )
}

