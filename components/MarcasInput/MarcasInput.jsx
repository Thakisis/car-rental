"use client"
import MultipleSelector from '@/components/ui/MultipleSelector'
import useCarStore from '@/Store/Store'
import { useRouter, usePathname } from 'next/navigation'
import { createQueryUrl } from '@/lib/queryParams'
import { useEffect } from 'react'
const MarcasInput = ({ writeUrl, marcas, ...params }) => {
    const marcasVehiculo = useCarStore(state => state.homeFilter.marcasVehiculo)
    const setHomeFilter = useCarStore(state => state.Actions.setHomeFilter)
    const router = useRouter()
    const pathName = usePathname()
    console.log(<marcas></marcas>)
    /* eslint-disable */
    useEffect(() => {

        if (!params.marcasVehiculo || marcasVehiculo) return
        setHomeFilter({ marcasVehiculo: params.marcasVehiculo })
    }, [])
    const changeHandler = (selected) => {
        const marcasVehiculo = selected.map(item => item.label)
        setHomeFilter({ marcasVehiculo: marcasVehiculo })
        if (!writeUrl) return
        const newParams = { ...params }
        newParams.marcasVehiculo = marcasVehiculo.join(",")
        const url = createQueryUrl(newParams)
        router.replace(`${pathName}?${url}`)

    }
    const valueSel = marcasVehiculo?.map(item => ({ label: item, value: item.toLowerCase() }))
    return (
        <>

            <h3 className="mt-4 mb-2 ">Marcas de vehículos</h3>
            <MultipleSelector
                onChange={changeHandler}
                defaultOptions={marcas}
                placeholder="Añada marcas de vehículos"
                value={valueSel}
                hidePlaceholderWhenSelected
                emptyIndicator={
                    <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                        No se encontro resultados
                    </p>
                }
            />
        </>
    )
}

export default MarcasInput
