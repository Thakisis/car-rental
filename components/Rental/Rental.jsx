import { notFound } from "next/navigation"
import Header from "./Header"
import { getVehicle } from "@/server/Queries"
import Content from "./Content"
import Sidebar from "./Sidebar"
import BackButton from "./BackButton"
async function Rental({ carId, searchParams }) {
    const data = await getVehicle(carId)
    if (!data) notFound()
    return (
        <div className="flex flex-col justify-start items-center  w-full  pt-24  ">

            <Header {...data}  {...searchParams} />

            <div className=" px-[3%]  w-full mx-auto flex flex-col  xl:flex-row flex-wrap py-6 ">

                <section className="w-full xl:w-3/4 flex flex-col items-center ">
                    <BackButton />
                    <Content {...data} />
                </section>

                <aside className="w-full xl:w-1/4 flex flex-col items-center ">

                    <Sidebar carId={carId} {...data} {...searchParams} />
                </aside>
            </div>




        </div>
    )
}

export default Rental
