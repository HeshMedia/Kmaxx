import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getIconByName } from "@/lib/icon-mapping";
import { getDepartments } from "@/lib/sanity";
import type { Department } from "@/components/departments";

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

export default async function DepartmentsPage() {
  // Fetch departments from Sanity
  let departments;
  try {
    departments = await getDepartments();
    // Use fallback data if no departments were fetched
    if (!departments || departments.length === 0) {
      departments = fallbackDepartments;
    }
  } catch (error) {
    console.error("Error fetching departments:", error);
    departments = fallbackDepartments;
  }

  return (
    <>
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
             Our Specialzed Departments
            </h1>
          </div>

      {/* Departments Grid Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="mb-12 max-w-3xl mx-auto text-center">
            <p className="text-gray-600">
              Explore our comprehensive range of medical departments, each
              equipped with state-of-the-art technology and staffed by
              experienced specialists dedicated to providing exceptional care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
            {departments.map(
              (dept: {
                iconName: string;
                _id: React.Key | null | undefined;
                slug: any;
                name:
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | Promise<React.AwaitedReactNode>
                  | null
                  | undefined;
              }) => {
                // Get the icon component by name
                const IconComponent = getIconByName(dept.iconName);

                return (
                  <Link
                    key={dept._id}
                    href={`/departments/${dept.slug}`}
                    className="group"
                  >
                    <div className="flex flex-col items-center p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#FF9B62] flex items-center justify-center mb-5">
                        <IconComponent className="w-12 h-12 sm:w-14 sm:h-14 text-white transition-transform group-hover:scale-110" />
                      </div>
                      <h3 className="text-xl font-semibold text-center group-hover:text-[#FF9B62] transition-colors mb-3">
                        {dept.name}
                      </h3>
                      <p className="text-gray-600 text-center text-sm">
                        Click to explore our {String(dept.name).toLowerCase()}{" "}
                        services and treatments
                      </p>
                    </div>
                  </Link>
                );
              }
            )}
          </div>
        </div>
      </section>
    </>
  );
}
