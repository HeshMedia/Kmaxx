import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center px-20 md:px-20"
      style={{ backgroundImage: 'url(/static/images/hero-bg.png)' }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-full py-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            NEXT LEVEL
            <br />
            CARE
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 font-semibold max-w-lg mx-auto md:mx-0">
            You deserve the best healthcare possible. Health care should be as
            easy to access and affordable as possible.
          </p>
          <Button className="bg-[#476cf3] hover:bg-[#5a74d4] text-md sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
            APPOINTMENT
          </Button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="rounded-3xl overflow-hidden w-[300px] sm:w-[400px] md:w-[500px] lg:w-[550px] h-[400px] sm:h-[500px] md:h-[600px]">
            <Image
              src="/static/images/hosp-building.png"
              alt="Hospital Building"
              width={550}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
