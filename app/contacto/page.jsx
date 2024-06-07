"use client"

import fingerprint from "@fingerprintjs/fingerprintjs"
import { useEffect, useState } from "react"
function Contact(props) {
    const [print, setPrint] = useState()

    useEffect(() => {
        async function getFP() {
            const fp = await fingerprint.load()
            const result = await fp.get()

            setPrint(result.visitorId)
        }
        getFP()

    }, [])
    return (
        <div className="pt-20 text-3xl text-black">
            contacto
            <div>{print}</div>
        </div>
    )
}

export default Contact
