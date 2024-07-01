"use client"
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
function StripeWrapper({ children }) {
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
        <Elements stripe={stripePromise} options={elementsOptions}>
            {children}
        </Elements>
    )
}

export default StripeWrapper
