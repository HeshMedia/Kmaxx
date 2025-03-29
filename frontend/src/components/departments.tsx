import { Brain, Heart, Stethoscope, Syringe, UniversityIcon as UterusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Departments() {
  const departments = [
    {
      icon: UterusIcon,
      name: "Gynecology",
    },
    {
      icon: Brain,
      name: "Neurology",
    },
    {
      icon: Stethoscope,
      name: "Child Development",
    },
    {
      icon: Syringe,
      name: "General Surgery",
    },
    {
      icon: Heart,
      name: "Cardiology",
    },
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-16">OUR DEPARTMENTS</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {departments.map((dept, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-[#FF9B62] flex items-center justify-center mb-4">
                <dept.icon className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-center">{dept.name}</h3>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button className="bg-[#6B87E8] hover:bg-[#5a74d4] px-8">VIEW ALL</Button>
        </div>
      </div>
    </section>
  )
}

