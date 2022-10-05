import React, { useState } from "react";
import aboutusImg from "../../images/team-celebrate.jpg";
import aboutusBoxedImg from "../../images/teamceleb-boxed.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function AboutUs() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <div
        id="about"
        className="bg-subOne h-screen w-full flex flex-col items-center justify-center text-center font-sans text-primary relative "
      >
        <img
          className="absolute object-cover h-full w-full mix-blend-multiply opacity-10 sm:hidden"
          src={aboutusImg}
          alt=""
        />
        {/* About Us Container */}
        <div className="md:flex md:flex-row md:items-center md:justify-between max-w-[850px] pl-5 pr-5">
          {/* Image Container */}

          <img
            className="hidden md:flex h-[200px] p-4"
            src={aboutusBoxedImg}
            alt=""
          />

          <div className="flex flex-col items-center justify-center mt-4 md:items-start md:justify-center ">
            <h1 className="font-semibold text-3xl">About Us</h1>
            <p className="font-normal text-lg text-justify">
              Virtual Assets Credit Cooperative (VACC) was established by groups
              of professionals such as certified public accountants, lawyers,
              educators, businessmen, law enforcement officers, web developers,
              and others with one common goal to extend help by providing
              credits/loans for uplifting lives thru innovation and technology
            </p>
          </div>
        </div>
        <div className="flex flex-col max-2/3 w-full items-center justify-around p-4 space-y-4 md:flex-row  md:space-y-0 md:space-x-4">
          {/* Mission */}
          <div className="w-full h-full relative bg-slate-50 border-4 border-secondary rounded-xl p-3">
            <h1 className="font-semibold text-2xl">Mission</h1>
            <p>
              To be one of a kind Cooperative utilizing technology offering
              financial assistance to its member in uplifting and improving
              their lives.
            </p>
          </div>

          {/* Vision */}
          <div className="w-full h-full relative bg-slate-50 border-4 border-primary rounded-xl p-3">
            <h1 className="font-semibold text-2xl">Vision</h1>
            <p>
              Become the leading community in achieving success through
              financial literacy, technological innovations and camaraderie.
            </p>
          </div>
        </div>
      </div>

      <div className="counter grid grid-cols-3">
        <div className="text-center">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <h1 className="text-white text-4xl">
              {counterOn && (
                <CountUp start={0} end={15324} duration={2} delay={0} />
              )}
              <span id="count1"></span>+
            </h1>
            <p className="text-white">Total Members</p>
          </ScrollTrigger>
        </div>
        <div className="text-center">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <h1 className="text-white text-4xl">
              {counterOn && (
                <CountUp start={0} end={14224} duration={2} delay={0} />
              )}
              <span id="count2"></span>+
            </h1>
            <p className="text-white">Total Active Members</p>
          </ScrollTrigger>
        </div>
        <div className="text-center ">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <h1 className="text-white text-4xl">
              {counterOn && (
                <CountUp start={0} end={1100} duration={2} delay={0} />
              )}
              <span id="count3"></span>+
            </h1>
            <p className="text-white text-lg">Total Inactive Members</p>
          </ScrollTrigger>
        </div>
      </div>
    </>
  );
}
