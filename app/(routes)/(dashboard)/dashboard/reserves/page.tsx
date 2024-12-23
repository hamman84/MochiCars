import { Button } from "@/components/ui/button"
import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import Link from "next/link"
import { redirect } from "next/navigation"
import TableReserves from "./components/TableReserves/TableReserves"

export default async function ReservesPage() {
    const {userId} = await auth()

    if(!userId) {
        return redirect("/")
    }

    const orders = await db.order.findMany({
        where: {
            userId: userId,
        },
        orderBy: {
            createdAt: "desc",
        }
    })

    return (
        <div>
            <h1 className="mb-4 text-3xl font-bold">Reserves</h1>
            {orders.length === 0 ? (
                <div className="flex flex-col justify-center items-center gap-4">
                    <h2 className="text-xl">You don`t have any reserves yet</h2>
                    <p className="text-gray-500">You can make a reserve by clicking the `Reserve` button on the main page</p>
                    <Link href="/">
                        <Button>Go to main page</Button>
                    </Link>
                </div>
            ) : (
                <TableReserves orders={orders}/>
            )}
        </div>
    )
}