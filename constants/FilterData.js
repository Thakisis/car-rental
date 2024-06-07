


export const carType = {
    coche: 0,
    moto: 1,
    elefante: 2,

}
export const carText = [{ field: "Coche", order: 0 },
{ field: "Moto", order: 0 }, "Elefante"
]

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
{
    cajaCambio: {
        title: "Caja de Cambios",
        field: "cajaCambio",
        icon: "CajaCambios",
        values: [
            {
                value: "Automatico",
                text: "Automatico",
                shortText: "Automatico"
            },
            {
                value: "Manual",
                text: "Manual",
                shortText: "Manual"
            }
        ]
    },
    tiposElectrico: {
        title: "Tipo de Electrico",
        field: "tiposElectrico",
        icon: "Motor",
        values: [
            {
                value: "BEV",
                text: "100% Eléctrico",
                shortText: "100% Eléctrico"

            },
            {
                value: "PHEV",
                text: "Híbrido Enchufable",
                shortText: "Híbr. Enchufable"
            },
            {
                value: "SHEV",
                text: "Híbrido Puro",
                shortText: "Híbr. Puro"
            },
            {
                value: "HEV",
                text: "Híbrido No Enchufable",
                shortText: "Híbr. No Enchufable"

            },
            {
                value: "MHEV",
                text: "Híbrido Ligero",
                shortText: "Híbr. Ligero"

            }
        ]
    },
    tiposVehiculo: {
        title: "Tipo de Vehiculo",
        field: "tiposVehiculo",
        icon: "Vehiculo",
        values: [
            {
                value: "Coche",
                text: "Coche",
                shortText: "Coche"
            },
            {
                value: "Moto",
                text: "Moto",
                shortText: "Moto"
            }
        ]
    },
    maximoDeKms: {
        title: "Rango Autonomia",
        field: "maximoDeKms",
        icon: "Autonomia",
        values: [
            {
                value: "Limitado",
                text: "Limitado",
                shortText: "Limitado"
            },
            {
                value: "Ilimitado",
                text: "Ilimitado",
                shortText: "Ilimitado"
            }
        ]
    },
    maximoNumPlazas: {
        title: "Numero de plazas",
        field: "maximoNumPlazas",
        icon: "Plazas",
        values: [
            {
                value: "5",
                text: "5 plazas",
                shortText: "5 plazas"
            },
            {
                value: "6",
                text: "6 plazas",
                shortText: "6 plazas"
            },

            {
                value: "7",
                text: "7 plazas",
                shortText: "7 plazas"
            }
        ]
    }
}

const Filters = {
    home: [{ field: "tiposVehiculo", order: 0 },
    { field: "tiposElectrico", order: 1 }]
    ,
    vehiculos: [{ field: "cajaCambio", order: 0 },
    { field: "tiposElectrico", order: 1 },

    { field: "tiposVehiculo", order: 2 },

    { field: "maximoDeKms", order: 3 }, { field: "maximoNumPlazas", order: 4 }
    ]

}

export const vehiculosFilter = Filters.vehiculos.toSorted((a, b) => a - b).map(({ field }) => allFilters[field])
console.log("------------------")
console.log(vehiculosFilter)
console.log("------------------")
export const HomeFilter = Filters.home.toSorted((a, b) => a - b).map(({ field }) => allFilters[field])

