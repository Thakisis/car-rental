"use client"
import { Checkbox } from "@/components/ui/checkbox"
import { useSearchParams, useRouter } from "next/navigation"
import { useCallback } from "react"
export function ValueChecker({ field, value, text, disponible, numVehiculos, fullParams, checked }) {




    const router = useRouter()
    const searchParams = useSearchParams()
    const switchChecker = (isChecked) => {

        const newParams = changeParams(fullParams, field, value, isChecked)

        const queryUrl = createQueryUrl(newParams)





        router.push(`/vehiculos?${queryUrl}`)


    }
    return (<div className={`items-top flex space-x-2 ${disponible ? "text-gray-800" : "text-red-500"}`}>
        <Checkbox id={value} disabled={!disponible} checked={checked} onCheckedChange={switchChecker} />
        <div className="grid gap-1.5 leading-none">
            <label
                htmlFor={value}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                {text} ({numVehiculos})
            </label>
        </div>
    </div>)

}
function createQueryUrl(params) {

    const url = Object.entries(params).map(([field, data]) => {
        if (!Array.isArray(data)) {

            return `&${field}=${data}`
        }
        return data.map(value => `&${field}=${value}`).join("")
    }).join('')
    return url.substring(1, url.length)

}

function changeParams(params, field, value, isChecked) {
    const paramSelected = params[field]
    // caso es un array y se ha marcado como checked el parametro ya tiene 2 elementos en la url, el nuevo se añade
    if (isChecked && Array.isArray(paramSelected)) return { ...params, [field]: [...paramSelected, value] }

    // Caso se ha el parametro no es un array pero existe y se marcado como checkeado, El valor anterior y el nuevo forman un nuevo array
    if (isChecked && paramSelected) return { ...params, [field]: [paramSelected, value] }

    // se ha marcado como checked pero el parametro no existe asi que se crea un valor simple
    if (isChecked) return { ...params, [field]: value }

    // a partir de aqui se desmarca el elemento

    // El parametro es un array y tiene al menos 3 elementos luego el nuevo parametro sera un array de 2
    if (Array.isArray(paramSelected) && paramSelected.length >= 3) return { ...params, [field]: paramSelected.filter(valor => valor !== value) }

    // el parametro es un array luego tiene que tener 2 elementos puesto que si fuese uno seria param=value
    // se encuentra el elemento distinto al eliminado y se crea el parametro sin array
    if (Array.isArray(paramSelected)) return { ...params, [field]: paramSelected.filter(valor => valor !== value)[0] }

    //el elemento es unico en el parametro y se eliminara todo el parametro
    const cloneParams = { ...params }
    delete cloneParams[field]
    return cloneParams
}
