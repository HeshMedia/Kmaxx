import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react"

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
                href="#"
                className="w-10 h-10 rounded-full bg-[#FF9B62] flex items-center justify-center hover:bg-[#ff8a47] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-[#FF9B62] flex items-center justify-center hover:bg-[#ff8a47] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-[#FF9B62] flex items-center justify-center hover:bg-[#ff8a47] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-[#FF9B62] flex items-center justify-center hover:bg-[#ff8a47] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-[#FF9B62] flex items-center justify-center hover:bg-[#ff8a47] transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#FF9B62] transition-colors">
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
                <Link href="/contact" className="text-gray-400 hover:text-[#FF9B62] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-[#FF9B62] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-[#FF9B62] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services/emergency" className="text-gray-400 hover:text-[#FF9B62] transition-colors">
                  24/7 Emergency Care
                </Link>
              </li>
              <li>
                <Link href="/services/cardiology" className="text-gray-400 hover:text-[#FF9B62] transition-colors">
                  Cardiology
                </Link>
              </li>
              <li>
                <Link href="/services/neurology" className="text-gray-400 hover:text-[#FF9B62] transition-colors">
                  Neurology
                </Link>
              </li>
              <li>
                <Link href="/services/pediatrics" className="text-gray-400 hover:text-[#FF9B62] transition-colors">
                  Pediatrics
                </Link>
              </li>
              <li>
                <Link href="/services/diagnostics" className="text-gray-400 hover:text-[#FF9B62] transition-colors">
                  Diagnostics
                </Link>
              </li>
              <li>
                <Link href="/services/pharmacy" className="text-gray-400 hover:text-[#FF9B62] transition-colors">
                  24/7 Pharmacy
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
                <span className="text-gray-400">helpdesk@kmaxx.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#FF9B62]" />
                <span className="text-gray-400">355 Mall Road, Amritsar</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-[#FF9B62]" />
                <span className="text-gray-400">24/7 Emergency Services</span>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-medium">Subscribe to Newsletter</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                />
                <Button className="bg-[#FF9B62] hover:bg-[#ff8a47]">
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-t border-gray-800">
          <div>
            <h4 className="text-lg font-medium mb-4">Patient Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#FF9B62] transition-colors">
                  Patient Portal
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#FF9B62] transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#FF9B62] transition-colors">
                  Health Records
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Insurance</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#FF9B62] transition-colors">
                  Insurance Plans
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#FF9B62] transition-colors">
                  Billing Information
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#FF9B62] transition-colors">
                  Financial Assistance
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Research</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#FF9B62] transition-colors">
                  Clinical Trials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#FF9B62] transition-colors">
                  Research Programs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#FF9B62] transition-colors">
                  Publications
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Medical Education</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#FF9B62] transition-colors">
                  Residency Programs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#FF9B62] transition-colors">
                  Continuing Education
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#FF9B62] transition-colors">
                  Medical Library
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} KMAXX American Hospital. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="/terms" className="text-gray-400 hover:text-[#FF9B62] text-sm">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-[#FF9B62] text-sm">
              Privacy Policy
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-[#FF9B62] text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

