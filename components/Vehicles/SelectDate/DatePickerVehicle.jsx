
import { es } from "date-fns/locale"
import { Calendar } from "@/components/ui/calendar"
import { useSearchParams } from "next/navigation"
import useCarStore from "@/Store/Store"
export function DatePickerVehicle() {

    const searchParams = useSearchParams()

    const datesRental = {
        from: parseInt(params.get("from")), from: parseInt(params.get("to"))
    }


    const setDatesRental = useCarStore(state => state.Actions.setDatesRental)

    const isSmallScreen = window.innerWidth < 960 ? true : false

    const closeCalendar = () => {
        if ((datesRental?.from && datesRental?.to))
            setIsCalendar(false)
    }
    const changeDates = (dates) => {
        const newParams = new URLSearchParams(searchParams)
        object.keys(dates).forEach(key => {
            newParams.set(key, dates[key])
        })
        if (term) {
            params.set('query', term)
        } else {
            params.delete('query')
        }

        setDatesRental(dates)

    }
    return (


        <div className="bg-white w-full h-full p-8 justify-center items-center  select-none">
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
            />
        </div>

    )
}

