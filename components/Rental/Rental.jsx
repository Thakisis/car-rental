import { notFound } from "next/navigation"
import Header from "./Header"
import { getVehicle } from "@/server/Queries"
import Content from "./Content"
import Sidebar from "./Sidebar"
import Back from "./Back"
async function Rental({ carId, searchParams }) {
    const data = await getVehicle(carId)
    if (!data) notFound()
    return (
        <div className="flex flex-col justify-start items-center  w-full  pt-24">

            <Header {...data}  {...searchParams} />

            <div className="container mx-auto flex flex-wrap py-6">

                <section className="w-full md:w-3/4 flex flex-col items-center ">
                    <Back />
                    <Content {...data} />
                </section>

                <aside className="w-full md:w-1/4 flex flex-col items-center px-3">

                    <Sidebar carId={carId} {...data} {...searchParams} />
                </aside>
            </div>




        </div>
    )
}

export default Rental
