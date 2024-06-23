"use client"

import { Combobox } from '@/components/ui/comboBox'
import useCarStore from '@/Store/Store'
import { cn } from '@/lib/utils'
import { useRouter, usePathname } from 'next/navigation'
import { createQueryUrl } from '@/lib/queryParams'
function CityComboOrigen({ ciudades, writeUrl, params }) {
    const ciudad = useCarStore(state => state.citiesRental.ciudad)
    const setCity = useCarStore(state => state.Actions.setCity)
    const router = useRouter()
    const pathName = usePathname()
    const setCiudad = (ciudad) => {
        setCity({ key: "ciudad", value: ciudad })
        if (!writeUrl) return
        const newParams = { ...params }
        newParams.ciudad = ciudad
        const url = createQueryUrl(newParams)
        router.replace(`${pathName}?${url}`)

    }



    const roundClass = ciudad && "rounded-r-none"

    return (

        <Combobox
            variant={ciudad ? "default" : "outline"}
            tooltip="Ciudad de alquiler"
            options={ciudades}
            placeholder={"Ciudad de origen"}
            placeHolderSearch="buscar..."
            onChange={setCiudad}
            emptyText={"Sin coincidencia"}
            value={ciudad}
            showShevron
            className={cn(" px-4 justify-start text-left font-normal items-center  flex overflow-clip", roundClass)}
        />


    )
}

export default CityComboOrigen
