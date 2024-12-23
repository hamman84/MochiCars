"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";

import { FormAddCar } from "../FormAddCar/FormAddCar";


export function ButtonAddCar() {
    
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    Add new car
                    <PlusCircle className="ml-2" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add new car</DialogTitle>
                    <DialogDescription>
                        <FormAddCar/>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}