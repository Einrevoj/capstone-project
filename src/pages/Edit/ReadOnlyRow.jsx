import React from "react";
import { Icon } from "@iconify/react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <>
      {/* // Members Profile // Main Container */}
      <div className="w-full h-full flex flex-col items-center">
        {/* Contents Container */}
        <div className="w-full h-[55px] mt-4">
          <h2 className="flex flex-col items-center font-sans font-bold text-2xl text-primary text-center md:items-start">
            MEMBERS PROFILE
          </h2>
          <img className="w-full h-1" src="./images/hr-mv.png" alt="hr" />
        </div>
        <div className="w-full h-full flex flex-col  items-center justify-center md:flex-row md:items-start md:pl-7 md:pr-7 ">
          {/* Profile Details Section */}
          <div className="flex flex-col items-center justify-center">
            {/* Profile Photo and Name Section */}
            <div className="bg-secondary w-[280px] h-10 flex flex-row items-center justify-center rounded-t-2xl">
              <h2 className="font-sans font-medium text-white">
                Account Status:{" "}
                <span className="font-sans font-semibold text-lg">ACTIVE</span>
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center bg-primary w-[280px] pb-5 rounded-b-2xl">
              <img
                className="w-[120px] mt-5 mb-5"
                src="./images/img1.png"
                alt="profileImg"
              />
              <h3 className="font-sans font-bold text-white text-lg text-center">
                Garcia, Michael C.
              </h3>
              <h4 className="font-sans font-medium text-white text-base">
                Member Since:{" "}
                <span className="font-sans font-extralight text-white text-base">
                  September 17, 2017
                </span>
              </h4>
              <h4 className="font-sans font-medium text-white text-base">
                Account Type:{" "}
                <span className="font-sans font-extralight text-white text-base">
                  Individual
                </span>
              </h4>
            </div>
          </div>

          {/* End of Profile Details Section */}
          {/* Personal Details Section Container*/}
          <div className="flex flex-col items-center">
            <div>
              <div className="flex flex-col items-center  bg-primary bg-opacity-20 w-[280px] mt-5 pb-7 rounded-2xl md:w-[650px] md:mt-0 md:ml-7 md:mb-7">
                {/* Personal Details Section-Contents*/}
                <h2 className="flex items-center pl-5 w-full h-10 font-sans font-semibold text-secondary text-lg md:pl-5">
                  Personal Details
                </h2>

                <div className="w-full h-1 bg-primary" />
                {/* Email Input  */}
                <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
                  <label className="hidden md:flex" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="border border-primary rounded-lg md:w-2/3 h-9 placeholder:pl-4"
                    type="text"
                    placeholder={contact.email}
                  />
                </div>
                {/* End Input */}
                {/* Contact Input  */}
                <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
                  <label className="hidden md:flex" htmlFor="contact">
                    Contact Number
                  </label>
                  <input
                    className="border border-primary rounded-lg md:w-2/3 h-9 placeholder:pl-4"
                    type="text"
                    placeholder={contact.phoneNumber}
                  />
                </div>
                {/* End Input */}
                {/* Birthday Input  */}
                <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
                  <label className="hidden md:flex" htmlFor="birthday">
                    Birthday
                  </label>
                  <input
                    className="border border-primary rounded-lg md:w-2/3 h-9 placeholder:pl-4"
                    type="text"
                    placeholder={contact.dob}
                  />
                </div>
                {/* Address Input  */}
                <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
                  <label className="hidden md:flex" htmlFor="address">
                    Address
                  </label>
                  <input
                    className="border border-primary rounded-lg md:w-2/3 h-9 placeholder:pl-4"
                    type="text"
                    placeholder={contact.address}
                  />
                </div>
                {/* End Input */}
              </div>

              {/* Employment Details */}
              <div className="flex flex-col items-center  bg-primary bg-opacity-20 w-[280px] mt-5 pb-7 rounded-2xl md:w-[650px] md:mt-0 md:ml-7 md:mb-7">
                <h2 className="flex items-center pl-5 w-full h-10 font-sans font-semibold text-secondary text-lg md:pl-5">
                  Employment Details
                </h2>

                <div className="w-full h-1 bg-primary" />
                {/* Occupation Input  */}
                <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
                  <label className="hidden md:flex" htmlFor="occupation">
                    Occupation
                  </label>
                  <input
                    className="border border-primary rounded-lg md:w-2/3 h-9 placeholder:pl-4"
                    type="text"
                    placeholder={contact.occupation}
                  />
                </div>
                {/* End Input */}

                {/* Employer Input  */}
                <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
                  <label className="hidden md:flex" htmlFor="employer">
                    Employer
                  </label>
                  <input
                    className="border border-primary rounded-lg md:w-2/3 h-9 placeholder:pl-4"
                    type="text"
                    placeholder={contact.employer}
                  />
                </div>
                {/* End Input */}
                {/* Position Input  */}
                <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
                  <label className="hidden md:flex" htmlFor="position">
                    Position
                  </label>
                  <input
                    className="border border-primary rounded-lg md:w-2/3 h-9 placeholder:pl-4"
                    type="text"
                    placeholder={contact.position}
                  />
                </div>
                {/* End Input */}
              </div>
              <div className="flex flex-col items-end pb-7 rounded-2xl">
                <button
                  class="group overflow-hidden mt-4 px-6 h-12 rounded-lg flex items-center bg-secondary hover:bg-orange-600 md:mt-0"
                  onClick={(event) => handleEditClick(event, contact)}
                >
                  <Icon className="text-2xl text-white" icon="fa-solid:edit" />
                  <span class="font-sans font-medium text-xl text-white pl-1">
                    Edit Profile
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadOnlyRow;
