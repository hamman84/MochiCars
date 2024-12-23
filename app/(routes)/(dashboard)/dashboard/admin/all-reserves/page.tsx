import { db } from "@/lib/db"
import { auth, currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import TableAdminReserves from "./components/TableAdminReserves"
import { isAdmin } from "@/lib/isAdmin"

export default async function AllReservesPage() {
    const {userId} = await auth()
    const user = await currentUser()

    if(!userId || !user || !isAdmin(userId)) {
        return redirect("/")
    }

    const orders = await db.order.findMany({
        orderBy: {
            createdAt: "desc",
        }
    })

    return (
        <div>
            <h1 className="text-3xl mb-4">Reserves Page</h1>
            <TableAdminReserves orders={orders} />
        </div>
    )
}