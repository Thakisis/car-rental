import { promises as fs } from 'fs';


export async function getCities() {
    //await sleep(3000)
    const file = await fs.readFile(process.cwd() + '/app/ciudades.json', 'utf8');
    const data = JSON.parse(file);
    //const response = await fetch(`http://localhost/ciudades.json` )
    //if (!response.ok) {
    //    return { codeError: response.status }
    //}
    //const data = await response.json()
    return data

}
export async function getCitiesDropOff(origen) {
    //await sleep(3000)
    const file = await fs.readFile(process.cwd() + '/app/ciudades.json', 'utf8');
    const data = JSON.parse(file);
    //const response = await fetch(`https://carefast.vercel.app/ciudades.json`)
    //if (!response.ok) {
      //  return { codeError: response.status }
    //}
    //const data = await response.json()
    return data.filter(ciudad => ciudad.startsWith(origen[0]))

}
