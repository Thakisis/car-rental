import { useState } from "react"

import { DayPicker as ReactDayPicker } from "react-day-picker"
import { addDays } from "date-fns"
export function DayPicker() {
    const initiallySelectedDates = [new Date(), addDays(new Date(), 1)]
    const [selected, setSelected] = useState(initiallySelectedDates)
    return (
        <ReactDayPicker
            mode="multiple"
            min={2} // At least 2 dates must be selected
            max={5} // Maximum 5 dates can be selected
            selected={selected}
            onSelect={(dates) => setSelected(dates ?? [])}
        />
    )
}
