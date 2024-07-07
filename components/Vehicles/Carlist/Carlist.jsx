import Card from "./Card"
import { getVehicles } from "@/server/QueriesDB"
import Pagination from "./Pagination"

async function Carlist(params) {
    const page = params.page ? parseInt(params.page) : 1
    const { from, to, ciudad, dropoff } = params
    const { vehiculos, ...propsPages } = await getVehicles(params, page)

    const listCars = vehiculos.map((car) => <Card key={car.id} {...car} datesRental={{ from, to }} citiesRental={{ ciudad, dropoff }} />)
    return <div>
        <Pagination className="justify-end pb-6 "  {...propsPages} params={params} page={parseInt(params.page) ?? 1} />
        <div className="flex flex-col gap-8 ">
            {listCars}
        </div>
    </div>
}

export default Carlist
