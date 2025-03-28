import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-[#fdf9f3] py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div className="relative">
          <h2 className="text-4xl font-bold mb-2 text-black">ABOUT</h2>
          <div className="bg-[#FF9B62] text-white p-6 md:p-10 rounded-lg shadow-lg relative">
            <h3 className="text-4xl font-bold">US</h3>
            <p className="mt-4 text-lg">
              KMAXX American Hospital, located in Amritsar, brings cutting-edge
              American technology and exceptional healthcare services to your
              doorstep. Our commitment is to provide unique services, making us a
              trusted name in healthcare excellence.
            </p>
            <div className="absolute -top-8 right-8 w-24 h-24 md:w-32 md:h-32 border-4 border-white overflow-hidden">
              <img
                src="/static/images/D2.webp"
                alt="Doctors Group"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Image Grid */}
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          <div className="row-span-2">
            <img
              src="static/images/4.jpg"
              alt="Baby Checkup"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src="static/images/1.jpg"
              alt="Blood Pressure Check"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src="static/images/2.jpg"
              alt="Pregnancy Consultation"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src="static/images/3.jpg"
              alt="Kids Therapy"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src="static/images/5.jpg"
              alt="Maternity Care"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
