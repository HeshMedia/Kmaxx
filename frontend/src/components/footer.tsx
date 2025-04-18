"use client"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react"
import { FaGoogle } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/static/images/logo.png"
                alt="KMAXX American Hospital"
                width={180}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400">
              KMAXX American Hospital brings cutting-edge healthcare technology and exceptional medical services to your
              doorstep.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/kmaxxamericanhospital/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-[#FF9B62] flex items-center justify-center hover:bg-[#ff8a47] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://g.co/kgs/SP1SyrF"
                target="_blank"
                className="w-10 h-10 rounded-full bg-[#FF9B62] flex items-center justify-center hover:bg-[#ff8a47] transition-colors"
              >
                <FaGoogle className="h-5 w-5" />
              </Link>
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about-us" className="text-gray-400 hover:text-[#FF9B62] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-gray-400 hover:text-[#FF9B62] transition-colors">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link href="/departments" className="text-gray-400 hover:text-[#FF9B62] transition-colors">
                  Departments
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-[#FF9B62] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/departments/cardiology" className="text-gray-400 hover:text-[#FF9B62] transition-colors">
                  Cardiology
                </Link>
              </li>
              <li>
                <Link href="/departments/pediatric-neurology" className="text-gray-400 hover:text-[#FF9B62] transition-colors">
                  Pediatric Neurology
                </Link>
              </li>
              <li>
                <Link href="/departments/gynecology" className="text-gray-400 hover:text-[#FF9B62] transition-colors">
                  Gynecology
                </Link>
              </li>
              <li>
                <Link href="/departments/child-development" className="text-gray-400 hover:text-[#FF9B62] transition-colors">
                  CDC
                </Link>
              </li>
              <li>
                <Link href="/departments/general-surgery" className="text-gray-400 hover:text-[#FF9B62] transition-colors">
                  General Surgery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#FF9B62]" />
                <span className="text-gray-400">+91 9501411935</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#FF9B62]" />
                <a 
                  href="mailto:helpdesk@kmaxx.in" 
                  className="text-gray-400 hover:text-[#FF9B62] transition-colors"
                >
                  helpdesk@kmaxx.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#FF9B62]" />
                <a 
                  href="https://maps.app.goo.gl/ekdzwSPh8vsSuwAy9" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-[#FF9B62] transition-colors"
                >
                  355 Mall Road, Amritsar
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-[#FF9B62]" />
                <span className="text-gray-400">24/7 Emergency Services</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} KMAXX American Hospital. All rights reserved.</p>
        </div>
      </div>
      <div className="text-center mt-4 text-gray-400 text-sm">
        Website made and maintained by <a href="https://heshmedia.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#FF9B62] transition-colors">Hesh Media</a>
      </div>
    </footer>
  )
}

