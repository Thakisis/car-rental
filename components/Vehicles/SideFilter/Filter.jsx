import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import * as Iconos from './Icons'
import { ValueChecker } from "./ValueChecker"

export function Filter({ title, field, icon, values, dataFilter, urlState = [], fullParams }) {


    const Icono = Iconos[icon]
    const checkersList = values.map((checker) => <ValueChecker key={checker.value} {...checker} {...dataFilter[checker.value]} field={field} checked={include(urlState, checker.value)} fullParams={fullParams} />)
    return (

        <AccordionItem value={field}>
            <AccordionTrigger className="flex justify-start gap-5 "><div className="flex w-full">    <Icono className="w-6 h-6 mr-3" /> {title}</div></AccordionTrigger>
            <AccordionContent className="flex flex-col justify-start gap-5 pl-7">
                {checkersList}
            </AccordionContent>
        </AccordionItem>

    )
}

function include(url, value) {
    if (!url) return false

    if (Array.isArray(url)) {
        return url.includes(value)
    }
    return url === value
}
