import NavBar from "@/components/shared/Navbar/NavBar";
import { db } from "@/lib/db";
import HeaderCars from "./components/headerCars/HeaderCars";
import FiltersAndListCars from "./components/FiltersAndListCars/FiltersAndListCars";


export default async function pageCars() {
    const cars = await db.car.findMany({
        where: {
            isPublished: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

  return (
    <div>
        <NavBar />
        <div className="p-6 mx-auto max-w-7xl">
            <HeaderCars />
            <div>
                <FiltersAndListCars cars={cars}/>
            </div>
        </div>
    </div>
  )
}
