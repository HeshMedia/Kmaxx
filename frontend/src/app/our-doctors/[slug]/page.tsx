import { notFound } from "next/navigation";
import Image from "next/image";
import { doctors } from "@/lib/data/doctors";


export default function DoctorPage({ params }: { params: { slug: string } }) {
  const doctor = doctors.find((doc) => doc.slug === params.slug);

  if (!doctor) return notFound();

  return (
    <div className="bg-[#fffaf3]">
    <div className="min-h-screen bg-[#fffaf3] px-6 py-12 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="rounded-3xl overflow-hidden shadow-lg relative w-full h-[450px]">
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{doctor.name}</h1>
          <p className="italic text-lg text-gray-600 mb-4">{doctor.role}</p>
          <p className="text-gray-700 text-lg">{doctor.bio}</p>

          <button className="mt-6 px-6 py-3 bg-indigo-500 text-white font-semibold rounded-full shadow hover:bg-indigo-600 transition">
            BOOK APPOINTMENT
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
