"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";
import { doctors } from "@/lib/data/doctors";

export function Doctors() {
  const scrollRef = useRef<HTMLDivElement>(null);

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
          {/* Scrollable Row */}
          <div
            ref={scrollRef}
            className="flex gap-6 no-scrollbar scroll-smooth"
          >
            {doctors.map((doctor, index) => (
              <Link
                key={index}
                href={`/our-doctors/${doctor.slug}`}
                className="min-w-[280px] max-w-[280px] bg-white rounded-2xl shadow-lg p-4 flex-shrink-0"
              >
                <Image
                  src={doctor.image || "/placeholder.svg"}
                  alt={doctor.name}
                  width={280}
                  height={280}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold mb-1">{doctor.name}</h3>
                <p className="text-sm italic text-gray-600 mb-1">
                  {doctor.role}
                </p>
                <p className="text-sm text-gray-500">{doctor.description}</p>
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
