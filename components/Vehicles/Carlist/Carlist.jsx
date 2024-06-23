import Card from "./Card"
import { getVehicles } from "@/server/Queries"
import Pagination from "./Pagination"

async function Carlist(params) {
    const page = params.page ? parseInt(params.page) : 1
    const { from, to } = params
    const { vehiculos, ...propsPages } = await getVehicles(null, page)
    const listCars = vehiculos.map((car) => <Card key={car.id} {...car} datesRental={{ from, to }} />)
    return <div>
        <Pagination className="justify-end pb-6 "  {...propsPages} params={params} page={parseInt(params.page) ?? 1} />
        <div className="flex flex-col gap-8 ">
            {listCars}
        </div>
    </div>
}

export default Carlist
