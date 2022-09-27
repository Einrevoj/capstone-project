import { Icon } from "@iconify/react";
import React from "react";
import servicesImg from "../../images/services_img.png";

export default function Services() {
  return (
    // services main container
    <div className=" bg-subTwo overflow-hidden w-full h-screen md:grid md:grid-cols-2">
      {/* Services Image */}
      <img
        className="hidden md:flex object-cover h-full overflow-hidden"
        src={servicesImg}
        alt="services_img"
      />
      {/* Services Icons */}
      <div className="flex flex-col items-center justify-around pt-5 pb-3 space-y-2">
        {/* Online */}
        <div className="flex flex-col items-center justify-center">
          <Icon className="text-secondary text-6xl" icon="el:globe" />
          <h2 className="font-sans font-bold text-secondary text-3xl">
            ONLINE
          </h2>
          <h3 className="font-sans font-extralight text-primary text-center text-lg pl-5 pr-5">
            Access your virtual assets anytime and anywhere
          </h3>
        </div>
        {/* Secured */}
        <div className="flex flex-col items-center justify-center">
          <Icon
            className="text-secondary text-6xl"
            icon="wpf:security-checked"
          />
          <h2 className="font-sans font-bold text-secondary text-3xl">
            SECURED
          </h2>
          <h3 className="font-sans font-extralight text-primary text-center text-lg pl-5 pr-5">
            Applied Web 3 and Blockchain Technologies
          </h3>
        </div>
        {/* Fast */}
        <div className="flex flex-col items-center justify-center">
          <Icon className="text-secondary text-6xl" icon="el:globe" />
          <h2 className="font-sans font-bold text-secondary text-3xl">FAST</h2>
          <h3 className="font-sans font-extralight text-primary text-center text-lg pl-5 pr-5">
            Approved Financial Assistance within Minutes
          </h3>
        </div>
        {/* Low Interes */}
        <div className="flex flex-col items-center justify-center">
          <Icon className="text-secondary text-6xl" icon="el:globe" />
          <h2 className="font-sans font-bold text-secondary text-3xl">
            LOW INTEREST
          </h2>
          <h3 className="font-sans font-extralight text-primary text-center text-lg pl-5 pr-5">
            Easy payments that you can afford
          </h3>
        </div>
        {/* CTA Loan Now */}
        <button className="bg-white border-2 border-secondary font-sans font-semibold text-secondary p-2 rounded-xl hover:bg-secondary hover:border-primary hover:text-white">
          APPLY A LOAN NOW
        </button>
      </div>
    </div>
  );
}
