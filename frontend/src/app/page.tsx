
import { Hero } from "@/components/hero"
import { Departments } from "@/components/departments"
import  About  from "@/components/about"
import { Doctors } from "@/components/doctors"
import { News } from "@/components/news"
import { Contact } from "@/components/contact"


export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdf9f3]">
      <Hero />
      <About />
      <Doctors />
      <Departments />
      <News />
      <Contact />
    </main>
  )
}

