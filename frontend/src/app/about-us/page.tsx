import { Header } from "@/components/header";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="bg-[#fffaf3] min-h-screen">
    <div className="relative bg-[#FFD0B4] h-48 md:h-56 flex items-center justify-center overflow-hidden">
      {/* Hex pattern top-left */}
      <Image
        src="/static/images/hex-left.png"
        alt="Hex pattern top left"
        width={220}
        height={220}
        className="absolute top-0 left-0 object-contain opacity-70 -translate-x-8 -translate-y-8"
      />
      
      {/* Hex pattern bottom-right */}
      <Image
        src="/static/images/hex-right .png"
        alt="Hex pattern bottom right"
        width={220}
        height={220}
        className="absolute bottom-0 right-0 object-contain opacity-70 translate-x-8 translate-y-8"
      />

      <h1 className="text-2xl md:text-4xl font-bold uppercase text-black z-10">
       About Us
      </h1>
    </div>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <blockquote className="text-4xl italic text-orange-700 text-center mb-12">
          “ OUR MISSION IS PROVIDING <br /> AMERICAN HEALTHCARE WITH <br /> COMPASSION AND INNOVATION ”
        </blockquote>

        <p className="text-lg text-gray-700 mb-12">
          KMAXX American Hospital is a premier multi-specialty hospital in Amritsar, bringing American technology and international standards of healthcare to the region. With a focus on cutting-edge medical advancements, expert specialists, and patient-centered care, KMAXX is setting new benchmarks in healthcare excellence.
        </p>

        <div className="grid gap-12">
          <section>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">State-of-the-Art Infrastructure & Facilities</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>World-Class Medical Technology – Equipped with advanced diagnostic and therapeutic tools.</li>
              <li>Multi-Specialty Departments – Pediatrics, neurology, cardiology, orthopedics, nephrology, and more.</li>
              <li>ICUs (ICU & NICU) – 24/7 critical care with highly trained staff and life-support systems.</li>
              <li>Advanced Imaging – MRI, CT, Ultrasound, Digital X-ray, fully automated lab.</li>
              <li>24/7 Emergency & Trauma – Dedicated response team for trauma and accident cases.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Specialized Departments</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Pediatrics & Neonatal Care – Advanced NICU, PICU.</li>
              <li>Neurology & Neurosurgery – Expertise in brain and spine disorders.</li>
              <li>Cardiology – Bypass surgeries, angioplasty, and cath lab services.</li>
              <li>Nephrology & Dialysis – Cutting-edge dialysis units with expert nephrologists.</li>
              <li>Gastroenterology, Orthopedics, Oncology, ENT, etc.</li>
              <li>Dedicated ICU/CCU/Critical Care teams with round-the-clock monitoring.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Patient-Centered Approach</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Personalized Treatment Plans for every patient.</li>
              <li>Multidisciplinary Teams – Specialists working together for optimal care.</li>
              <li>Technology-Powered – Digital records, AI-enhanced diagnostics.</li>
              <li>Telemedicine & Remote Consultations for convenience and speed.</li>
              <li>24/7 Ambulance, Emergency Services & Pharmacy Access.</li>
            </ul>
          </section>

          <section>
            <p className="text-gray-700 text-lg">
              KMAXX American Hospital is redefining healthcare in Amritsar with world-class facilities, top medical experts, and compassionate care, ensuring every patient receives the highest standard of treatment and recovery support.
            </p>
          </section>
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-full shadow hover:bg-indigo-700 transition">
            BOOK APPOINTMENT
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <Image src="/static/images/G1.jpg" alt="hospital 1" width={400} height={250} className="rounded-xl object-cover w-full h-48" />
          <Image src="/static/images/G2.jpg" alt="hospital 2" width={400} height={250} className="rounded-xl object-cover w-full h-48" />
          <Image src="/static/images/G3.webp" alt="hospital 3" width={400} height={250} className="rounded-xl object-cover w-full h-48" />
          <Image src="/static/images/G1.jpg" alt="hospital 4" width={400} height={250} className="rounded-xl object-cover w-full h-48" />
        </div>
      </section>
    </div>
  );
}
