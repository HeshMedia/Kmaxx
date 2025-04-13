"use client"

import Image from "next/image";
import Link from "next/link";
import { getDoctors } from "@/lib/sanity";
import { PortableText } from '@portabletext/react';
import { Doctor } from "@/types";
import { useEffect, useState } from "react";

export default function OurDoctorsPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    async function loadDoctors() {
      try {
        console.log("Starting to load doctors...");
        const data = await getDoctors();
        console.log("Doctors data received:", data ? `${data.length} doctors` : "No data");
        setDoctors(data || []);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch doctors:", error);
        setError(`Error fetching doctors: ${error instanceof Error ? error.message : String(error)}`);
        setDoctors([]);
      } finally {
        setLoading(false);
      }
    }
    
    loadDoctors();
  }, []);

  return (
    <div className="bg-[#fffaf3]">
      <div className="min-h-screen bg-[#fffaf3] px-6 py-12 mt-8">
        <h1 className="text-6xl font-bold text-center mb-12">
          <span className="text-black">OUR </span>
          <span className="text-orange-500">DOCTORS</span>
        </h1>

        {loading ? (
          <div className="text-center">Loading doctors...</div>
        ) : error ? (
          <div className="text-center text-red-500 p-4 max-w-2xl mx-auto">
            <p className="font-bold mb-2">There was an error loading doctors:</p>
            <p className="mb-4">{error}</p>
            <p className="italic text-sm">This error is only visible in development mode.</p>
          </div>
        ) : doctors.length === 0 ? (
          <div className="text-center text-amber-700 p-4">
            <p>No doctors found. Please check the Sanity Studio to ensure doctor data exists and is published.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {doctors.map((doc, idx) => (
              <Link href={`/our-doctors/${doc.slug}`} key={idx}>
                <div className="rounded-3xl overflow-hidden bg-white shadow-lg transition hover:shadow-xl cursor-pointer">
                  <div className="relative w-full h-80">
                    <Image
                      src={doc.image || "/static/images/placeholder-doctor.jpg"}
                      alt={doc.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="font-semibold text-lg">{doc.name}</h2>
                    <p className="italic text-sm text-gray-600">{doc.role}</p>
                    <div className="text-sm mt-2 text-gray-700">
                      {doc.description && typeof doc.description === 'object' && (
                        <PortableText value={doc.description} />
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
