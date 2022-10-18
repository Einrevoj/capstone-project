import React from "react";
import { Icon } from "@iconify/react";
import logoImg from "../../../images/logo-white-orange.png";
import { Link } from "react-router-dom";
import { useState } from "react";

// import { Icon } from "@iconify/react";
// import logoImg from "../images/logo-white-orange.png";

export default function AdminSidebar() {
  const [open, setOpen] = useState(true);
  return (
    // SidePanel Menu / Mobile Menu
    <>
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
              Community Building, Enriching <br />
              through Technology
            </h4>
          </div>
          {/* End of Logo */}

          <div className="flex flex-col items-center w-[300px]">
            {/* Home */}

            <Link to="/admindashboard">
              <button className="sidebar-btn">
                <Icon
                  className="sidebar-icon text-[110px]"
                  icon="dashicons:admin-home"
                />
                <h2 className="sidebar-txt text-base">Dashboard</h2>
              </button>
            </Link>

            {/* Wallet */}
            <Link to="/vacdashboard" className="mr-6">
              <button className="sidebar-btn">
                <Icon
                  className="sidebar-icon text-[80px]"
                  icon="clarity:wallet-solid"
                />
                <h2 className="sidebar-txt text-base text-start">VAC Wallet</h2>
              </button>
            </Link>
            {/* Members */}
            <Link to="/adminmembers" className="mr-4">
              <button className="sidebar-btn">
                <Icon className="sidebar-icon text-[90px]" icon="fa:group" />
                <h2 className="sidebar-txt text-base">Members</h2>
              </button>
            </Link>
            {/* Confirm Transactions */}
            <Link to="/confirmtransaction" className="ml-4">
              <button className="sidebar-btn">
                <Icon
                  className="sidebar-icon text-[50px]"
                  icon="bi:clipboard-check-fill"
                />

                <h2 className="sidebar-txt text-base text-start">
                  Confirm Transactions
                </h2>
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
