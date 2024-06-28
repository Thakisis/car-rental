

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
import { transformdata } from "@/server/Queries/TransformData"
async function Pago({ params, searchParams }) {

    const data = await getVehicle(params.carId)
    if (!data) notFound()
    return (

        < Dialog className=" justify-center w-auto max-w-none" defaultOpen={true} portal >

            <DialogContent className="max-w-none w" routerBack>

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
