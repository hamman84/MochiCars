"use client"

import { 
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
 } from "@/components/ui/dialog";
 import { Pencil } from "lucide-react";
import { ButtonEditCarProps } from "./ButtonEditCar.types";
import { Button } from "@/components/ui/button";
import FormEditCar from "./FormEditCar/FormEditCar";

export default function ButtonEditCar(props: ButtonEditCarProps) {
    const { carData } = props;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
            Edit
          <Pencil className="h-4 w-4 ml-2" strokeWidth={1} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            <FormEditCar carData={carData} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
