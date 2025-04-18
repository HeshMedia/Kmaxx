import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getHero } from "@/lib/sanity";
import Link from "next/link";

interface HeroData {
  heading: string;
  description: string;
  backgroundImage: string;
  mainImage: string;
  buttonText: string;
}

export async function Hero() {
  // Fetch hero data from Sanity
  const heroData = await getHero();
  
  // Use default content as fallback if Sanity data is not available
  const content: HeroData = {
    heading: heroData?.heading || "NEXT LEVEL\nCARE",
    description: heroData?.description || "You deserve the best healthcare possible. Health care should be as easy to access and affordable as possible.",
    backgroundImage: heroData?.backgroundImage || "/static/images/hero-bg.png",
    mainImage: heroData?.mainImage || "/static/images/hosp-building.png",
    buttonText: heroData?.buttonText || "APPOINTMENT"
  };

  // Handle potential line breaks in the heading
  const formattedHeading = content.heading.split('\n').map((line, i) => (
    <span key={i}>
      {line}
      {i < content.heading.split('\n').length - 1 && <br />}
    </span>
  ));

  return (
    <section
      className="relative min-h-screen bg-cover bg-center px-4 sm:px-6 md:px-20"
      style={{ backgroundImage: `url(${content.backgroundImage})` }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-full py-6 md:py-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left mb-6 md:mb-0 pt-12 md:pt-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6">
            {formattedHeading}
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 font-semibold max-w-lg mx-auto md:mx-0 px-2 sm:px-0">
            {content.description}
          </p>

           <Link 
           href="#contact" 
           >
            <Button className="bg-[#476cf3] hover:bg-[#5a74d4] text-md sm:text-lg px-6 sm:px-8 py-3 sm:py-4 md:py-6">
              {content.buttonText}
            </Button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0">
          <div className="rounded-3xl overflow-hidden w-[280px] sm:w-[350px] md:w-[500px] lg:w-[550px] h-[320px] sm:h-[420px] md:h-[600px]">
            <Image
              src={content.mainImage}
              alt="Hospital Building"
              width={550}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
