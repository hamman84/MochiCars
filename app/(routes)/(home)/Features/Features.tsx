import Reveal from "@/components/shared/Reveal/Reveal"
import { dataFeatures } from "./Features.data"

export default function Features() {
  return (
    <div className="max-w-6xl mx-auto p-6 sm:px-6 lg:px-8 lg:py-40">
        <h3 className="text-2xl lg:text-6xl font-bold">Key Features</h3>
        <p className="max-w-lg mt-5 lg:mt-10 lg:mb-16 text-xl">
            We are all about our client´s conform and safety. That´s why we provide the best service you can imagine.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5">
            {dataFeatures.map(({icon: Icon, text, bg, delay}) => (
                <Reveal 
                    key={text} 
                    delay={delay}
                    position="right"
                    className="p-6 rounded-xl hover:shadow-md flex flex-col items-center"
                >
                    <div className={`rounded-full ${bg} w-fit p-4 mb-4 flex justify-center`}>
                        <Icon className="w-8 h-8" />
                    </div>
                    <p className="text-center font-bold text-xl">
                        {text}
                    </p>
                </Reveal>
            ))}
        </div>
    </div>
  )
}
