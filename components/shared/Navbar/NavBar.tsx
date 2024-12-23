"use client"

import { Button } from "@/components/ui/button"
import { useLovedCars } from "@/hooks/use-loved-cars"
import { useAuth, UserButton } from "@clerk/nextjs"
import { Heart, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ModeToggle } from "./ModeToggle"


export default function NavBar() {
    const {userId} = useAuth()
    const {lovedItems} = useLovedCars()

  return (
    <div className="max-w-5xl py-5 mx-auto">
      <div className="justify-between lg:flex">
        <Link href="/" className="flex items-center justify-center gap-x-2">
          <Image
            src="/moshidev-logo.png"
            width={50}
            height={50}
            alt="MochiCars"
          />
          <span className="text-xl font-bold">MochiCars</span>
        </Link>
        <div className="flex items-center justify-center gap-x-7">
          <Link href="/cars">List Cars</Link>
          <Link href="/dashboard">Dashboard</Link>
          <ModeToggle />
          {userId ? (
            <>
              <Link href="/loved-cars">
                <Heart 
                strokeWidth={1} 
                className={`cursor-pointer ${lovedItems.length > 0 && 'fill-black'}`} 
              />
              </Link>
              <UserButton />
            </>
          ) : (
            <Link href="/sign-in" className=" flex gap-x-3">
                <Button>
                    Sign In
                    <User className="w-4 h-4 ml-2" />
                </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}