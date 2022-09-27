import { Icon } from "@iconify/react";
import React from "react";
import logoImg from "../images/logo-white-orange.png";

export default function Footer() {
  return (
    // Main Container
    <div className="bg-primary w-full h-2/4">
      {/* Footer Container */}
      <div className="flex flex-col items-center justify-between font-sans text-white pt-5 pb-5 space-y-7 ">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center">
          <img className="h-12" src={logoImg} alt="logo" />
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-semibold text-xl">
              Virtual Asset Credit Cooperative
            </h1>
            <h3 className="font-extralight text-center text-sm pl-5 pr-5">
              Community Building, Enriching through Technology
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Contact Us */}
          <div className="flex flex-col items-center justify-center m-3">
            <h1 className="font-semibold text-xl">Contact Us</h1>
            <h3 className="font-extralight text-center text-sm pl-5 pr-5">
              (032) 7521-7000
            </h3>
            <h3 className="font-extralight text-center text-sm pl-5 pr-5">
              helpdesk@vaccoop.com
            </h3>
          </div>
          {/* Operating Hours */}
          <div className="flex flex-col items-center justify-center m-3">
            <h1 className="font-semibold text-xl">Operating Hours</h1>
            <h3 className="font-extralight text-center text-sm pl-5 pr-5">
              Monday - Friday 9:00 AM - 5:00 PM
            </h3>
            <h3 className="font-extralight text-center text-sm pl-5 pr-5">
              Saturday 10:00 AM - 4:00 PM
            </h3>
          </div>
          {/* Address */}
          <div className="flex flex-col items-center justify-center m-3">
            <h1 className="font-semibold text-xl">Address</h1>
            <h3 className="font-extralight text-center text-sm pl-5 pr-5">
              777 Wallstreet, Golden Village, Quezon City, Philippines
            </h3>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <a href="https://www.facebook.com/VirtualAssetCreditCooperative">
            <Icon className="text-3xl m-3" icon="akar-icons:facebook-fill" />
          </a>
          <a href="https://www.facebook.com/VirtualAssetCreditCooperative">
            <Icon className="text-4xl m-3" icon="ant-design:instagram-filled" />
          </a>
          <a href="https://www.facebook.com/VirtualAssetCreditCooperative">
            <Icon
              className="text-4xl m-3"
              icon="ant-design:twitter-circle-filled"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
