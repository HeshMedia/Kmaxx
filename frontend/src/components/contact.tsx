"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section id="contact"
      className="relative py-20 px-6 bg-white overflow-hidden flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('/static/images/back.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Information — appears first on mobile, second on desktop */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#6B87E8] mb-6 sm:mb-8">CONTACT US</h2>
            <p className="text-base sm:text-lg mb-10 max-w-md">
              For inquiries, appointments, or assistance, please reach out to us using the contact details provided.
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF9B62] flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <span className="text-base sm:text-lg">+91 9501411935</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF9B62] flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <a href="mailto:helpdesk@kmaxx.in" className="text-base sm:text-lg hover:text-[#FF9B62] transition-colors">
                  helpdesk@kmaxx.in
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF9B62] flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <a 
                  href="https://maps.app.goo.gl/ekdzwSPh8vsSuwAy9" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-base sm:text-lg hover:text-[#FF9B62] transition-colors"
                >
                  355 Mall Road, Amritsar
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form — appears second on mobile, first on desktop */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
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
        </div>
      </div>

      {/* Google Maps */}
      <div className="w-full mt-16 max-w-5xl">
        <div className="rounded-lg overflow-hidden shadow-xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.703399052806!2d74.87011337589158!3d31.64197037415859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964a7a109e319%3A0xe04f4da93606ba72!2sKmaxx%20American%20Hospital%20-%20Dr%20Ved%20Gupta%20Campus!5e0!3m2!1sen!2sin!4v1744632718555!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Kmaxx American Hospital Location"
            className="w-full"
          ></iframe>
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
