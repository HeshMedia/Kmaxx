"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import GalleryComponent from "./ui/gallery"

export function News() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl font-bold mb-12">
          OUR <span className="text-[#FF9B62]">NEWS</span>
        </h2>

        {/* Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* News Section */}
          <div className="bg-[#FF9B62] rounded-3xl p-10">
            <div className="bg-white rounded-lg p-6">
              <div className="relative h-[400px] mb-4">
                <Image
                  src={"/static/images/news2.jpg"}
                  alt="News Article"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex justify-between mt-4">
                <button className="bg-gray-200 rounded-full p-2">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button className="bg-gray-200 rounded-full p-2">
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
