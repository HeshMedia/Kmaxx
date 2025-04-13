import { Header } from "@/components/header";
import Image from "next/image";
import { getAboutPage } from "@/lib/sanity";

// Define the types for the Sanity data
interface AboutPageData {
  mission: string;
  mainDescription: string;
  sections: Array<{
    title: string;
    listItems: string[];
  }>;
  conclusionText: string;
  gallery: Array<{
    url: string;
    alt: string;
  }>;
}

export const revalidate = 60; // Revalidate this page every 60 seconds

export default async function AboutUsPage() {
  // Fetch about page data from Sanity
  const aboutData = await getAboutPage();
  
  // Use empty values as fallbacks if data is not available
  const content: AboutPageData = {
    mission: aboutData?.mission || "",
    mainDescription: aboutData?.mainDescription || "",
    sections: aboutData?.sections || [],
    conclusionText: aboutData?.conclusionText || "",
    gallery: aboutData?.gallery || []
  };

  return (
    <div className="bg-[#fffaf3] min-h-screen">
    <div className="relative bg-[#FFD0B4] h-48 md:h-56 flex items-center justify-center overflow-hidden">
      {/* Hex pattern top-left */}
      <Image
        src="/static/images/hex-left.png"
        alt="Hex pattern top left"
        width={220}
        height={220}
        className="absolute top-0 left-0 object-contain opacity-70 -translate-x-8 -translate-y-8"
      />
      
      {/* Hex pattern bottom-right */}
      <Image
        src="/static/images/hex-right .png"
        alt="Hex pattern bottom right"
        width={220}
        height={220}
        className="absolute bottom-0 right-0 object-contain opacity-70 translate-x-8 translate-y-8"
      />

      <h1 className="text-2xl md:text-4xl font-bold uppercase text-black z-10">
       About Us
      </h1>
    </div>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <blockquote className="text-4xl italic text-orange-700 text-center mb-12">
          " {content.mission} "
        </blockquote>

        <p className="text-lg text-gray-700 mb-12">
          {content.mainDescription}
        </p>

        <div className="grid gap-12">
          {content.sections.map((section, index) => (
            <section key={index}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {section.listItems.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </section>
          ))}

          <section>
            <p className="text-gray-700 text-lg">
              {content.conclusionText}
            </p>
          </section>
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-full shadow hover:bg-indigo-700 transition">
            BOOK APPOINTMENT
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {content.gallery.length > 0 ? (
            // Display gallery images from Sanity
            content.gallery.map((image, index) => (
              <Image 
                key={index}
                src={image.url}
                alt={image.alt}
                width={400}
                height={250}
                className="rounded-xl object-cover w-full h-48"
              />
            ))
          ) : (
            // Fallback images if no Sanity data
            <>
              <Image src="/static/images/G1.jpg" alt="hospital 1" width={400} height={250} className="rounded-xl object-cover w-full h-48" />
              <Image src="/static/images/G2.jpg" alt="hospital 2" width={400} height={250} className="rounded-xl object-cover w-full h-48" />
              <Image src="/static/images/G3.webp" alt="hospital 3" width={400} height={250} className="rounded-xl object-cover w-full h-48" />
              <Image src="/static/images/G1.jpg" alt="hospital 4" width={400} height={250} className="rounded-xl object-cover w-full h-48" />
            </>
          )}
        </div>
      </section>
    </div>
  );
}
