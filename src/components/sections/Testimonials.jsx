import React from "react";
import socialsImg from "../../images/SocialMedia.webp";
import clientImg from "../../images/client_01.png";

export default function Testimonials() {
  return (
    // Main Container
    <div className="">
      <div className="w-full h-screen bg-white relative sm:h-[450px]">
        <img
          className="absolute object-cover mix-blend-multiply opacity-30 w-full h-full "
          src={socialsImg}
          alt="social_img"
        />
        <h1 className="relative font-sans font-bold text-4xl text-primary text-center p-7">
          What They Say About Us
        </h1>
        {/* testimonial container */}
        <div className="relative flex flex-col items-center justify-center md:flex-row ">
          <img className="h-32" src={clientImg} alt="client_01" />
          <div className="flex flex-col items-center text-center h">
            <p className="font-sans font-light text-primary text-2xl text-center p-5 max-w-2xl">
              “VAC Coop worked extensively with me to help me anticipate some of
              the issues that my business may face. Not many lenders would go to
              that length. They’ve been extremely supportive and a great
              resource.”
            </p>
            <h2 className="font-sans font-bold text-2xl text-primary text-center">
              -Jessy Mayaman
            </h2>
            <h3 className="font-sans font-light text-md text-primary text-center">
              Member Since 2013
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
