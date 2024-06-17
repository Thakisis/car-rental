import { Tooltip as Tooltipsn, TooltipContent, TooltipTrigger } from "../ui/tooltip"

function Tooltip({ children, tooltip, dark }) {
    const classTool = dark ? "bg-slate-700 text-slate-200" : "bg-slate-200 text-slate-700"
    return (
        <Tooltipsn>
            <TooltipTrigger asChild className="select-none">{children}</TooltipTrigger>
            <TooltipContent className={classTool}>{tooltip}</TooltipContent>

        </Tooltipsn>
    )
}

export default Tooltip
