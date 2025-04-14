"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getDoctors } from "@/lib/sanity";
import { Doctor } from "@/types";
import { PortableText } from '@portabletext/react';

export function Doctors() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadDoctors() {
      try {
        const data = await getDoctors();
        setDoctors(data || []);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch doctors:", error);
        setError(String(error));
      } finally {
        setLoading(false);
      }
    }
    
    loadDoctors();
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section
      className="py-20 px-6 bg-[#fdf9f3]"    >
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-16">
          THE TEAM OF <span className="text-[#FF9B62]">DOCTORS</span>
        </h2>

        <div className="relative">
          {loading ? (
            <div className="text-center py-12">Loading doctors...</div>
          ) : error ? (
            <div className="text-center text-red-500 py-12">
              Error loading doctors: {error}
            </div>
          ) : doctors.length === 0 ? (
            <div className="text-center py-12">No doctors found</div>
          ) : (
            <>
              {/* Scrollable Row */}
              <div
                ref={scrollRef}
                className="flex gap-6 no-scrollbar scroll-smooth overflow-x-auto pb-9"
              >
                {doctors.map((doctor, index) => (
                  <Link
                    key={index}
                    href={`/doctors/${doctor.slug}`}
                    className="min-w-[280px] max-w-[280px] bg-white rounded-2xl shadow-lg p-4 flex-shrink-0"
                  >
                    <Image
                      src={doctor.image || "/static/images/placeholder-doctor.jpg"}
                      alt={doctor.name}
                      width={280}
                      height={280}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-lg font-bold mb-1">{doctor.name}</h3>
                    <p className="text-sm italic text-gray-600 mb-1">
                      {doctor.role}
                    </p>
                    <div className="text-sm text-gray-500 line-clamp-3">
                      {doctor.description && typeof doctor.description === 'object' && (
                        <PortableText value={doctor.description} />
                      )}
                    </div>
                  </Link>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Link href="/doctors">
            <Button className="bg-[#FF9B62] hover:bg-[#ff8a47] px-10 py-6 text-lg rounded-full">
              VIEW ALL
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
