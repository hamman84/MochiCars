"use client";

import { CardCarProps } from "./cardCar.types";
import { Button } from "@/components/ui/button";
import {
    Fuel,
    Gauge,
    Gem,
    Trash,
    Upload,
    Download,
    Users,
    Wrench,
} from "lucide-react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import ButtonEditCar from "./buttonEditCar";
import { toast } from "@/hooks/use-toast";
import axios from "axios";

export default function CardCar(props: CardCarProps) {
    const { car } = props
    const router = useRouter()

    const deleteCar = async () => {
        try {
            await axios.delete(`/api/car/${car.id}`)
            toast({
              title: "Car deleted successfully 👌",
            })
            router.refresh();
        } catch (error) {
          toast({
            title: "Something went wrong",
            variant: "destructive"
          })
            console.error(error)
        }
    }

    const handlePublishCar = async(publish: boolean) => {
        try {
            await axios.patch(`/api/car/${car.id}`, {isPublished: publish})
            toast({
              title: publish ? "Car published successfully 👏" : "Car unpublished successfully 🫷",
            })
            router.refresh();
        } catch (error) {
          toast({
            title: "Something went wrong",
            variant: "destructive"
          })
            console.error(error)
        }
    }

  return (
    <div className="relative p-1 bg-white rounded-lg shadow-md hover:shadow-lg w-80">
      <div className="relative w-full h-60">
        <Image
          src={car.photo}
          alt={car.name}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          className="rounded-lg"
        />
      </div>
      {car.isPublished ? (
        <p className="absolute top-0 right-0 w-full p-1 text-center text-white bg-green-700 rounded-t-lg">
          Published
        </p>
      ) : (
        <p className="absolute top-0 left-0 w-full p-1 text-center text-white bg-red-300 rounded-t-lg">
          Not published
        </p>
      )}
      <div className="relative p-3">
        <div className="flex flex-col mb-3 gap-x-4">
          <p className="text-xl min-h-16 lg:min-h-fit">{car.name}</p>
          <p>{car.priceDay}€ /day</p>
        </div>
        <div className="grid md:grid-cols-2 gap-x-4">
          <p className="flex items-center">
            <Gem className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.type}
          </p>
          <p className="flex items-center">
            <Wrench className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.transmission}
          </p>
          <p className="flex items-center">
            <Users className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.people}
          </p>
          <p className="flex items-center">
            <Fuel className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.engine}
          </p>
          <p className="flex items-center">
            <Gauge className="h-4 w-4 mr-2" strokeWidth={1} />
            {car.cv} CV
          </p>
        </div>
        <div className="flex justify-between mt-3 gap-x-4">
          <Button variant="outline" onClick={deleteCar} className="bg-red-500 text-white">
            Delete
            <Trash className="h-4 w-4 ml-2" strokeWidth={2} />
          </Button>

          <ButtonEditCar carData={car} />
        </div>
        {car.isPublished ? (
          <Button
            className="mt-3 w-full"
            onClick={() => handlePublishCar(false)}
            variant="outline"
          >
            Unpublish
            <Download className="h-4 w-4 ml-2" strokeWidth={1} />
          </Button>
        ) : (
          <Button
            className="mt-3 w-full"
            onClick={() => handlePublishCar(true)}
          >
            Publish
            <Upload className="h-4 w-4 ml-2" strokeWidth={2} />
          </Button>
        )}
      </div>
    </div>
  );
}
