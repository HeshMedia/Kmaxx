import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Departments } from "@/components/departments"
import  About  from "@/components/about"
import { Doctors } from "@/components/doctors"
import { News } from "@/components/news"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Departments />
      <About />
      <Doctors />
      <News />
      <Contact />
      <Footer />
    </main>
  )
}

