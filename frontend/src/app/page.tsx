import { Hero } from "@/components/hero"
import AboutUs from "@/components/about"
import { Doctors } from "@/components/doctors"
import { Contact } from "@/components/contact"
import { NewsAndGallerySection, DepartmentsSection } from "./home-sections"

// Add revalidation to refresh content periodically
export const revalidate = 60

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdf9f3]">

      <Hero />
      <AboutUs />
      <Doctors />
      <DepartmentsSection />
      <NewsAndGallerySection />
      <Contact />
    </main>
  )
}

