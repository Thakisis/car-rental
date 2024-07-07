"use client"
import { Checkbox } from "@/components/ui/checkbox"
import { changeParams, createQueryUrl } from "@/lib/queryParams"
import { useRouter } from "next/navigation"
import useCarStore from "@/Store"

export function ValueChecker({ field, value, text, disponible, numVehiculos, fullParams, checked }) {
    const switchChecker = useCarStore(state => state.Actions.switchChecker)
    const router = useRouter()
    const switchHandler = (isChecked) => {
        switchChecker(field, value, isChecked)
        const newFieldParam = changeParams(fullParams[field], value, isChecked)
        let finalParams = fullParams
        if (newFieldParam) {
            finalParams = { ...fullParams, [field]: newFieldParam }

        } else {
            delete finalParams[field]
        }
        const queryUrl = createQueryUrl(finalParams)
        router.push(`/vehiculos?${queryUrl}`, { shallow: true })

    }
    return (<div className={`items-top flex space-x-2 ${disponible ? "text-gray-800" : "text-gray-400"}`}>
        <Checkbox id={value} disabled={!disponible} checked={checked} onCheckedChange={switchHandler} />
        <div className="grid gap-1.5 leading-none">
            <label
                htmlFor={value}
                className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 `}
            >
                {text}{disponible && ` (${numVehiculos})`}
            </label>
        </div>
    </div>)

}

