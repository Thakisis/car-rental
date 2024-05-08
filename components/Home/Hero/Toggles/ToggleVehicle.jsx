"use client"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { carType, carText } from "@/constants"
import useCarStore from '@/Store'
export function ToggleVehicle(props) {
    const { setHomeFilter } = useCarStore(state => state.Actions)
    const CarToggles = Object.entries(carType).map(([key, value]) => <ToggleCar key={value} text={carText[value]} value={value} />)
    const changeGroupd = (e) => {
        setHomeFilter({ carType: e })
    }
    return (
        <div>
            <ToggleGroup type="multiple" onValueChange={changeGroupd}>
                {CarToggles}
            </ToggleGroup>
        </div >
    )
}

function ToggleCar({ text, value }) {
    return (<ToggleGroupItem value={value} aria-label={`de/seleccionar ${text}`}>
        <div >{text}</div>
    </ToggleGroupItem>)
}


