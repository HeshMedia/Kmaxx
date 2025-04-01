"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import GalleryComponent from "./ui/gallery"
import { useState } from "react"

// Sample array of news image URLs — you can replace or load from props
const newsImages = [
  "/static/images/news2.jpg",
  "/static/images/news3.jpg",
  "/static/images/news4.jpg"
]

export function News() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? newsImages.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === newsImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-6xl font-bold mb-12">
          OUR <span className="text-[#FF9B62]">NEWS</span>
        </h2>

        {/* Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* News Section */}
          <div className="bg-[#FF9B62] rounded-3xl p-10">
            <div className="bg-white rounded-lg p-6">
              <div className="relative h-[400px] mb-4">
                <Image
                  src={newsImages[currentIndex]}
                  alt={`News ${currentIndex + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={handlePrev}
                  className="bg-gray-200 rounded-full p-2"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-gray-200 rounded-full p-2"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-6xl font-bold mb-6 text-[#6D86DC]">GALLERY</h3>
            <GalleryComponent />
          </div>
        </div>
      </div>
    </section>
  )
}
