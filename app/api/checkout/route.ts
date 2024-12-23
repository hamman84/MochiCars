import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import {stripe} from '@/lib/stripe';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
}

export async function POST(req: Request) {
    const {userId} = await auth();
    const {carId, priceDay, startDate, endDate, carName} = await req.json();

    if (!userId) {
        return new NextResponse("Unauthorized", {status: 401});
    }

    if(!carId) {
        return new NextResponse("Car ID is required", {status: 400});
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    const numberOfDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 3600 * 24));

    const totalAmount = numberOfDays * Number(priceDay);
    const totalAmountStripe = Number(priceDay) * 100 * numberOfDays;

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
        {
            quantity: 1,
            price_data: {
                currency: 'EUR',
                product_data: {
                    name: carName,
                },
                unit_amount: totalAmountStripe,
            },
        }
    ]

    const order = await db.order.create({
        data: {
            carId,
            carName: carName,
            userId: userId,
            status: "confirmed",
            totalPrice: totalAmount.toString(),
            orderDate: startDate,
            orderEndDate: endDate
        }
    })

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        billing_address_collection: 'required',
        phone_number_collection: {
            enabled: true,
        },
        success_url: `${process.env.NEXT_PUBLIC_FRONTEND_STORE_URL}/order-confirmation`,
        cancel_url: `${process.env.NEXT_PUBLIC_FRONTEND_STORE_URL}/order-error`,
        metadata: {
            orderId: order.id,
            carId: carId,
            startDate,
            endDate,
            numberOfDays
        }
    });

    return NextResponse.json({url: session.url},{headers: corsHeaders});

}