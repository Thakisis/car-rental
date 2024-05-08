import { carType } from '@/constants'
import { create } from 'zustand'
const useCarStore = create((set, get) => ({
    homeFilter: {
        carType: [],
        engineType: [],
        DeliveryAddress: "",
        alternativeDelivery: "",
        brands: [],
        pickupTimer: "",
        returnTimer: "",
    },
    cleanFilter: [],
    Actions: {
        setHomeFilter(newFilter) {
            set(({ homeFilter }) => ({ homeFilter: { ...homeFilter, ...newFilter } }))
            get().Actions.purgeFilter()
        },
        purgeFilter() {
            const cleanFilter = {}
            Object.entries(get().homeFilter).forEach(([key, value]) => {
                if (value === "") return
                if (value?.length === 0) return
                cleanFilter[key] = value
            })

            set({ cleanFilter: cleanFilter })

        }
    }


}))
export default useCarStore
