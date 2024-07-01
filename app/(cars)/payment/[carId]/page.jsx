

import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogClose

} from "@/components/ui/dialog"
import { paymentDialog } from '@/components/PaymentDialog'
import { Button } from "@/components/ui/button"
import PaymentDialog from "@/components/PaymentDialog/PaymentDialog"
import { getVehicle } from "@/server/Queries"
import { notFound } from "next/navigation"
import { cn } from "@/lib/utils"

async function Pago({ params, searchParams }) {

    const data = await getVehicle(params.carId)
    if (!data) notFound()



    return (

        < Dialog className=" justify-center  w-auto  max-w-52" defaultOpen={true} portal >

            <DialogContent className={cn("w-full lg:max-w-[60rem] xl:max-w-[80rem] aspect-none lg:aspect-2/1    ")} routerBack>

                <PaymentDialog {...data} {...searchParams} />
                <DialogFooter routerBack >
                    <DialogClose asChild>
                        <Button type="button" >
                            Cerrar
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog >

    )
}

export default Pago
