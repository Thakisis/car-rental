"use client"
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Tooltip from '@/components/Tooltip'
import useCarStore from '@/Store/Store'
import CityComboDestino from './CityComboDestino'
import { ArrowRight } from 'lucide-react'
function AddDropoff(props) {
    const ciudad = useCarStore(state => state.citiesRental.ciudad)
    const [isDropOff, setDropOff] = useState(false)
    if (!ciudad)
        return null

    return (
        <>
            <Tooltip tooltip="Añadir lugar alternativo de entrega" dark>
                <Button className={isDropOff ? "rounded-none pointer-events-none" : "rounded-l-none"} onClick={() => { setDropOff(true) }}>{isDropOff ? <ArrowRight className="h-4 w-4" /> : "+"}</Button>
            </Tooltip>
            {isDropOff && <CityComboDestino {...props} />}
        </>



    )
}

export default AddDropoff
