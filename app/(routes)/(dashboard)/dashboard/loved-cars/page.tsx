import { auth } from "@clerk/nextjs/server";
import ListLovedCars from "./ListLovedCars";
import { redirect } from "next/navigation";


export default async function pageLovedCars() {
    const {userId} = await auth()

    if (!userId) {
        return redirect("/")
    }
    
  return (
    <div>
        <h1 className="text-2xl">Favourites Vehicles</h1>
        <ListLovedCars />
    </div>
  )
}
