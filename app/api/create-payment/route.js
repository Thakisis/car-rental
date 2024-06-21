import { NextResponse } from "next/server"

const stripe = require("stripe")(process.env.NEXT_PAYMENT_SECRET_KEY)


export const POST = async (request) => {


    const { price, customer } = await request.json()
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: price * 100,
            currency: "eur",
            description: 'Compra de prueba',
            metadata: { 'order_id': '6735' },
            shipping: {
                'name': 'John Doe',
                'address': {
                    'line1': '1234 Main Street',
                    'city': 'San Francisco',
                    'state': 'CA',
                    'country': 'US',
                    'postal_code': '94111'
                }
            },
            receipt_email: 'cliente@ejemplo.com',
            automatic_payment_methods: { enabled: true },

        })

        return NextResponse.json(paymentIntent, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json(error, { status: 400 })
    }

}
