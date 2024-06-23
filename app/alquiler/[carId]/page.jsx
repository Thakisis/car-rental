import Rental from "@/components/Rental"
import { Suspense } from "react"
function page({ params, searchParams }) {

    return (
        <div className="flex  w-full min-h-screen  justify-center items-center color-black ">
            <Suspense fallback={<div className="text-slate-800 text-5xl">Loading...</div>}>

                <Rental carId={params.carId} searchParams={searchParams} />

            </Suspense>
        </div>
    )
}

export default page
