"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import Tooltip from "../Tooltip"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useMemo } from "react"

export function Combobox({ value, onChange, options, placeholder, emptyText, className, showShevron, variant, placeHolderSearch, tooltip }) {
    const [open, setOpen] = React.useState(false)
    const onSelect = (currentValue) => {
        onChange(currentValue)
        setOpen(false)
    }
    const selectList = useMemo(() => options.map((option) => <Option key={option.value} option={option} onSelect={onSelect} selected={value === option.value} />), [options, value])
    const isOnList = options.find((framework) => options.value === value)?.label
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild >
                <Button
                    variant={variant}
                    role="combobox"
                    aria-expanded={open}
                    className={cn(" justify-between border-0", className)}
                >
                    {value
                        ? options.find((framework) => framework.value === value)?.label
                        : placeholder}
                    {showShevron && <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />}
                </Button>

            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder={placeHolderSearch} />
                    <CommandList>
                        <CommandEmpty>{emptyText}</CommandEmpty>
                        <CommandGroup>
                            {selectList}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

function Option({ option, onSelect, selected }) {

    return (<CommandItem

        value={option.value}
        onSelect={onSelect}
    >
        <Check
            className={cn(
                "mr-2 h-4 w-4",
                selected ? "opacity-100" : "opacity-0"
            )}
        />
        {option.label}
    </CommandItem>)


}
