import React from 'react'
import MultipleSelector from '@/components/ui/MultipleSelector'
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
    return (
        <>

            <h3 className="mt-4 mb-2 text-white">Marcas de vehículos</h3>
            <MultipleSelector
                defaultOptions={OPTIONS}
                placeholder="Añada marcas de vehículos"
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
