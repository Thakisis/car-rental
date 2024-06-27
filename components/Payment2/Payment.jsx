"use client"
import React, { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'


const stripePromise = loadStripe("pk_test_51PSjMcLoXE8R8WSYSlI0VdBOxcxSZiDU1UMb6TN8B5jrh6WDGwKWAbDZVeru2jGmWJ41xLyYSkdSuwYng8Z3XTx1003Y2QAVUP")





function Payment({ amount }) {

    // Zustand

    const elementsOptions = {
        mode: 'payment',
        amount: 100,
        currency: 'eur',
        appearance: {
            theme: 'stripe',
            variables: {
                colorText: 'black',
            },
        },
    }
    return (
        <div className="w-full h-full flex justify-center items-center">
            <Elements stripe={stripePromise} options={elementsOptions}>
                <PaymentEl />
            </Elements>
        </div>
    )
}

export default Payment















function PaymentEl() {
    const stripe = useStripe()
    const elements = useElements()

    const paymentElementOptions = {
        layout: 'tabs',
        paymentMethodOrder: ['card']
    }
    console.log(stripe)
    console.log(elements)
    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return
        }

        //setLoading(true)

        // Trigger form validation and wallet collection
        const { error: submitError } = await elements.submit()
        if (submitError) {
            handleError(submitError)
            return
        }
        const price = 110
        const customer = "pepe"
        const response = await fetch("/api/create-payment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: { price, customer },
        })
        if (!response.ok) return
        const { client_secret: clientSecret } = await response.json()

        // Use the clientSecret and Elements instance to confirm the setup
        const { error } = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: {
                return_url: 'https://example.com/order/123/complete',
            },
            // Uncomment below if you only want redirect for redirect-based payments
            // redirect: "if_required",
        })

        if (error) {
            //console.log(error)
            handleError(error)
            return
        }

        console.log("Success")
    }


    return (


        <form onSubmit={handleSubmit}>
            {/* <PaymentForm /> OK custom Form*/}
            <PaymentElement id="payment-element" options={paymentElementOptions} amount={3000} />
            <button type="submit" onSubmit={handleSubmit} /*disabled={!stripe}*/>Buy</button>
        </form>


    )
}
