"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Facebook, Instagram, Youtube, Menu, X, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getNavbarDepartments } from "@/lib/sanity"

interface Department {
  _id: string;
  name: string;
  slug: string;
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isDepartmentsOpen, setIsDepartmentsOpen] = useState(false)
  const [departments, setDepartments] = useState<Department[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Fetch departments for the navbar
  useEffect(() => {
    async function loadDepartments() {
      try {
        setIsLoading(true)
        const deptData = await getNavbarDepartments()
        setDepartments(deptData || [])
      } catch (error) {
        console.error("Error loading departments:", error)
        setDepartments([])
      } finally {
        setIsLoading(false)
      }
    }

    loadDepartments()
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleServices = () => setIsServicesOpen(!isServicesOpen)
  const toggleDepartments = () => setIsDepartmentsOpen(!isDepartmentsOpen)

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
    setIsDepartmentsOpen(false)
  }

  return (
    <header className="w-full">
      {/* Top Contact Bar */}
      <div className="bg-[#FF9B62] text-white py-2 px-4 flex  md:flex-row justify-between items-center text-sm">
        <div className="flex items-center space-x-4 mb-2 md:mb-0">
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            <span>9501411935</span>
          </div>
          <span className="hidden md:inline">|</span>
          <a href="mailto:helpdesk@kmaxx.in" className="text-sm">
            helpdesk@kmaxx.in
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
            <Link 
            href="#contact" 
            className="hidden md:inline"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            >
            Book Appointment
            </Link>
          <div className="flex items-center space-x-2">
            <Link href="https://www.instagram.com/kmaxxamericanhospital?igsh=MXZjaXB4N3FzNzIwdQ==" className="hover:text-gray-200">
              <Instagram className="h-5 w-5" />
            </Link>
          
            {/* <Link href="#" className="hover:text-gray-200">
              <Google className="h-5 w-5" />
            </Link> */}
          
            
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white py-4 px-6 flex items-center justify-between shadow-sm relative">
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <Image 
            src={"/static/images/logo.png" }
            alt="KMAXX American Hospital" 
            width={250} 
            height={80} 
            className="h-12 w-auto"
          />
          <h1 className="text-2xl font-bold text-[#FF9B62] ml-2">
          KMAXX  <span  className="text-blue-500" >AMERICAN HOSPITAL</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 gap-10">
          <Link href="/" className="hover:text-[#FF9B62]">
            Home
          </Link>

          <Link href="/about-us" className="hover:text-[#FF9B62]">
            About Us
          </Link>

          <Link href="/doctors" className="hover:text-[#FF9B62]">
            Doctors
          </Link>

          {departments.length > 0 && (
            <div className="relative group">
              <button className="hover:text-[#FF9B62] flex items-center gap-1 py-2">
                Departments <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full -left-2 hidden group-hover:block bg-white shadow-lg rounded-lg p-4 w-48 z-50">
                {departments.map((dept) => (
                  <Link 
                    key={dept._id}
                    href={`/departments/${dept.slug}`} 
                    className="block p-2 hover:bg-gray-100 rounded"
                  >
                    {dept.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <Link href="/departments/child-development" className="hover:text-[#FF9B62]">
            CDC
          </Link>
          
          <Link href="/blogs" className="hover:text-[#FF9B62]">
            Blogs
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center gap-4">
          <Button className="bg-[#FF9B62] hover:bg-[#ff8a47] hidden xs:inline-flex">
            <Phone className="mr-2 h-4 w-4" />
            Emergency
          </Button>
          <button onClick={toggleMenu} className="text-gray-600">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50">
            <div className="px-6 py-4 space-y-4">
              <Link href="/" className="block py-2 hover:text-[#FF9B62]" onClick={closeMenu}>
               Home
              </Link>
              
              <Link href="/about-us" className="block py-2 hover:text-[#FF9B62]" onClick={closeMenu}>
                About Us
              </Link>

              <Link href="/doctors" className="block py-2 hover:text-[#FF9B62]" onClick={closeMenu}>
                Doctors
              </Link>

              {departments.length > 0 && (
                <div>
                  <button 
                    onClick={toggleDepartments}
                    className="w-full flex justify-between items-center py-2 hover:text-[#FF9B62]"
                  >
                    Departments
                    {isDepartmentsOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </button>
                  {isDepartmentsOpen && (
                    <div className="pl-4 pb-2 space-y-2">
                      {departments.map((dept) => (
                        <Link 
                          key={dept._id}
                          href={`/departments/${dept.slug}`} 
                          className="block py-1 hover:text-[#FF9B62]" 
                          onClick={closeMenu}
                        >
                          {dept.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <Link href="/departments/child-development" className="block py-2 hover:text-[#FF9B62]" onClick={closeMenu}>
                CDC
              </Link>
              
              <Link href="/blogs" className="block py-2 hover:text-[#FF9B62]" onClick={closeMenu}>
                Blogs
              </Link>

              <Button className="bg-[#FF9B62] hover:bg-[#ff8a47] w-full mt-4">
                <Phone className="mr-2 h-4 w-4" />
                Emergency
              </Button>
            </div>
          </div>
        )}

        {/* Desktop Emergency Button */}
        <Button className="bg-[#FF9B62] hover:bg-[#ff8a47] hidden md:inline-flex">
          <Phone className="mr-2 h-4 w-4" />
          Emergency
        </Button>
      </nav>
    </header>
  )
}