
import { getCities } from "@/server/QueriesDB"
import CityComboOrigen from "./CityComboOrigen"
import AddDropoff from "./AddDropoff"
async function CityPicker({ writeUrl, params, children }) {
    const cities = await getCities()
    const ciudades = cities.map((city) => ({ value: city, label: city }))






    return (
        <div className="flex ">
            <CityComboOrigen ciudades={ciudades} writeUrl={writeUrl} params={params} />
            <AddDropoff writeUrl={writeUrl} params={params} />

        </div>
    )
}

export default CityPicker


