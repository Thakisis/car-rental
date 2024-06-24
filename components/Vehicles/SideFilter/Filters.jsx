import { vehiculosFilter } from '@/constants'
import { Filter } from './Filter'
import { Accordion } from '@/components/ui/accordion'
import { getDataFilters } from '@/server/Queries'
async function Filters({ ...params }) {

    const filters = await getDataFilters()
    const FiltersUI = vehiculosFilter.map(filtro => <Filter key={filtro.field} {...filtro} dataFilter={filters[filtro.field]} urlState={params[filtro.field]} fullParams={params} />)
    return (
        <Accordion type="single" collapsible className="w-full">
            {FiltersUI}
        </Accordion>
    )
}

export default Filters
