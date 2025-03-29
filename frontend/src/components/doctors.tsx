"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export function Doctors() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const doctors = [
    {
      name: "Dr Harsh Datta",
      role: "Specialist",
      description: "Dedicated pediatrician providing expert care for children's health and well-being.",
      image:
        "/static/images/D1.webp",
    },
    {
      name: "Dr Ashna Kumar",
      role: "Specialist",
      description: "Dedicated pediatrician providing expert care for children's health and well-being.",
      image:
        "/static/images/D2.webp",
    },
    {
      name: "Dr Keshav",
      role: "Specialist",
      description: "Dedicated pediatrician providing expert care for children's health and well-being.",
      image:
        "/static/images/D3.webp",
    },
    {
      name: "Dr Bharat",
      role: "Specialist",
      description: "Dedicated pediatrician providing expert care for children's health and well-being.",
      image:
        "/static/images/D4.webp",
    },
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-16">
          THE TEAM OF <span className="text-[#FF9B62]">DOCTORS</span>
        </h2>
        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            {doctors.map((doctor, index) => (
              <div key={index} className="min-w-[300px] bg-white rounded-lg shadow-lg p-4">
                <Image
                  src={doctor.image || "/placeholder.svg"}
                  alt={doctor.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{doctor.name}</h3>
                <p className="text-gray-600 mb-2">{doctor.role}</p>
                <p className="text-sm text-gray-500">{doctor.description}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => setCurrentSlide(Math.min(doctors.length - 1, currentSlide + 1))}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        <div className="flex justify-center mt-12">
          <Button className="bg-[#FF9B62] hover:bg-[#ff8a47] px-8">VIEW MORE</Button>
        </div>
      </div>
    </section>
  )
}

