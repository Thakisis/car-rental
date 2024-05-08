


export const carType = {
    coche: 0,
    moto: 1,
    elefante: 2,

}
export const carText = ["Coche", "Moto", "Elefante"]

export const engineType = {
    electrico: 0,
    hibridoEnchufable: 1,
    hibridoPuro: 2,
    hibridoNoEnchufable: 3,
    hibridoLigero: 4
}
export const engineText = [
    "100 % Eléctrico",
    "Híbrido Enchufable",
    "Híbrido Puro",
    "Híbrido No Enchufable",
    "Híbrido Ligero"
]

export const brand = {
    bmw: 0,
    tesla: 1,
    toyota: 2,
    mazda: 3,
    Nissan: 4
}

export const brandText = [
    "BMW",
    "Tesla",
    "Toyota",
    "Mazda",
    "Nissan",
]





const allFilters =
    [
        {
            title: "Caja de Cambios",
            field: "cajaCambio",
            icon: "CajaCambios",
            values: [{ value: "Automatico", text: "Automatico" }, { value: "Manual", text: "Manual" }]
        },
        {
            title: "Tipo de Electrico",
            field: "tiposElectrico",
            icon: "Motor",
            values: [
                {
                    value: "BEV",
                    text: "100% Eléctrico"
                },
                {
                    value: "PHEV",
                    text: "Híbrido Enchufable"
                },
                {
                    value: "SHEV",
                    text: "Híbrido Puro"
                },
                {
                    text: "Híbrido No Enchufable",
                    value: "HEV",
                },
                {
                    text: "Híbrido Ligero",
                    value: "MHEV",
                }
            ]
        },
        {
            title: "Tipo de Vehiculo",
            field: "tiposVehiculo",
            icon: "Vehiculo",
            values: [{ value: "Coche", text: "Coche" }, { value: "Moto", text: "Moto" }]
        },
        {
            title: "Rango Autonomia",
            field: "maximoDeKms",
            icon: "Autonomia",
            values: [{ value: "Limitado", text: "Limitado" }, { value: "Ilimitado", text: "Ilimitado" }]
        },
        {
            title: "Numero de plazas",
            field: "maximoNumPlazas",
            icon: "Plazas",
            values: [{ value: "5", text: "5 plazas" }, { value: "6", text: "6 plazas" }, { value: "7", text: "7 plazas" }]
        },
    ]

const Filters = {
    home: [],
    vehiculos: ["cajaCambio", "tiposElectrico", "tiposVehiculo", "maximoDeKms", "maximoNumPlazas"]
}

export const vehiculosFilter = allFilters.filter(({ field }) => Filters.vehiculos.includes(field))
