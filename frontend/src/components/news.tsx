"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import GalleryComponent from "./ui/gallery"
import { useState, useEffect } from "react"

interface NewsItem {
  _id: string;
  title?: string;
  image: string;
  order?: number;
}

interface GalleryItem {
  _id: string;
  title: string;
  image: string;
  description: string;
  order?: number;
}

interface NewsProps {
  newsItems: NewsItem[];
  galleryItems: GalleryItem[];
}

export function News({ newsItems, galleryItems }: NewsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  // Debug logs
  useEffect(() => {
    console.log("News component received:", {
      newsItems,
      galleryItems
    });
    
    if (newsItems?.length > 0) {
      console.log("News items available:", newsItems.length);
      for (let i = 0; i < newsItems.length; i++) {
        console.log(`News item ${i}:`, newsItems[i]);
      }
    }
    
    setIsLoaded(true);
  }, [newsItems, galleryItems]);

  // Use safe arrays with additional check
  const news = Array.isArray(newsItems) ? newsItems : newsItems ? [newsItems] : [];
  const gallery = Array.isArray(galleryItems) ? galleryItems : galleryItems ? [galleryItems] : [];

  const handlePrev = () => {
    if (news.length <= 1) return;
    setCurrentIndex(prev => (prev === 0 ? news.length - 1 : prev - 1));
    console.log("Previous button clicked, new index:", currentIndex === 0 ? news.length - 1 : currentIndex - 1);
  }

  const handleNext = () => {
    if (news.length <= 1) return;
    setCurrentIndex(prev => (prev === news.length - 1 ? 0 : prev + 1));
    console.log("Next button clicked, new index:", currentIndex === news.length - 1 ? 0 : currentIndex + 1);
  }

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-6xl font-bold mb-12 pl-6">
          OUR <span className="text-[#FF9B62]">NEWS</span>
        </h2>

        {!isLoaded ? (
          <div className="text-center py-8">Loading content...</div>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* News Section */}
          <div className="bg-[#FF9B62] rounded-3xl p-10">
            <div className="bg-white rounded-lg p-6">
              <div className="relative h-[400px] mb-4">
                {news.length > 0 ? (
                  <div className="w-full h-full relative rounded-lg overflow-hidden">
                    <p className="absolute top-2 left-2 z-10 bg-white/70 text-sm px-2 py-1 rounded">
                      {currentIndex + 1} / {news.length}
                    </p>
                    <img 
                      key={news[currentIndex]._id} // Force re-render when changing images
                      src={news[currentIndex].image} 
                      alt={news[currentIndex].title || `News ${currentIndex + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.error("Failed to load image:", news[currentIndex].image);
                        e.currentTarget.src = "/static/images/placeholder.jpg";
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
                    <p className="text-gray-500">No news images available</p>
                  </div>
                )}
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={handlePrev}
                  className={`rounded-full p-2 ${news.length > 1 ? 'bg-gray-200 cursor-pointer' : 'bg-gray-100 cursor-not-allowed'}`}
                  disabled={news.length <= 1}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <p className="text-sm text-gray-500">
                  {news.length > 0 ? news[currentIndex].title || `News ${currentIndex + 1}` : "No news"}
                </p>
                <button
                  onClick={handleNext}
                  className={`rounded-full p-2 ${news.length > 1 ? 'bg-gray-200 cursor-pointer' : 'bg-gray-100 cursor-not-allowed'}`}
                  disabled={news.length <= 1}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-6xl font-bold mb-6 text-[#6D86DC]">GALLERY</h3>
            <GalleryComponent items={gallery} />
          </div>
        </div>
        )}
      </div>
    </section>
  )
}
