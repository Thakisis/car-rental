
import { es } from "date-fns/locale"
import { Calendar } from "@/components/ui/calendar"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import useCarStore from "@/Store/Store"
import { useRouter } from "next/navigation"

import { createQuery, createQueryUrl, decodeQuery } from "@/lib/queryParams"

export default function DatePicker(params) {

    const dates = useCarStore(state => state.datesRental)
    const setDatesRental = useCarStore(state => state.Actions.setDatesRental)
    /* eslint-disable */
    useEffect(() => {

        if (!params.from || !params.to || dates) return
        const datesRental = { from: params.from ? new Date(parseInt(params.from)) : null, to: params.to ? new Date(parseInt(params.to)) : null }

        setDatesRental(datesRental)
    }, [])
    /* eslint-disable */

    const router = useRouter()
    const pathname = usePathname()


    const isSmallScreen = window.innerWidth < 960 ? true : false

    const changeDates = (newDates) => {

        setDatesRental(newDates)

        const newParams = { ...params }
        newParams.from = newDates?.from?.getTime()
        newParams.to = newDates?.to?.getTime()

        const url = createQueryUrl(newParams)


        router.replace(`${pathname}?${url}`, { scroll: false })



    }
    return (


        <div className="bg-white w-full h-full p-8 justify-center items-center  select-none">
            <Calendar

                mode="range"
                locale={es}
                selected={dates}
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

