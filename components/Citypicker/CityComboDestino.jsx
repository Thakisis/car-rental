"use client"
import { Combobox } from '@/components/ui/comboBox'
import useCarStore from '@/Store/Store'
import { cn } from '@/lib/utils'
import { useRouter, usePathname } from 'next/navigation'
import { createQueryUrl } from '@/lib/queryParams'
function CityComboDestino({ writeUrl, params }) {
    const citiesRental = useCarStore(state => state.citiesRental)
    const setCity = useCarStore(state => state.Actions.setCity)
    const ciudades = useCarStore(state => state.listDropOff).map((ciudad) => ({ value: ciudad, label: ciudad }))

    const router = useRouter()
    const pathName = usePathname()
    const setCiudad = (ciudad) => {
        setCity({ key: "dropoff", value: ciudad })
        if (!writeUrl) return
        const newParams = { ...params }
        newParams.dropoff = ciudad
        const url = createQueryUrl(newParams)
        router.replace(`${pathName}?${url}`)
    }

    const dropOffvalue = citiesRental.dropoff && ciudades.find(city => city.value === citiesRental.dropoff) ? citiesRental.dropoff : citiesRental.ciudad

    return (
        <Combobox
            options={ciudades}
            placeholder={" + "}
            placeHolderSearch={"Buscar..."}
            tooltip="Añadir lugar alternativo de entrega"
            onChange={setCiudad}
            emptyText={"Sin coincidencia"}
            value={dropOffvalue}
            showShevron
            className={cn("rounded-l-none px-4 justify-start text-left font-normal items-center  flex overflow-clip  ")}
        />

    )
}

export default CityComboDestino
