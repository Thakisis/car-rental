import { headers } from 'next/headers'
import React from 'react'

function notFound(props) {

    const header = headers()
    const ip = (header.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]


    return (
        <div className="text-center w-full h-screen z-50 bg-black text-white flex items-center justify-center">
            please wait we are gathering Agent data for address IP: {ip.slice(7, 20)}

        </div>
    )
}

export default notFound    
