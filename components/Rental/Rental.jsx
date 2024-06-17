import { notFound } from "next/navigation"
import Header from "./Header"
import { getVehicle } from "@/server/Queries"


async function Rental({ carId, searchParams }) {


    const data = await getVehicle(carId)
    if (!data) notFound()

    return (
        <div className="flex flex-col justify-start items-center  w-full min-h-screen ">

            <Header {...data} />


        </div>
    )
}

export default Rental
