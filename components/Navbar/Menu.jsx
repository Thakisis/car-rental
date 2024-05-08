"use client"
import { usePathname } from "next/navigation"
function MenuCW({ children, url }) {
    const pathName = usePathname()
    const classSelected = "relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:transition after:duration-300 after:origin-center"
    const classNotSelected = "relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-100 after:transition after:duration-300 after:origin-center"

    return (
        <div className={pathName === url ? classNotSelected : classSelected}>
            {children}{pathName === url ? "" : ""}
        </div>
    )
}

export default MenuCW
