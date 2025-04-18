"use client";

import { getIconByName } from "@/lib/icon-mapping";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Static fallback data if Sanity data is not available
const fallbackDepartments = [
  {
    _id: "gynecology",
    name: "Gynecology",
    slug: "gynecology",
    iconName: "UniversityIcon",
  },
  {
    _id: "neurology",
    name: "Neurology",
    slug: "neurology",
    iconName: "Brain",
  },
  {
    _id: "child-development",
    name: "Child Development",
    slug: "child-development",
    iconName: "Stethoscope",
  },
  {
    _id: "general-surgery",
    name: "General Surgery",
    slug: "general-surgery",
    iconName: "Syringe",
  },
  {
    _id: "cardiology",
    name: "Cardiology",
    slug: "cardiology",
    iconName: "Heart",
  },
];

export type Department = {
  _id: string;
  name: string;
  slug: string;
  iconName: string;
};

interface DepartmentsProps {
  departmentData?: Department[];
}

export function Departments({ departmentData }: DepartmentsProps) {
  // Use the fetched departments, or fallback to static data if none
  const departments = departmentData?.length ? departmentData : fallbackDepartments;

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 lg:mb-16 text-center">
          OUR  <span className="text-[#FF9B62]">DEPARTMENTS</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {departments.map((dept) => {
            // Get the icon component by name
            const IconComponent = getIconByName(dept.iconName);
            
            return (
              <Link key={dept._id} href={`/departments/${dept.slug}`} className="group">
                <div className="flex flex-col items-center cursor-pointer transition-transform hover:scale-105">
                  <div className="w-24 h-24 sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full bg-[#FF9B62] flex items-center justify-center mb-3 md:mb-4">
                    <IconComponent className="w-14 h-14 sm:w-14 sm:h-14 md:w-14 md:h-14 lg:w-16 lg:h-16 text-white transition-transform group-hover:scale-110" />
                  </div>
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold text-center group-hover:text-[#FF9B62] transition-colors">
                    {dept.name}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="flex justify-center mt-8 md:mt-12">
          <Link href={"/departments"}>
          <Button className="bg-[#6B87E8] hover:bg-[#5a74d4] px-6 py-4 text-sm md:text-base md:px-8">
            VIEW ALL
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
