import React from "react";
import { Icon } from "@iconify/react";
import logoImg from "../../images/logo-white-orange.png";
import { Link } from "react-router-dom";
import { useState } from "react";

// import { Icon } from "@iconify/react";
// import logoImg from "../images/logo-white-orange.png";

export default function SidePanel() {
  const [open, setOpen] = useState(true);
  return (
    // SidePanel Menu / Mobile Menu
    <>
      {" "}
      {!open ? (
        <Icon
          icon="cil:hamburger-menu"
          className="text-white text-4xl"
          onClick={() => setOpen(!open)}
        />
      ) : (
        <div className="h-full flex flex-col items-center pt-5">
          {/* Arrows */}
          <button className="absolute self-end ml-2 mr-4">
            <Icon
              className=" text-3xl text-white hover:text-secondary"
              icon="bi:arrow-left-square-fill"
              onClick={() => setOpen(!open)}
            />
          </button>
          {/* Logo */}
          <div className="flex flex-col items-center mb-4">
            <img className="h-10" src={logoImg} alt="" />
            <h2 className="font-sans font-semibold text-white text-center text-md">
              Virtual Assest Credit Cooperative
            </h2>
            <h4 className="font-sans font-extralight text-white text-center text-xs">
              Community Building, Enriching through Technology
            </h4>
          </div>
          {/* End of Logo */}

          <div className="flex flex-col items-center w-[300px]">
            {/* Home */}
            <Link to="/">
              <button className="sidebar-btn ">
                <Icon
                  className="sidebar-icon text-[110px]"
                  icon="dashicons:admin-home"
                />
                <h2 className="sidebar-txt">Home</h2>
              </button>
            </Link>
            {/* Wallet */}
            <button className="sidebar-btn">
              <Icon
                className="sidebar-icon text-[55px]"
                icon="clarity:wallet-solid"
              />
              <h2 className="sidebar-txt">Wallet</h2>
            </button>
            {/* Activities */}
            <button className="sidebar-btn">
              <Icon
                className="sidebar-icon text-[57px]"
                icon="mdi:calendar-clock"
              />
              <h2 className="sidebar-txt">Activities</h2>
            </button>
            {/* Downloadable Forms */}
            <button className="sidebar-btn">
              <Icon
                className="sidebar-icon text-[60px]"
                icon="fluent:document-arrow-down-20-filled"
              />
              <h2 className="sidebar-txt">Forms</h2>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
