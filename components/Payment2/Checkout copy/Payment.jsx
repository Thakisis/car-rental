"use client"
import { useEffect, useState } from "react"

import { Elements } from "@stripe/react-stripe-js"

import { loadStripe } from "@stripe/stripe-js"
import Checkout from "./Checkout"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
function Payment() {
    const [clientSecret, setClientSecret] = useState("")

    useEffect(() => {



    }, [])

    useEffect(() => {
        fetch("/api/create-payment", {
            method: "POST",
            body: JSON.stringify({}),
        }).then(async (result) => {
            const { secret } = await result.json()
            console.log("******************")
            console.log(secret)
            console.log("******************")
            setClientSecret(secret)
        })


    }, [])
    console.log(clientSecret, stripePromise)
    return (
        <>
            <h1>Pago</h1>
            {clientSecret && stripePromise && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <Checkout />
                </Elements>
            )}
        </>
    )
}

export default Payment
