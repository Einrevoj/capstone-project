import React from "react";
import { Icon } from "@iconify/react";
import logoImg from "../../../images/logo-white-orange.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// import { Icon } from "@iconify/react";
// import logoImg from "../images/logo-white-orange.png";

export default function SidePanel() {
  const [open, setOpen] = useState(true);

  const navigate = useNavigate();

  const navToDash = () => {
    navigate("/memberdashboard");
  };
  const navToWallet = () => {
    navigate("/memberwallet");
  };

  return (
    // SidePanel Menu / Mobile Menu
    <>
      {" "}
      {!open ? (
        <Icon
          icon="bi:arrow-right-square-fill"
          className="text-white hover:text-secondary text-4xl m-3"
          onClick={() => setOpen(!open)}
        />
      ) : (
        <div className="h-full flex flex-col items-center pt-5">
          {/* Arrows */}
          <button className="absolute self-end ml-2 mr-4">
            <Icon
              className="text-4xl text-white hover:text-secondary"
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

            <button onClick={navToDash} className="sidebar-btn ">
              <Icon
                className="sidebar-icon text-[55px]"
                icon="dashicons:admin-home"
              />
              <p className="sidebar-txt">Home</p>
            </button>

            {/* Wallet */}
            <button onClick={navToWallet} className="sidebar-btn">
              <Icon
                className="sidebar-icon text-[50px]"
                icon="clarity:wallet-solid"
              />
              <h2 className="sidebar-txt">Wallet</h2>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
