import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDepartmentBySlug } from "@/lib/sanity";
import SanityContent from "@/components/SanityContent";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function DepartmentPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getDepartmentBySlug(params.slug);

  if (!data) return notFound();

  // Determine the column size based on number of doctors
  const getGridCols = () => {
    if (!data.doctors || data.doctors.length === 0) return "";
    if (data.doctors.length === 1) return "grid-cols-1";
    if (data.doctors.length === 2) return "grid-cols-1 md:grid-cols-2";
    return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  };

  return (
    <div className="bg-[#fffaf3] text-[#1f1f1f]">
      {/* Banner */}
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
          {data.name}
        </h1>
      </div>

      {/* Intro Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-5 max-w-xl">
          <h2 className="text-3xl font-bold leading-snug">
            Amritsar's Best <span className="text-orange-500">{data.name}</span>{" "}
            Experts
          </h2>
          <div className="text-gray-700">
            {data.intro && <SanityContent 
              content={data.intro} 
              className="text-lg !mt-0 [&>p]:!mt-0"
            />}
          </div>
        </div>
        <div className="w-full max-w-md mx-auto h-72 relative rounded-2xl overflow-hidden shadow-lg">
          {data.image && (
            <Image
              src={data.image}
              alt={data.name}
              fill
              className="object-cover"
            />
          )}
        </div>
      </div>

      {/* Dynamic Sections */}
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        {data.sections && data.sections.map((section: any, index: number) => (
          <Section 
            key={index} 
            title={section.title} 
            items={section.listItems || []} 
          />
        ))}

        {/* Conclusion Text (if available) */}
        {data.conclusionText && (
          <section>
            <div className="text-gray-700">
              <SanityContent 
                content={data.conclusionText}
                className="text-lg"
              />
            </div>
          </section>
        )}
      </div>

      {/* Doctors Section - Show if doctors are linked */}
      {data.doctors && data.doctors.length > 0 && (
        <div className="max-w-6xl mx-auto mt-20 px-6">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Our Expert {data.name} Specialists
          </h3>
          <div className="flex justify-center w-full">
            <div className={`grid ${getGridCols()} gap-8 w-full mx-auto justify-center`} style={{ maxWidth: data.doctors.length === 1 ? '400px' : 'none' }}>
              {data.doctors.map((doctor: any) => (
                <div key={doctor._id} className="flex justify-center">
                  <DoctorCard doctor={doctor} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="h-24" />
    </div>
  );
}

function DoctorCard({ doctor }: { doctor: any }) {
  return (
    <Link 
      href={`/doctors/${doctor.slug}`}
      className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col items-center p-6 hover:shadow-xl transition-shadow duration-300 w-full max-w-sm"
    >
      <div className="w-40 h-40 relative rounded-xl overflow-hidden flex-shrink-0 mb-4">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="text-center">
        <h4 className="text-lg font-semibold">{doctor.name}</h4>
        <p className="italic text-sm text-gray-500 mb-2">{doctor.role}</p>
        <div className="text-gray-700 max-w-md mx-auto">
          {doctor.description && (
            <SanityContent 
              content={doctor.description}
              className="text-sm [&>p]:!mt-1 !mt-0"
            />
          )}
        </div>
      </div>
    </Link>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
