import {promises as fs} from 'fs'
import path from 'path'


export async function getCities() {
    //await sleep(3000)

    const realFilepath =await path.join(process.cwd(), 'public', "ciudades.json")
    const file= await fs.readFile(realFilepath,'utf8')
        //const response = await fetch('http://localhost:3000/vehiculos.json', { cache: 'no-store' })
        //if (!response.ok) {
            //return { codeError: response.status }
        //}
   
        const data=JSON.parse(file)
      
    //const response = await fetch(`http://localhost/ciudades.json` )
    //if (!response.ok) {
    //    return { codeError: response.status }
    //}
    //const data = await response.json()
    return data

}
export async function getCitiesDropOff(origen) {
    //await sleep(3000)
    
    const response = await fetch(`https://carefast.vercel.app/ciudades.json`)
    if (!response.ok) {
        return { codeError: response.status }
    }
    const data = await response.json()
    return data.filter(ciudad => ciudad.startsWith(origen[0]))

}
