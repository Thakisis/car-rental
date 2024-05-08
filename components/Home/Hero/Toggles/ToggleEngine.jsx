"use client"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { engineType, engineText } from "@/constants"
import useCarStore from '@/Store'
export function ToggleEngines(props) {
    const { setHomeFilter } = useCarStore(state => state.Actions)
    const engineToggles = Object.entries(engineType).map(([key, value]) => <ToggleEngine key={value} text={engineText[value]} value={value} />)
    const changeGroupd = (e) => {
        setHomeFilter({ engineType: e })
    }
    return (
        <div>
            <ToggleGroup type="multiple" onValueChange={changeGroupd}>
                {engineToggles}
            </ToggleGroup>
        </div >
    )
}

function ToggleEngine({ text, value }) {
    return (<ToggleGroupItem value={value} aria-label={`de/seleccionar ${text}`}>
        <div >{text}</div>
    </ToggleGroupItem>)
}


