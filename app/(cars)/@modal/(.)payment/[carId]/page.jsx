

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

        < Dialog className="flex justify-center  w-auto  max-w-52" defaultOpen={true}  >

            <DialogContent className=" w-full lg:max-w-[60rem] xl:max-w-[80rem] aspect-none lg:aspect-2/1   " routerBack>

                <PaymentDialog {...data} {...searchParams} />
                <DialogFooter routerBack className="pt-0" >
                    <DialogClose>
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
