"use client"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import useCarStore from '@/Store'

const Toggle = ({ field, values, title }) => {
    const { setHomeFilter } = useCarStore(state => state.Actions)
    const groupItem = useCarStore(state => state.homeFilter[field])
    const ToggleElements = values.map(({ value, shortText }) => <ToggleGroupItem key={value} value={value}>{shortText}</ToggleGroupItem>)
    const changeHandler = (selected) => {
        setHomeFilter({ [field]: selected })
    }
    return (
        <div>
            <h3 className="mt-4 mb-2 text-white">{title}</h3>
            <ToggleGroup type="multiple" onValueChange={changeHandler} value={groupItem}>
                {ToggleElements}
            </ToggleGroup>
        </div>
    )
}

export default Toggle
