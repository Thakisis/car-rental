"use client"
import MultipleSelector from '@/components/ui/MultipleSelector'
import useCarStore from '@/Store/Store'
import { useRouter, usePathname } from 'next/navigation'
import { createQueryUrl } from '@/lib/queryParams'
import { useEffect } from 'react'
//electric vehicle brands
const OPTIONS = [
    { label: 'Tesla', value: 'tesla' },
    { label: 'Ford', value: 'ford' },
    { label: 'Chevrolet', value: 'chevrolet' },
    { label: 'BMW', value: 'bmw' },
    { label: 'Audi', value: 'audi' },
    { label: 'Mercedes', value: 'mercedes' },
    { label: 'Volvo', value: 'volvo' },


]

const MarcasSideBar = ({ writeUrl, ...params }) => {
    const brands = useCarStore(state => state.homeFilter.brands)
    const setHomeFilter = useCarStore(state => state.Actions.setHomeFilter)
    const router = useRouter()
    const pathName = usePathname()
    /* eslint-disable */
    useEffect(() => {

        if (!params.brands || brands) return
        setHomeFilter({ brands: params.brands })
    }, [])
    const changeHandler = (selected) => {
        const brands = selected.map(item => item.label)
        setHomeFilter({ brands: brands })
        if (!writeUrl) return
        const newParams = { ...params }
        newParams.brands = brands.join(",")
        const url = createQueryUrl(newParams)
        router.replace(`${pathName}?${url}`)

    }
    const valueSel = brands?.map(item => ({ label: item, value: item.toLowerCase() }))
    return (
        <>

            <h3 className="mt-4 mb-2 ">Marcas de vehículos</h3>
            <MultipleSelector
                onChange={changeHandler}
                defaultOptions={OPTIONS}
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

export default MarcasSideBar
