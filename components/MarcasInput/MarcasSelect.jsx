import { getMarcasVehiculo } from '@/server/QueriesDB'
import MarcasInput from "./MarcasInput"
export default async function MarcasSelect() {
    const marcas = await getMarcasVehiculo()
    console.log(marcas)
    return <MarcasInput marcas={marcas} />
}
