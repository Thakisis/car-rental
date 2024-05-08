import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MenuConfig } from "@/constants"
import MenuCW from "./Menu"
export default function NavBar() {
    const MenuList = MenuConfig.map(({ text, url }) => <MenuCW key={url} url={url}>
        <Link className="font-medium flex items-center text-base transition-colors text-zinc-300 hover:text-white" href={url}>
            {text}
        </Link>
    </MenuCW>)

    return (
        <nav className="fixed inset-x-0 top-0 z-50  shadow-sm backdrop-blur-lg">
            <div className="w-full max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-14 items-center ">
                    <Link className="flex items-center" href="#">
                        <MountainIcon className="h-6 w-6" />

                    </Link>
                    <nav className="hidden md:flex gap-4">
                        {MenuList}
                    </nav>

                </div>
            </div>
        </nav>
    )
}

function MountainIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}
