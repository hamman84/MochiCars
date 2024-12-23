import NavBar from "@/components/shared/Navbar/NavBar";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";


export default function pageOrderError() {
  return (
    <div>
        <NavBar />
        <Separator />
        <div className="p-6 mx-auto max-w-7xl">
            <div className="flex justify-center flex-col items-center gap-4 text-center">
                <AlertCircle className="w-16 h-16 text-red-500" />
                <h1 className="text-2xl font-bold">Ha ocurrido un error al procesar tu orden</h1>
                <p>
                    Por favor, intenta nuevamente.
                </p>
                <Link href="/">
                    <Button>Volver a la página principal</Button>
                </Link>
            </div>
        </div>
    </div>
  )
}
