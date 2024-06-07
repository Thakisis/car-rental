import { getCars } from "@/server/Queries"
import FilterCard from "./FilterCard"
import SideFilter from "./SideFilter/SideFilter"
export async function Vehicles({ params }) {
    const { vehiculos, filters } = await getCars(params)
    const listCars = vehiculos.map((car) => <FilterCard key={car.id} {...car} />)
    return (
        <div >
            <div>
                <SideFilter filters={filters} params={params} />
            </div>
            <div className=" px-24  flex flex-col items-center justify-center gap-10">{listCars}</div>

        </div>
    )
}

export default Vehicles
