import { promises as fs } from 'fs'
import { filtercarType } from "./filters"
import { transformdata } from "./TransformData"
import path from 'path'
import { headers } from 'next/headers'
export async function getVehicles(params, page = 1) {
    //await sleep(3000)
    const pageSize = 5
    console.log(headers().get("host"))
    const realFilepath = path.join(process.cwd(), 'public', "vehiculos.json")
    const file = await fs.readFile(realFilepath, 'utf8')
    //const response = await fetch('http://localhost:3000/vehiculos.json', { cache: 'no-store' })
    //if (!response.ok) {
    //return { codeError: response.status }
    //}
    const data = JSON.parse(file)
    //const data = await response.json()
    const addCars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) =>
        data.vehiculos.map((car) => (
            { ...car, id: i * 10 + parseInt(car.id), marca_vehiculo: `${car.marca_vehiculo}-${i}` }
        ))).flat()
    const totalPages = Math.ceil(addCars.length / pageSize)
    const vehiculos = addCars.slice((page - 1) * pageSize, page * pageSize)

    return { totalPages, page, totalVehiculos: addCars.length, vehiculos }

}

export async function getDataFilters() {
    const realFilepath = path.join(process.cwd(), 'public', "vehiculos.json")
    const file = await fs.readFile(realFilepath, 'utf8')
    //const response = await fetch('http://localhost:3000/vehiculos.json', { cache: 'no-store' })
    //if (!response.ok) {
    //return { codeError: response.status }
    //}
    const data = JSON.parse(file)

    //const response = await fetch('http://localhost:3000/vehiculos.json', { cache: 'no-store' })
    //if (!response.ok) {
    //return { codeError: response.status }
    //}
    //const data = await response.json()

    const filters = data.aggs.aggregates.reduce((allfilters, filter) => {
        let field = Object.keys(filter)[0]
        const optionObject = filter[field].reduce((options, { disponible, numVehiculos, valor }) => ({ ...options, [valor]: { disponible, numVehiculos } }), {})
        return { ...allfilters, [field]: { ...optionObject } }

    }, {})
    return filters
}


export function filterCars(cars, params) {
    return cars.filter((car) => filtercarType[params[`carType`]])
}
export async function getVehicle(id) {

    //const response = await fetch('http://localhost:3000/vehiculos.json', { cache: 'no-store' })
    //if (!response.ok) {
    //return { codeError: response.status }
    //}
    //const data = await response.json()

    // falsear el id
    const realFilepath = path.join(process.cwd(), 'public', "vehiculos.json")
    const file = await fs.readFile(realFilepath, 'utf8')
    //const response = await fetch('http://localhost:3000/vehiculos.json', { cache: 'no-store' })
    //if (!response.ok) {
    //return { codeError: response.status }
    //}
    const data = JSON.parse(file)
    const idCar = parseInt(id) % 10
    const vehiculo = transformdata(data.vehiculos.find(car => parseInt(car.id) === idCar))



    return vehiculo

}
function sleep(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
