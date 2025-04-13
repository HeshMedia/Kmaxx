"use client"

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getDoctorBySlug } from "@/lib/sanity";
import { Doctor } from "@/types";
import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";

export default function DoctorPage({ params }: { params: { slug: string } }) {
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadDoctor() {
      try {
        console.log(`Fetching doctor with slug: ${params.slug}...`);
        const data = await getDoctorBySlug(params.slug);
        console.log("Doctor data received:", data ? "Found" : "Not found");
        setDoctor(data);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch doctor:", error);
        setError(`Error fetching doctor: ${error instanceof Error ? error.message : String(error)}`);
      } finally {
        setLoading(false);
      }
    }
    
    loadDoctor();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="bg-[#fffaf3] min-h-screen flex items-center justify-center">
        <p>Loading doctor details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#fffaf3] min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-xl font-bold text-red-500 mb-4">Error Loading Doctor</h2>
        <p className="text-gray-800 mb-4">{error}</p>
        <Link href="/doctors" className="text-orange-500 hover:underline">
          ← Back to Doctors
        </Link>
      </div>
    );
  }

  if (!doctor) return notFound();

  return (
    <div className="bg-[#fffaf3]">
      <div className="min-h-screen bg-[#fffaf3] px-6 py-12 max-w-6xl mx-auto">
        <Link href="/doctors" className="inline-block mb-8 text-orange-500 hover:underline">
          ← Back to Doctors
        </Link>
      
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl overflow-hidden shadow-lg relative w-full h-[450px]">
            <Image
              src={doctor.image || "/static/images/placeholder-doctor.jpg"}
              alt={doctor.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">{doctor.name}</h1>
            <p className="italic text-lg text-gray-600 mb-4">{doctor.role}</p>
            
            {doctor.description && (
              <div className="prose text-gray-700 text-lg">
                <PortableText value={doctor.description} />
              </div>
            )}

            {doctor.bio && (
              <div className="mt-6 prose text-gray-700">
                <h2 className="text-2xl font-bold mb-2">Biography</h2>
                <PortableText value={doctor.bio} />
              </div>
            )}

            <button className="mt-6 px-6 py-3 bg-indigo-500 text-white font-semibold rounded-full shadow hover:bg-indigo-600 transition">
              BOOK APPOINTMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
