import SideFilter from "./SideFilter"
import { decodeQuery } from "@/lib/queryParams"
import Carlist from "./Carlist"
import { Suspense } from "react"
import SelectDate from "./SelectDate"
export async function Vehicles({ params }) {


    const decodeParams = decodeQuery(params)


    return (
        <div >

            <div>
                <SideFilter params={decodeParams} />
                <SelectDate />
            </div>
            <div className=" px-24  flex flex-col items-center justify-center gap-10 py-10">
                <Suspense fallback={<div>Loading...</div>}>
                    <Carlist {...decodeParams} />
                </Suspense>
            </div>

        </div>
    )
}

export default Vehicles
