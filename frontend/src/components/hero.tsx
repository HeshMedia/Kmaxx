import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-[600px] bg-gray-900" style={{ backgroundImage: 'url(static/images/hero-bg.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto px-6 h-full flex items-center">
        <div className="w-1/2 text-white">
          <h1 className="text-7xl font-bold mb-6">
            NEXT LEVEL
            <br />
            CARE
          </h1>
          <p className="text-xl mb-8 max-w-lg">
            You deserve the best healthcare possible. Health care should be as
            easy to access and affordable as possible.
          </p>
          <Button className="bg-[#476cf3] hover:bg-[#5a74d4] text-lg px-8 py-6">
            APPOINTMENT
          </Button>
        </div>
        <div className="w-1/2">
          <div className="rounded-3xl overflow-hidden">
            <Image
              src="/static/images/hospital_building.jpg"
              alt="Hospital Building"
              width={600} // Adjust width as needed
              height={400} // Adjust height as needed
              className="object-cover rounded-3xl "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
