"use client"

import { Button } from "@/components/ui/button"
import { createQuery, createQueryUrl } from "@/lib/queryParams"
import useCarStore from "@/Store"
import Link from "next/link"


function LinkSearch(props) {
    const cleanFilter = useCarStore(state => state.homeFilter)
    const dates = useCarStore(state => state.datesRental)
    const cities = useCarStore(state => state.citiesRental)
    const citiesQuery = cities.ciudad === cities.dropoff ? { ciudad: cities.ciudad } : cities
    const query = createQuery({ ...cleanFilter, from: dates?.from?.getTime(), to: dates?.to?.getTime(), ...citiesQuery })
    const urlString = createQueryUrl(query)

    return (
        <Link href={`/vehiculos?${urlString}`} prefetch={true}>
            <Button>Buscar Vehiculos</Button>
        </Link>
    )
}

export default LinkSearch

