import { create } from 'zustand'
import { purgeFilters } from './StoreHelpers'
import {getCitiesDropOff} from '@/server/Queries/getCities'
const useCarStore = create((set, get) => ({
    homeFilter: {
        tiposVehiculo: [],
        tiposElectrico: [],
        DeliveryAddress: "",
        alternativeDelivery: "",
        marcas: [],

    },
    datesRental: { from: null, to: null },
    citiesRental:{ciudad:null, dropoff:null},
    listDropOff: [],
    isCalendar: false,
    cleanFilter: [],
    stripeData: null,
    dateVehicleDialog: false,
    Actions: {
        async setCity({key, value}){
            set(({citiesRental}) => ({citiesRental:{...citiesRental, [key]:value ?? null}}))
            const destinos= await getCitiesDropOff(value)
            set({listDropOff: destinos} )
        },

        openVehicleDialog(isOpen){
            set({dateVehicleDialog:isOpen})
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
            if (fields.includes(field)) {
                const filtro = get().homeFilter[field]
                const newFiltro = isChecked ? [...filtro, value] : filtro.filter(item => item !== value)
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
}))

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


