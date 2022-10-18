import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../images/logo-white-orange.png";

export default function LogoHomeBtn() {
  return (
    <Link to="/">
      <div className="flex flex-col items-center mb-4">
        <img className="h-16 mt-2" src={logoImg} alt="" />
        <h2 className="font-sans font-bold text-white text-center">
          Virtual Assest Credit Cooperative
        </h2>
        <h4 className="font-sans font-extralight text-white text-center">
          Community Building, Enriching through Technology
        </h4>
      </div>
    </Link>
  );
}
