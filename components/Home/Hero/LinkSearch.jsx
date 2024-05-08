"use client"
import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import useCarStore from "@/Store"
import Link from "next/link"


function LinkSearch(props) {
    const cleanFilter = useCarStore(state => state.cleanFilter)

    return (

        <Link href={{ pathname: '/vehiculos', query: { ...cleanFilter } }}>
            <Button>Buscar Vehiculos</Button>
        </Link>

    )
}

export default LinkSearch

