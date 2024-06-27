"use client"

import useCarStore from "@/Store/Store"
import { useRouter } from "next/navigation"
import { createQueryUrl } from "@/lib/queryParams"
import { useEffect } from "react"
function ParamsRecover({ params }) {
    const router = useRouter()
    const { from, to, ciudad, dropoff } = params
    const stateParams = useCarStore((state) => ({ datesRental: state.datesRental, citiesRental: state.citiesRental }))

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {

        const newParams = compareParams({ params, state: stateParams })
        const url = createQueryUrl(newParams)

        router.replace(`/vehiculos?${url}`)
    }, [])

    return (
        <div>

        </div>
    )
}

export default ParamsRecover

function compareParams({ params, state }) {
    const datesRental = state.datesRental
    const citiesRental = state.citiesRental

    const stateParams = {
        from: datesRental.from && datesRental?.from?.getTime(),
        to: datesRental.to && datesRental?.to?.getTime(),
        ciudad: citiesRental.ciudad,
        dropoff: citiesRental.dropoff

    }

    Object.keys(stateParams).forEach(key => {
        if (!params[key] && stateParams[key]) {
            params[key] = stateParams[key]
        }
    })
    return params

}
