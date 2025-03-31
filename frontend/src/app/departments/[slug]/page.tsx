import { Header } from "@/components/header";
import Image from "next/image";
import { notFound } from "next/navigation";
import { departments, type DepartmentSlug } from "@/lib/data/departments";

export default function DepartmentPage({
  params,
}: {
  params: { slug: DepartmentSlug };
}) {
  const data = departments[params.slug];

  if (!data) return notFound();

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
            Amritsar’s Best <span className="text-orange-500">{data.name}</span>{" "}
            Experts
          </h2>
          <p className="text-gray-700 text-lg">{data.intro}</p>
        </div>
        <div className="w-full max-w-md mx-auto h-72 relative rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={data.image}
            alt={data.name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Info Sections */}
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <Section title="Services Offered" items={[...data.services]} />
        <Section title="Facilities & Technology" items={[...data.technology]} />
        <Section title="Conditions We Treat" items={[...data.conditions]} />
      </div>

      {/* Doctor Card */}
      <div className="max-w-xl mx-auto mt-20 px-6">
        <h3 className="text-xl font-bold mb-4 text-center">
          Our Expert Pediatric Neurologists
        </h3>
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col sm:flex-row items-center gap-6 p-6">
          <div className="w-40 h-40 relative rounded-xl overflow-hidden flex-shrink-0">
            <Image
              src={data.doctor.image}
              alt={data.doctor.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold">{data.doctor.name}</h4>
            <p className="italic text-sm text-gray-500 mb-1">Specialist</p>
            <p className="text-sm text-gray-700">
              Dedicated pediatrician providing expert care for children's health
              and well-being.
            </p>
          </div>
        </div>
      </div>

      <div className="h-24" />
    </div>
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
