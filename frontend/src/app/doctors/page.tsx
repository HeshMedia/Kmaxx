import Image from "next/image";
import Link from "next/link";
import { doctors } from "@/lib/data/doctors"; // 

export default function OurDoctorsPage() {
  return (
    <div className="bg-[#fffaf3]">
      <div className="min-h-screen bg-[#fffaf3] px-6 py-12 mt-8">
        <h1 className="text-6xl font-bold text-center mb-12">
          <span className="text-black">OUR </span>
          <span className="text-orange-500">DOCTORS</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {doctors.map((doc, idx) => (
            <Link href={`/our-doctors/${doc.slug}`} key={idx}>
              <div className="rounded-3xl overflow-hidden bg-white shadow-lg transition hover:shadow-xl cursor-pointer">
                <div className="relative w-full h-80">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-semibold text-lg">{doc.name}</h2>
                  <p className="italic text-sm text-gray-600">{doc.role}</p>
                  <p className="text-sm mt-2 text-gray-700">
                    {doc.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
