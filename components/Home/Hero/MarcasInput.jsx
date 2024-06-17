"use client"
import MultipleSelector from '@/components/ui/MultipleSelector'
import useCarStore from '@/Store/Store'
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

const MultipleSelectorDemo = () => {
    const brands = useCarStore(state => state.homeFilter.brands)
    const setHomeFilter = useCarStore(state => state.Actions.setHomeFilter)
    const changeHandler = (selected) => {

        const brands = selected.map(item => item.label)
        setHomeFilter({ brands: brands })
    }
    const valueSel = brands?.map(item => ({ label: item, value: item.toLowerCase() }))

    return (
        <>

            <h3 className="mt-4 mb-2 text-white">Marcas de vehículos</h3>
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

export default MultipleSelectorDemo
