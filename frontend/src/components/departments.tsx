"use client";

import { Brain, Heart, Stethoscope, Syringe, UniversityIcon as UterusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const departments = [
  {
    icon: UterusIcon,
    name: "Gynecology",
    slug: "gynecology",
  },
  {
    icon: Brain,
    name: "Neurology",
    slug: "neurology",
  },
  {
    icon: Stethoscope,
    name: "Child Development",
    slug: "child-development",
  },
  {
    icon: Syringe,
    name: "General Surgery",
    slug: "general-surgery",
  },
  {
    icon: Heart,
    name: "Cardiology",
    slug: "cardiology",
  },
];

export function Departments() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 lg:mb-16 text-center">
          OUR DEPARTMENTS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {departments.map((dept, index) => (
            <Link key={index} href={`/departments/${dept.slug}`} className="group">
              <div className="flex flex-col items-center cursor-pointer transition-transform hover:scale-105">
                <div className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full bg-[#FF9B62] flex items-center justify-center mb-3 md:mb-4">
                  <dept.icon className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-white transition-transform group-hover:scale-110" />
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-semibold text-center group-hover:text-[#FF9B62] transition-colors">
                  {dept.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-8 md:mt-12">
          <Button className="bg-[#6B87E8] hover:bg-[#5a74d4] px-6 py-4 text-sm md:text-base md:px-8">
            VIEW ALL
          </Button>
        </div>
      </div>
    </section>
  );
}