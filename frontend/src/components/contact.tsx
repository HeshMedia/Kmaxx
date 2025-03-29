"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section className="relative py-20 px-6 bg-white overflow-hidden ">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="text-lg">
                  Name
                </label>
                <Input id="name" type="text" className="mt-2 w-full p-3 rounded-lg border border-gray-200" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="text-lg">
                    Email
                  </label>
                  <Input id="email" type="email" className="mt-2 w-full p-3 rounded-lg border border-gray-200" />
                </div>
                <div>
                  <label htmlFor="phone" className="text-lg">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" className="mt-2 w-full p-3 rounded-lg border border-gray-200" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="text-lg">
                  Message
                </label>
                <Textarea id="message" className="mt-2 w-full p-3 rounded-lg border border-gray-200 min-h-[150px]" />
              </div>
              <Button className="bg-[#FF9B62] hover:bg-[#ff8a47] w-32">SUBMIT</Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/2">
            <h2 className="text-5xl font-bold text-[#6B87E8] mb-8">CONTACT US</h2>
            <p className="text-lg mb-12 max-w-md">
              Contact us for questions, technical assistance, or collaboration opportunities via the contact information
              provided.
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF9B62] flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <span className="text-lg">+91 9501411935</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF9B62] flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <span className="text-lg">helpdesk@kmaxx.in</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF9B62] flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <span className="text-lg">355 Mall Road, Amritsar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative Background Pattern */}
      <div className="absolute bottom-0 right-0 grid grid-cols-5 gap-4 text-pink-200 opacity-20">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="text-2xl">
            +
          </div>
        ))}
      </div>
    </section>
  )
}

