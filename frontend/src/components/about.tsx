import React from "react";
import { getHomeAbout } from "@/lib/sanity";

interface HomeAboutProps {
  title?: string;
  description?: string;
}

const AboutUs = async () => {
  let aboutData;
  
  try {
    aboutData = await getHomeAbout();
    console.log("Home about component received data:", aboutData);
  } catch (error) {
    console.error("Error in AboutUs component:", error);
    aboutData = null;
  }
  
  const content: HomeAboutProps = {
    title: aboutData?.title || "ABOUT US",
    description: aboutData?.description || "KMAXX American Hospital, located in Amritsar, brings cutting-edge American technology and exceptional healthcare services to your doorstep. Our commitment is to provide unique services, making us a trusted name in healthcare excellence."
  };

  return (
    <section className="bg-[#fdf9f3] py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div className="relative ml-4 sm:ml-6 md:ml-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 text-black">ABOUT</h2>
          <div className="bg-[#FF9B62] text-white p-6 sm:p-8 md:p-10 shadow-lg relative pt-4 pl-4 h-auto md:h-[500px] w-full max-w-md">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold">US</h3>
            <p className="mt-4 text-base sm:text-lg">
              {content.description}
            </p>
            <div className="absolute -top-10 sm:-top-12 right-4 sm:right-6 md:right-8 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 overflow-hidden">
              <img
                src="/static/images/3.jpg"
                alt="Doctors Group"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Image Grid - Hidden on small screens */}
        <div className="hidden md:grid grid-cols-3 grid-rows-2 gap-2 sm:gap-4">
          <div className="row-span-2">
            <img
              src="static/images/4.jpg"
              alt="Baby Checkup"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src="static/images/1.jpg"
              alt="Blood Pressure Check"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src="static/images/2.jpg"
              alt="Pregnancy Consultation"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src="static/images/3.jpg"
              alt="Kids Therapy"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src="static/images/5.jpg"
              alt="Maternity Care"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
