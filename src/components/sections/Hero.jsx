import React from "react";
import heroImg from "../../images/heroImg.jpg";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div>
      {/* // Hero Container */}
      <div className="w-full h-screen bg-slate-400 relative sm:h-[450px] md:bg-white">
        <img
          className="absolute object-cover mix-blend-screen opacity-70 w-full h-full md:opacity-65 md:mix-blend-normal"
          src={heroImg}
          alt=""
        />
        {/* Content Container */}
        <div className="h-full w-full relative flex flex-col items-center justify-center md:items-start">
          {/* Big Word - Campaign Message */}
          <h1 className="font-sans font-bold text-primary text-5xl text-center pr-4 pl-4 md:text-start md:grid md:grid-cols-2">
            YOUR FINANCIAL REVOLUTION IS HERE.
          </h1>
          {/* Supporting Paragraph - Action Message */}
          <h2 className="font-sans font-extralight text-primary text-3xl text-center pr-4 pl-4 mt-2 md:text-startmd:grid md:grid-cols-2 md:text-2xl">
            Growing virtual assets like never before.
          </h2>
          {/* CTA Buttons */}
          <div className="flex flex-row items-center justify-center mt-2 space-x-3 pr-4 pl-4">
            <Link to="/register">
              <button class="group overflow-hidden mt-4 px-6 h-12 rounded-2xl flex items-center bg-secondary hover:bg-orange-600">
                <span class="font-sans font-medium text-xl text-white pl-1">
                  JOIN NOW
                </span>
              </button>
            </Link>
            <Link to="/login">
              <button class="group overflow-hidden mt-4 px-6 h-12 rounded-2xl flex items-center bg-white border-2 border-secondary hover:bg-primary hover:bg-opacity-90">
                <Icon
                  className="text-2xl text-secondary "
                  icon="entypo:login"
                />
                <span class="font-sans font-medium text-xl text-secondary pl-1">
                  LOGIN
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
