import { create } from 'zustand'
import { purgeFilters } from './StoreHelpers'
import { setDate } from 'date-fns'

const useCarStore = create((set, get) => ({
    homeFilter: {
        tiposVehiculo: [],
        tiposElectrico: [],
        DeliveryAddress: "",
        alternativeDelivery: "",
        marcas: [],
    
    },
    datesRental:{from:null,to:null},
    isCalendar:false,
    cleanFilter: [],
    Actions: {
        setHomeFilter(newFilter) {
            const newFilters=purgeFilters({...get().homeFilter, ...newFilter})
            set({homeFilter:newFilters})
        },
        switchChecker(field, value, isChecked) {
    
        
             const fields=['tiposVehiculo','tiposElectrico']
            if(fields.includes(field)){
                const filtro=get().homeFilter[field]
                const newFiltro=isChecked ? [...filtro, value] : filtro.filter(item => item !== value)
                set({homeFilter:{...get().homeFilter,[field]:newFiltro}})

            }  
        },
        setDatesRental(dates) { 
            set({datesRental:dates})
        },
        setIsCalendar(isCalendar) {
            set({isCalendar:isCalendar})
        },
        setDatesRental(dates) {
            set({datesRental:dates})
        }
    }     
}))

export default useCarStore

   
