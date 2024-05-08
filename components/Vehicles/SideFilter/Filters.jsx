import { vehiculosFilter } from '@/constants'
import { Filter } from './Filter'
import { Accordion } from '@/components/ui/accordion'

function Filters({ filters, params }) {


    const FiltersUI = vehiculosFilter.map(filtro => <Filter key={filtro.field} {...filtro} dataFilter={filters[filtro.field]} urlState={params[filtro.field]} fullParams={params} />)
    return (
        <Accordion type="single" collapsible className="w-full">
            {FiltersUI}
        </Accordion>
    )
}

export default Filters
