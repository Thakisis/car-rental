import { carType as vehiclesList } from "@/constants"

export function filtercarType(car, tipos) {
    if (tipos.length === 0)
        return true
    const type = vehiclesList[car.tipo_vehiculo.toLowerCase()]
    if (tipos.includes[type]) return true
    return false

}

