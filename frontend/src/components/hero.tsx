import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getHero } from "@/lib/sanity";

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
      className="relative min-h-screen bg-cover bg-center px-20 md:px-20"
      style={{ backgroundImage: `url(${content.backgroundImage})` }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-full py-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            {formattedHeading}
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 font-semibold max-w-lg mx-auto md:mx-0">
            {content.description}
          </p>

          <Button className="bg-[#476cf3] hover:bg-[#5a74d4] text-md sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
            {content.buttonText}
          </Button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="rounded-3xl overflow-hidden w-[300px] sm:w-[400px] md:w-[500px] lg:w-[550px] h-[400px] sm:h-[500px] md:h-[600px]">
            <Image
              src={content.mainImage}
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
