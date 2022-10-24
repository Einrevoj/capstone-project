import React from "react";
import logoImg from "../images/logo-white-orange.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
// import * as actionUser from "../redux/actionUser";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
// import OpenNavbarMobile from "./utilities/OpenNavbarMobile";

export default function NavBar() {
  const activeUser = useSelector((state) => state.activeUser);
  const [user] = useAuthState(auth);
  return (
    // Opened Menu Navbar - Mobile View
    // <OpenNavbarMobile />
    // Closed Menu Navbar - Mobile View
    // Navbar Container
    <div className="h-full w-full">
      {/* upper nav */}
      <div className="bg-primary w-full flex flex-row justify-between">
        <div className="flex flex-col items-center justify-between">
          {/* Logo */}
          <div className="flex flex-row m-4">
            <img className="h-12 " src={logoImg} alt="" />
            {/* Logo Text */}
            <div className="flex flex-col items-start font-sans text-white">
              <h2 className="hidden sm:flex ml-4">
                Virtual Asset Credit Cooperative
              </h2>
              <h3 className="hidden sm:flex  ml-4">
                Community Building, Enriching through Technology
              </h3>
            </div>
            {/* Logo Text Ends Here */}
          </div>
        </div>
        {/* Menu Icon Mobile Only - Default Hidden*/}

        {/* Messenger Support B */}
        <div className="hidden md:flex flex-col items-center justify-center mr-7 border-l-2 border-secondary">
          <div className="flex flex-row items-center justify-center space-x-3 pl-2">
            {/* msgr logo */}
            <Icon className="text-5xl text-white" icon="cib:messenger" />
            <div className="flex flex-col items-start justify-center font-sans text-white">
              <h2 className="font-semibold text-2xl">TALK TO US</h2>
              <h3 className="font-extralight text-xl">Available 24/7</h3>
            </div>
          </div>
        </div>
        <Icon
          className="text-secondary text-7xl mr-4 md:hidden"
          icon="charm:menu-hamburger"
        />
      </div>
      {/* end upper nav */}
      <div className="hidden bg-primary w-full md:flex flex-row justify-between border-t-2 border-secondary pt-3 pb-3">
        {user || activeUser.email ? (
          <>
            <ul className="flex flex-row items-center justify-around w-full h-full font-sans font-semibold text-white text-lg tracking-wider">
              <Link to="/">
                <li className="hover:text-secondary">HOME</li>
              </Link>
              <a href="#about">
                <li className="hover:text-secondary">ABOUT US</li>
              </a>
              <Link to="/memberdashboard">
                <li className="hover:text-secondary">MEMBERSHIP</li>
              </Link>
              <li className="hover:text-secondary">INVESTMENT</li>
              <a
                href={
                  "https://drive.google.com/file/d/10qKwnSTdabrrN5bv46NSYde0ueQY9eLj/view?usp=sharing"
                }
                target="_blank"
              >
                <li className="hover:text-secondary">FORMS</li>
              </a>
            </ul>
          </>
        ) : (
          <ul className="flex flex-row items-center justify-around w-full h-full font-sans font-semibold text-white text-lg tracking-wider">
            <Link to="/">
              <li className="hover:text-secondary">HOME</li>
            </Link>
            <a href="#about">
              <li className="hover:text-secondary">ABOUT US</li>
            </a>

            <li className="hover:text-secondary">INVESTMENT</li>

            <a
              href={
                "https://drive.google.com/file/d/10qKwnSTdabrrN5bv46NSYde0ueQY9eLj/view?usp=sharing"
              }
              target="_blank"
            >
              <li className="hover:text-secondary">FORMS</li>
            </a>
          </ul>
        )}
      </div>
    </div>
  );
}
