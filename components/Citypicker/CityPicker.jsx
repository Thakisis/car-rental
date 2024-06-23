
import { Button } from "@/components/ui/button"

import { MapPinned, MapPin } from "lucide-react"
import { getCities } from "@/server/Queries/getCities"
import CityComboOrigen from "./CityComboOrigen"
import CityComboDestino from "./CityComboDestino"
import AddDropoff from "./AddDropoff"
async function CityPicker({ writeUrl, params }) {
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


