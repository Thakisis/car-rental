import { create } from 'zustand'
import { purgeFilters } from './StoreHelpers'
import { getCitiesDropOff } from '@/server/QueriesDB'
import { devtools } from 'zustand/middleware'

const useCarStore = create(devtools((set, get) => ({
    homeFilter: {
        tiposVehiculo: [],
        tiposElectrico: [],
        DeliveryAddress: "",
        alternativeDelivery: "",
        marcasVehiculo: [],

    },
    datesRental: { from: null, to: null },
    citiesRental: { ciudad: null, dropoff: null },
    listDropOff: [],
    isCalendar: false,
    cleanFilter: [],
    stripeData: null,
    dateVehicleDialog: false,
    Actions: {
        async setCity({ key, value }) {
            set(({ citiesRental }) => ({ citiesRental: { ...citiesRental, [key]: value ?? null } }))
            if (key === "ciudad") {

                const destinos = await getCitiesDropOff(value)
                set({ listDropOff: destinos })
            }

        },

        openVehicleDialog(isOpen) {
            set({ dateVehicleDialog: isOpen })
        },
        async getClientSecret(price) {
            const clientSecret = await getSecret(price)
            set({ clientSecret: clientSecret })
        },
        clearClientSecret() {
            set({ clientSecret: null })

        },
        setHomeFilter(newFilter) {
            const newFilters = purgeFilters({ ...get().homeFilter, ...newFilter })
            set({ homeFilter: newFilters })
        },
        switchChecker(field, value, isChecked) {
            const fields = ['tiposVehiculo', 'tiposElectrico']
            console.log(field, value, isChecked)
            if (fields.includes(field)) {
                console.log("entro")
                const filtro = get().homeFilter[field]

                const newFiltro = isChecked && !filtro.includes(value) ? [...filtro, value] : filtro.filter(item => item !== value)
                console.log(newFiltro)
                set({ homeFilter: { ...get().homeFilter, [field]: newFiltro } })
            }
        },
        setDatesRental(dates) {
            set({ datesRental: dates })
        },
        setIsCalendar(isCalendar) {
            set({ isCalendar: isCalendar })
        },
        setDatesRental(dates) {
            set({ datesRental: dates })
        }
    }
})))

export default useCarStore


async function getSecret(price) {

    console.log("getSecret")

    const response = await fetch("/api/create-payment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({ price }),
    })
    if (response.ok) {
        const data = await response.json()
        const clientSecret = data.secret
        return clientSecret

    }
    return null
}


