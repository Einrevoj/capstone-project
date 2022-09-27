import React from "react";
import Hero from "../components/sections/Hero";
import AboutUs from "../components/sections/AboutUs";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import HeroIcons from "../components/sections/HeroIcons";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <HeroIcons />
      <AboutUs />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}
