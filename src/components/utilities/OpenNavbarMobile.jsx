import React from "react";
import logoImg from "../../images/logo-white-orange.png";
import { Icon } from "@iconify/react";

export default function OpenNavbarMobile() {
  return (
    // Opened NavMenu on Mobile View
    // Main Container
    <div className="md:hidden h-screen w-full bg-primary flex flex-col items-center justify-start">
      {/* Logo */}
      {/* Logo Container */}
      <div className="flex flex-col items-center w-full mt-7">
        <img className="h-12" src={logoImg} alt="logo_img" />
        <h2 className="font-sans font-semibold text-xl text-white text-center">
          Virtual Assets Credit Cooperative
        </h2>
        <h3 className="font-sans font-extralight text-md text-white text-center w-2/3">
          Community Building, Enriching through Technology
        </h3>
      </div>
      {/* HR */}
      <div className="bg-secondary h-2 w-full mt-4" />
      {/* Menu Text */}
      <ul className="flex flex-col items-center justify-center w-full h-full font-sans font-semibold text-white text-4xl tracking-wider space-y-3">
        <li className="hover:text-secondary">HOME</li>
        <li className="hover:text-secondary">ABOUT US</li>
        <li className="hover:text-secondary">MEMBERSHIP</li>
        <li className="hover:text-secondary">INVESTMENT</li>
        <li className="hover:text-secondary">LOANS</li>
        <li className="hover:text-secondary">FORMS</li>
      </ul>
      {/* HR */}
      {/* This must redirect to FB Messenger of VAC Coop it can be a botton or href */}
      <div className="bg-secondary h-2 w-full mt-4" />
      {/* Messenger Support */}
      <div className="flex flex-col items-center justify-center mt-5 mb-5">
        <div className="flex flex-row items-center justify-center space-x-3">
          {/* msgr logo */}
          <Icon className="text-6xl text-white" icon="cib:messenger" />
          <div className="flex flex-col items-start justify-center font-sans text-white">
            <h2 className="font-semibold text-3xl">TALK TO US</h2>
            <h3 className="font-extralight text-2xl">Available 24/7</h3>
          </div>
        </div>
      </div>
      {/* End of Messenger Support */}
      {/* HR */}
      <div className="bg-secondary h-2 w-full mt-4" />
    </div>
  );
}
