import Reveal from "@/components/shared/Reveal/Reveal";
import Image from "next/image";


export default function FirstBlock() {
  return (
    <div className="grid lg:grid-cols-2 lg:px-0 lg:py-24 items-center">
      <Reveal className="p-6 lg:pl-40" position="bottom">
        <h1 className="text-6xl md:text-7xl font-bold lg:text-8xl">
          Premium
          <span className="block">Rental Car</span>
          in Spain
        </h1>
        <p className="text-lg mt-2 lg:mt-5 lg:text-xl max-w-sm">
          Rent a car in Spain with the best car rental company in the country.
          We offer the best cars, the best service and the best prices. Book now
          and enjoy your trip to Spain.
        </p>
      </Reveal>
      <Reveal className="flex justify-end" position="right">
        <Image
          src="/images/x6_front.png"
          width={800}
          height={800}
          alt="Car"
          priority
        />
      </Reveal>
    </div>
  );
}
