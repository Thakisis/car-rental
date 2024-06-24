export async function getCities() {
    //await sleep(3000)
    
    const response = await fetch('http://thakisis.ddns.net:3000/ciudades.json' )
    if (!response.ok) {
        return { codeError: response.status }
    }
    const data = await response.json()
    return data

}
export async function getCitiesDropOff(origen) {
    //await sleep(3000)
    
    const response = await fetch('http://thakisis.ddns.net:3000/ciudades.json')
    if (!response.ok) {
        return { codeError: response.status }
    }
    const data = await response.json()
    return data.filter(ciudad => ciudad.startsWith(origen[0]))

}