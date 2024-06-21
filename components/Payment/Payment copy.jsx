"use client"
import { useEffect, useState, useMemo } from "react"

import { Elements } from "@stripe/react-stripe-js"

import { loadStripe } from "@stripe/stripe-js"
import Checkout from "./Checkout"
import useCarStore from "@/Store/Store"
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

function Payment() {
    const clientSecret = useCarStore((state) => state.clientSecret)
    const getClientSecret = useCarStore((state) => state.Actions.getClientSecret)
    const StripeElement = useMemo(() => !clientSecret ? <div>cargando clientsecret</div> : <Elements stripe={stripePromise} options={{ clientSecret }} ><Checkout /></Elements>, [clientSecret])
    useEffect(() => {
        if (clientSecret) return
        getClientSecret()
        console.log(stripePromise)
    }, [getClientSecret, clientSecret])

    return StripeElement
}

export default Payment
