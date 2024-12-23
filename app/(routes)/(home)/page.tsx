"use client"

import NavBar from "@/components/shared/Navbar/NavBar";
import FirstBlock from "./FirstBlock/FirstBlock";
import SliderBrands from "./SliderBrands/SliderBrands";
import Features from "./Features/Features";
import OurFleet from "./OurFleet/OurFleet";
import DriveToday from "./DriveToday/DriveToday";


export default function Home() {
  
  return (
    <div className="bg-[url('/images/background.jpg')]">
      <NavBar />
      <FirstBlock />
      <SliderBrands />
      <Features />
      <OurFleet />
      <DriveToday />
    </div>
  );
}
