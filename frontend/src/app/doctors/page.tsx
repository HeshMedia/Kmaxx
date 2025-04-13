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
  
  useEffect(() => {
    async function loadDoctors() {
      try {
        const data = await getDoctors();
        setDoctors(data);
      } catch (error) {
        console.error("Failed to fetch doctors:", error);
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
