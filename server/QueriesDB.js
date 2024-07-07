import { transformdata } from "./Queries/TransformData"
import { createQueryUrl } from "@/lib/queryParams"
const baseurl = process.env.NEXT_PUBLIC_APIURL


export async function getVehicles(params, page = 1) {
    const { from, to, ...dbparams } = params
    let url = createQueryUrl(dbparams)
    const response = await fetch(`${baseurl}/vehiculos?${url}`)
    const data = await response.json()

    return { totalPages: data.totalPages, totalVehiculos: data.totalHits, vehiculos: data.vehiculos }

}

export async function getVehicle(id) {
    const response = await fetch(`${baseurl}/vehiculos?idVehiculo=${id}`)
    if (!response.ok) {
        return { codeError: response.status }
    }
    const data = await response.json()
    return transformdata(data.vehiculos[0])
}
export async function getDataFilters(params) {
    const { from, to, ...dbparams } = params
    let url = createQueryUrl(dbparams)
    const response = await fetch(`${baseurl}/vehiculos?${url}`)
    const data = await response.json()



    const filters = data.aggs.aggregates.reduce((allfilters, filter) => {
        let field = Object.keys(filter)[0]
        const optionObject = filter[field].reduce((options, { disponible, numVehiculos, valor }) => ({ ...options, [valor]: { disponible, numVehiculos } }), {})
        return { ...allfilters, [field]: { ...optionObject } }

    }, {})
    return filters
}

export async function getCities() {
    const response = await fetch(`${baseurl}/ciudadesVehiculo`)
    const data = await response.json()

    return data.ciudadesUnicas

}
export async function getCitiesDropOff(origen) {
    const response = await fetch(`${baseurl}/ciudadesDevolverVehiculos?nombreCiudadesVehiculo=${origen}`)
    const data = await response.json()
    return data.ciudadesUnicas
}

export async function getMarcasVehiculo() {
    const response = await fetch(`${baseurl}/tiposMarcas`)
    const data = await response.json()

    const marcas = data.tiposMarcas.map((marca) => ({ value: marca, label: marca }))
    return marcas

}
