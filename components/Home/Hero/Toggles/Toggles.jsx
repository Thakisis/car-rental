import { HomeFilter } from "@/constants"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import Toggle from "./Toggle"
const Toggles = () => {
    const filters = HomeFilter.map(filterData => <Toggle key={filterData.field}{...filterData} />)

    return (
        <div>
            {filters}
        </div>
    )
}

export default Toggles
