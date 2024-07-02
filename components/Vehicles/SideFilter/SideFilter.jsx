
import { Button } from "@/components/ui/button"
import Filters from './Filters'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import MarcasInput from "@/components/MarcasInput"


export default function SideFilter({ params }) {
    return (
        <Sheet className="">
            <SheetTrigger asChild>
                <Button >Cambiar Criterios de Busqueda</Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:w-full ">
                <SheetHeader>
                    <SheetTitle>Configure su Vehiculo</SheetTitle>
                    <SheetDescription>
                        Title
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid  items-center gap-4">
                        <Filters {...params}></Filters>
                    </div>
                    <MarcasInput {...params} writeUrl />
                </div>
            </SheetContent>
        </Sheet>
    )
}
