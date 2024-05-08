"use client"
import useCarStore from "@/Store"
function DebugClient(props) {
    const url = useCarStore(state => state.url)

    return (
        <div className="absolute top-0 left-0 w-screen text-red-500 z-[999] pointer-events-none">
            {url}
        </div>
    )
}

export default DebugClient
