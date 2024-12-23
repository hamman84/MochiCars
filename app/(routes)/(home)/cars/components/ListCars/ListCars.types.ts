import { Car } from "@prisma/client"

export type FilterCarsProps = {
    cars: Car[] | undefined
}