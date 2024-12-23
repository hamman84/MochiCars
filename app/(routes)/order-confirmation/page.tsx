import NavBar from "@/components/shared/Navbar/NavBar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";


export default function orderConfirmationPage() {
  return (
    <div>
        <NavBar />
        <Separator />
        <div className="p-6 mx-auto max-w-7xl">
            <div className="flex justify-center flex-col items-center gap-4 text-center">
                <h1 className="text-2xl font-bold">Gracias por confiar en MochiCars!</h1>
                <p>
                    Tu orden ha sido confirmada. Recibirás un correo con los detalles de tu orden.
                </p>
                <p>
                    Puedes ver el estado de tu orden en tu área de cliente.
                </p>
                <Link href="/">
                    <Button>Volver a la página principal</Button>
                </Link>
            </div>
        </div>
    </div>
  )
}
