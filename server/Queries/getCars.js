import { filtercarType } from "./filters"
export async function getCars(params) {
    const res = await fetch('http://localhost:3000/vehiculos.json', { cache: 'no-store' })

    console.log(params)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    const cars = data.vehiculos
    const filters = data.aggs.aggregates.reduce((allfilters, filter) => {
        let field = Object.keys(filter)[0]
        const optionObject = filter[field].reduce((options, { disponible, numVehiculos, valor }) => ({ ...options, [valor]: { disponible, numVehiculos } }), {})
        return { ...allfilters, [field]: { ...optionObject } }

    }, {})
    let vehiculos = cars
    if (params.tiposVehiculo) {
        vehiculos = Array.isArray(params.tiposVehiculo) ? vehiculos.filter(({ tipo_vehiculo }) => params.tiposVehiculo.includes(tipo_vehiculo)) :
            vehiculos.filter(({ tipo_vehiculo }) => params.tiposVehiculo === tipo_vehiculo)
    }
    console.log(vehiculos)
    return { vehiculos, filters }
    //return vehicles
    //return filterCars(vehicles["vehiculos"], params)
}


function filterCars(cars, params) {
    return cars.filter((car) => filtercarType[params[`carType`]])
}
