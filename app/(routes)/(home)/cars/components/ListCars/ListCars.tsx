"use client"

import { useAuth } from "@clerk/nextjs";
import { FilterCarsProps } from "./ListCars.types";
import { useLovedCars } from "@/hooks/use-loved-cars";
import { Car } from "@prisma/client";
import Image from "next/image";
import { Fuel, Gauge, Gem, Heart, Users, Wrench } from "lucide-react";
import ModalAddReservation from "@/components/shared/ModalAddReservation/ModalAddReservation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SkeletonCars from "@/components/shared/SkeletonCars/SkeletonCars";

export default function ListCars(props: FilterCarsProps) {
    const { cars } = props;
    const {userId} = useAuth()
    const {addLovedItem, lovedItems, removeLovedItem} = useLovedCars()

    if (!cars) {
        return <SkeletonCars />
    }

  return (
    <>
        {cars.length === 0 && (
            <div>No cars found</div>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cars.map((car: Car) => {
                const {id, cv, priceDay, photo, name, type, engine, transmission, people} = car
                const linkedCar = lovedItems.some((item) => item.id === car.id)

                return (
                  <div
                    key={id}
                    className="p-1 rounded-lg shadow-md hover:shadow-lg"
                  >
                    <div className="relative w-full h-60">
                      <Image
                        src={photo}
                        alt={name}
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                        className="rounded-lg "
                      />
                    </div>
                    <div className="p-3">
                      <div className="flex flex-col mb-3 gap-x-4">
                        <p className="text-xl min-h-16 lg:min-h-fit">{name}</p>
                        <p className="text-lg font-bold">${priceDay}/day</p>
                      </div>
                    </div>
                    <p className="flex items-center">
                      <Gem size={24} className="h-4 w-4 mr-2" strokeWidth={1} />
                      {type}
                    </p>
                    <p className="flex items-center">
                      <Wrench
                        size={24}
                        className="h-4 w-4 mr-2"
                        strokeWidth={1}
                      />
                      {transmission}
                    </p>
                    <p className="flex items-center">
                      <Users
                        size={24}
                        className="h-4 w-4 mr-2"
                        strokeWidth={1}
                      />
                      {people}
                    </p>
                    <p className="flex items-center">
                      <Fuel
                        size={24}
                        className="h-4 w-4 mr-2"
                        strokeWidth={1}
                      />
                      {engine}
                    </p>
                    <p className="flex items-center">
                      <Gauge
                        size={24}
                        className="h-4 w-4 mr-2"
                        strokeWidth={1}
                      />
                      {cv} CV
                    </p>
                    {userId ? (
                        <div className="flex items-center justify-center gap-x-3">
                            <ModalAddReservation car={car} />
                            <Heart
                            className={`mt-2 cursor-pointer ${
                                linkedCar && "fill-red-700"
                            }`}
                            onClick={
                                linkedCar
                                ? () => removeLovedItem(car.id)
                                : () => addLovedItem(car)
                            }
                            />
                        </div>
                    ) : (
                        <div className="w-full mt-2 text-center">
                            <Link href="/sign-in">
                                <Button className="text-blue-500 w-full" variant="outline">
                                    Sign in to add to favorites
                                </Button>
                            </Link>
                        </div>
                    )}
                    
                  </div>
                );
            })}
        </div>
    </>
  )
}
