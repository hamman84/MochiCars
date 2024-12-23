"use client"

import { Car } from "@prisma/client";
import { ListCarsProps } from "./ListCars.types";
import Image from "next/image";
import { Fuel, Gauge, Gem, Heart, Users, Wrench } from "lucide-react";
import ModalAddReservation from "@/components/shared/ModalAddReservation/ModalAddReservation";
import { useLovedCars } from "@/hooks/use-loved-cars";

export default function ListCars(props: ListCarsProps) {
    const { cars } = props;
    const {addLovedItem, lovedItems, removeLovedItem} = useLovedCars();
    

  return (
    <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4">
        {cars.map((car: Car) => {
            const { priceDay, photo, cv, engine, transmission, people, type, name, id } = car;
            const isLoved = lovedItems.some((item) => item.id === id);

            return (
              <div
                key={id}
                className="p-1 rounded-lg shadow-md hover:shadow-lg dark:border dark:border-gray-700 dark:shadow-blue-400"
              >
                <div className="relative w-full h-60 dark:bg-gray-500 dark:rounded-lg">
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
                  <Wrench size={24} className="h-4 w-4 mr-2" strokeWidth={1} />
                  {transmission}
                </p>
                <p className="flex items-center">
                  <Users size={24} className="h-4 w-4 mr-2" strokeWidth={1} />
                  {people}
                </p>
                <p className="flex items-center">
                  <Fuel size={24} className="h-4 w-4 mr-2" strokeWidth={1} />
                  {engine}
                </p>
                <p className="flex items-center">
                  <Gauge size={24} className="h-4 w-4 mr-2" strokeWidth={1} />
                  {cv} CV
                </p>
                <div className="flex items-center justify-center gap-x-3">
                  <ModalAddReservation car={car} />
                  <Heart
                    className={`mt-2 cursor-pointer ${
                      isLoved && "fill-red-700"
                    }`}
                    onClick={
                      isLoved
                        ? () => removeLovedItem(car.id)
                        : () => addLovedItem(car)
                    }
                  />
                </div>
              </div>
            );
        })}
    </div>
  )
}
