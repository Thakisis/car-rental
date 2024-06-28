import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

const Pagination = ({
  className,
  ...props
}) => (
  <nav
    role="navigation"
    aria-label="paginacion"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props} />
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-0 md:gap-1", className)}
    {...props} />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}) => (
  <Link
    aria-current={isActive ? "page" : undefined}
    className={cn(buttonVariants({
      variant: isActive ? "default" : "ghost",
      size,
    }), className, isActive ? "pointer-events-none" : "")}
    {...props} />
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({
  className, disabled,
  ...props
}) => (
  <PaginationLink
    aria-label="ir a pàgina anterior"
    size="default"

    className={cn(
      "",
      className,
      disabled ? ["pointer-events-none opacity-50"] : [],
    )}
    {...props}>
    <ChevronLeft className="h-4 w-4" />

    <span className=" pl-2 hidden  md:block">Anterior</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  className, disabled,
  ...props
}) => (
  <PaginationLink
    aria-label="Ir a siguiente página"
    size="default"
    className={cn(
      "",
      className,
      disabled ? ["pointer-events-none opacity-50"] : [],
    )}
    {...props}>
    <span className=" hidden   pr-2 hidden  md:block">Siguiente</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
  className,
  ...props
}) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}>
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">Mas páginas</span>
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
