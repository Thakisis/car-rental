
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const Toggle = ({ field, values, title }) => {
    const ToggleElements = values.map(({ value, text, shortText }) => <ToggleGroupItem key={value} value={value}>{shortText}</ToggleGroupItem>)
    return (
        <div>
            <h3 className="mt-4 mb-2 text-white">{title}</h3>
            <ToggleGroup type="multiple" >
                {ToggleElements}
            </ToggleGroup>
        </div>
    )
}

export default Toggle
