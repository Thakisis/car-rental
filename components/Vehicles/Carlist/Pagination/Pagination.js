import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import { createQueryUrl } from "@/lib/queryParams"

export default function PaginationNav({ totalPages, totalVehiculos, params }) {
  const page = params.page ? parseInt(params.page) : 1
  
  const pages = createPagination(page, totalPages)
  const pagesList = pages.map(pagina => <Pagina key={pagina} page={pagina} isActive={pagina === page} params={params} />)
  const prevPagina = <Pagina key="prev" page={page - 1} disabled={page === 1} params={params} as={PaginationPrevious} />
  const nextPagina = <Pagina key="next" page={page + 1} disabled={page > totalPages - 1} params={params} as={PaginationNext} />

  return (
    <Pagination className="justify-end py-4">
      <PaginationContent >
        {prevPagina}


        {pagesList}
        {nextPagina}
      </PaginationContent>
    </Pagination>

  )
}

function createPagination(page, total) {
  if (total <= 6) return Array.from({ length: total }, (_, i) => i + 1)
  if (page <= 4) return [1, 2, 3 ,4, 5, -1, total]
  if (page >= total - 3) return [1, -1,total-4, total - 3, total - 2, total - 1, total]
  return [1, -1, page - 1, ,page, page + 1, -2,  total]
}
function createPagination2(page, total) {
  if (total <= 6) return Array.from({ length: total }, (_, i) => i + 1)
  if (page <= 3) return [1, 2, 3, ...(page === 3 ? [4, -1, total] : [-1, total])]
  if (page < total - 2) return [1, -1, page - 1, page, page + 1, -2, total]
  if (page === total - 2) return [1, -1, total - 3, total - 2, total - 1, total]
  return [1, -1, total - 2, total - 1, total]
}



function Pagina({ page, isActive, params, as, disabled }) {
  if (page < 0) return <PaginationEllipsis />
  const newParams = { ...params, page: page }
  const queryUrl = createQueryUrl(newParams)
  const Component = as ?? PaginationLink

  return (

    <PaginationItem >
      <Component disabled={disabled} className="select-none" href={`/vehiculos?${queryUrl}`} scroll={false} isActive={!as && isActive}>{page}</Component>
    </PaginationItem>
  )
}


