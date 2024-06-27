"use client"
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Tooltip from '@/components/Tooltip'
import useCarStore from '@/Store/Store'
import CityComboDestino from './CityComboDestino'
import { ArrowRight } from 'lucide-react'
function AddDropoff(props) {
    const ciudad = useCarStore(state => state.citiesRental.ciudad)
    const dropoff = useCarStore(state => state.citiesRental.dropoff)
    const [isDropOff, setDropOff] = useState(false)
    if (!ciudad)
        return null

    return (
        <>
            <Tooltip tooltip="Añadir lugar alternativo de entrega" dark>
                <Button className={isDropOff || dropoff ? "rounded-none pointer-events-none" : "rounded-l-none"} onClick={() => { setDropOff(true) }}>{isDropOff || dropoff ? <ArrowRight className="h-4 w-4" /> : "+"}</Button>
            </Tooltip>
            {(isDropOff || dropoff) && <CityComboDestino {...props} />}
        </>



    )
}

export default AddDropoff
