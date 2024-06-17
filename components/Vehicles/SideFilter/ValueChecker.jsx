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
    return (<div className={`items-top flex space-x-2 ${disponible ? "text-gray-800" : "text-red-500"}`}>
        <Checkbox id={value} disabled={!disponible} checked={checked} onCheckedChange={switchHandler} />
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




function changeParams2(params, field, value, isChecked) {
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
