import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MenuConfig } from "@/constants"
import MenuCW from "./Menu"
import Logo from "./Logo"
export default function NavBar() {
    const MenuList = MenuConfig.map(({ text, url }) => <MenuCW key={url} url={url}>
        <Link className="font-medium flex items-center text-base transition-colors text-primary hover:text-black" href={url}>
            {text}
        </Link>
    </MenuCW>)

    return (
        <nav className="absolute inset-x-0 top-0 z-50  shadow-sm backdrop-blur-lg bg-white/80 " style={{ scrollbarGutter: "stable" }} >
            <div className="w-[98vw]  px-20 ">
                <div className="flex justify-between h-14 items-center ">
                    <Link className="flex items-center text-primary " href="/">
                        <Logo className="h-[2.5rem]" />

                    </Link>
                    <nav className="hidden md:flex gap-4" style={{ scrollbarGutter: "stable" }}>
                        {MenuList}
                    </nav>

                </div>
            </div>
        </nav>
    )
}
