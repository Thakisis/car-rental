export function createQuery(query) {
     return Object.entries(query).reduce((prev, [key, value]) => {
         return {...prev,[key]:Array.isArray(value)? value.join(','):value}
        }, {}); //
}   
export function decodeQuery(query) {
     return Object.entries(query).reduce((prev, [key, value]) => {
         return {...prev,[key]:value.includes(',')? value.split(','):value}
        }, {}); //
}   

export function changeParams(paramField, value, isChecked) {
    const isArray = Array.isArray(paramField)
    if (isArray && isChecked) return [...paramField, value].join(",")
    if (paramField && isChecked) return [paramField, value].join(",")
    if (isChecked) return value
    if (isArray && paramField.length === 2) return paramField.filter(el => el !== value)[0]
    if (isArray) return paramField.filter(el => el !== value).join(",")
    return null

}

export function createQueryUrl(params) {

    const url = Object.entries(params).map(([field, data]) => {
        if(!data || data==="") return ""
        if (!Array.isArray(data)) {
            return `&${field}=${data}`
        }
    
        return `&${field}=${data.join(",")}`
    }).join('')
    return url.substring(1, url.length)
}
