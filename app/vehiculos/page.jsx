
import Vehicles from "@/components/Vehicles"
export default async function Vehiculos({ searchParams }) {

    return (
        <div className="pt-20">
            <h1>vehiculos</h1>
            <Vehicles params={searchParams}></Vehicles>
        </div>
    )
}
