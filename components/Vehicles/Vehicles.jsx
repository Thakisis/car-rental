import { getCars } from "@/server/Queries"

import SideFilter from "./SideFilter/SideFilter"
export async function Vehicles({ params }) {
    const { vehiculos, filters } = await getCars(params)
    const listCars = vehiculos.map(({ id, marcay_modelo_vehiculo, }) => <div key={id}>{marcay_modelo_vehiculo} </div>)
    return (
        <div >
            <div>{listCars}</div>
            <div>
                <SideFilter filters={filters} params={params} />
            </div>
        </div>
    )
}

export default Vehicles
