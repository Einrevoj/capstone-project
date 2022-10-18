import React, { useState } from "react";
import { Link } from "react-router-dom";
import hrImg from "../images/hr-mv.png";
import logoImg from "../images/logo-white-orange.png";
import { registerUser } from "../redux/actionUser";

import AlreadyMemberBtn from "../components/utilities/AlreadyMemberBtn";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Validation
  const [invalidFirstName, setInvalidFirstName] = useState(false);
  const [invalidMiddleName, setInvalidMiddleName] = useState(false);
  const [invalidLastName, setInvalidLastName] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const checkIfValid = () => {
    let isValid = true;

    // Check if password is same with confirmPassword
    if (password !== confirmPassword || !password) {
      setInvalidPassword(true);
      isValid = false;
    } else {
      setInvalidPassword(false);
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkIfValid()) {
      //Call back API
      registerUser({
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        email: email,
        password: password,
      })
        .then((response) => {
          console.log(response, "response");
          setInvalidFirstName(false);
          setShowModal(true);
        })
        .catch((error) => {
          setInvalidFirstName(true);
          console.log(error, "error");
        })
        .then((response) => {
          console.log(response, "response");
          setInvalidMiddleName(false);
          setShowModal(true);
        })
        .catch((error) => {
          setInvalidMiddleName(true);
          console.log(error, "error");
        })
        .then((response) => {
          console.log(response, "response");
          setInvalidLastName(false);
          setShowModal(true);
        })
        .catch((error) => {
          setInvalidLastName(true);
          console.log(error, "error");
        })
        .then((response) => {
          console.log(response, "response");
          setInvalidEmail(false);
          setShowModal(true);
        })
        .catch((error) => {
          setInvalidEmail(true);
          console.log(error, "error");
        });
    }
  };

  const closeRegistration = () => {
    setShowModal(false);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  return (
    // main container
    <div className="w-full h-screen flex items-center justify-center fixed bg-regImg bg-cover">
      {/* registration form container */}
      <div className=" bg-primary h-screen w-full sm:m-4 sm:max-w-[770px] sm:max-h-[620px]  sm:rounded-3xl sm:shadow-lg md:shadow-gray-600">
        {/* form starts here */}
        <form className="w-full mt-10 sm:mt-7" onSubmit={handleSubmit}>
          {/* Logo */}
          <div className="flex flex-col items-center justify-center m-4 md:flex-row">
            <Link to="/">
              <img className="h-16  md:h-24" src={logoImg} alt="" />
            </Link>

            <div className="flex flex-col items-center md:space-x-2">
              <h2 className="font-sans font-bold text-white text-center text-lg md:text-xl">
                Virtual Assest Credit Cooperative
              </h2>
              <h4 className="font-sans font-extralight text-white text-center text-3xl">
                BECOME A NEW MEMBER
              </h4>
            </div>
          </div>
          {/* End of Logo */}
          <img className="w-full h-1" src={hrImg} alt="hr" />
          {/* Inputs Starts Here */}
          <div className="flex flex-col ml-5 mr-5  ">
            {/* First Name */}
            <div className="flex flex-row  mt-4 justify-between ">
              <label
                className="hidden font-sans font-regular text-white text-center md:flex md:text-3xl"
                htmlFor="firstname"
              >
                First Name
              </label>

              <input
                className="h-12 w-full md:max-w-md  rounded-lg placeholder:text-3xl placeholder:opacity-60 placeholder:pl-4 text-2xl pl-5"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                isInvalid={invalidFirstName}
              />
            </div>

            {/* Middle Name */}
            <div className="flex flex-row mt-4 justify-between">
              <label
                className="hidden font-sans font-regular text-white text-center md:flex md:text-3xl"
                htmlFor="middlename"
              >
                Middle Name
              </label>
              <input
                className="h-12 w-full md:max-w-md rounded-lg placeholder:text-3xl placeholder:opacity-60 placeholder:pl-4 text-2xl pl-5"
                type="text"
                placeholder="Middle Name"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                isInvalid={invalidMiddleName}
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-row justify-between mt-4">
              <label
                className="hidden font-sans font-regular text-white text-center md:flex md:text-3xl"
                htmlFor="lastname"
              >
                Last Name
              </label>
              <input
                className="h-12 w-full md:max-w-md rounded-lg placeholder:text-3xl placeholder:opacity-60 placeholder:pl-4 text-2xl pl-5"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                isInvalid={invalidLastName}
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-row justify-between mt-4">
              <label
                className="hidden font-sans font-regular text-white text-center md:flex md:text-3xl"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="h-12 w-full md:max-w-md rounded-lg placeholder:text-3xl placeholder:opacity-60 placeholder:pl-4 text-2xl pl-5"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={invalidEmail}
              />
            </div>

            {/* Password */}
            <div className="flex flex-row justify-between mt-4">
              <label
                className="hidden font-sans font-regular text-white text-center md:flex md:text-3xl"
                htmlFor="password"
              >
                Password
              </label>
              <input
               className="h-12 w-full md:max-w-md rounded-lg placeholder:text-3xl placeholder:opacity-60 placeholder:pl-4 text-2xl pl-5"
               type="password"
               placeholder="Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               isInvalid={invalidPassword}
              />
            </div>

            {/* Confirm Password */}
            <div className="flex flex-row justify-between items-center  mt-4 ">
              <label
                className="hidden font-sans font-regular text-white text-center md:flex md:text-3xl"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
               className="h-12 w-full md:max-w-md rounded-lg placeholder:text-3xl placeholder:opacity-60 placeholder:pl-4 text-2xl pl-5"
               type="password"
               placeholder="Confirm Password"
               value={confirmPassword}
               onChange={(e) => setConfirmPassword(e.target.value)}
               isInvalid={invalidPassword}
              />
            </div>
            {/* Inputs Ends Here */}
            <div className="w-full flex flex-row justify-end space-x-5">
              <AlreadyMemberBtn />
              <button class="group overflow-hidden mt-4 px-6 h-12 rounded-lg flex items-center bg-secondary hover:bg-orange-600">
                <span class="font-sans font-medium text-xl text-white pl-1">
                  Create Account
                </span>
              </button>
            </div>
          </div>
        </form>
        {/* End of Form here */}
      </div>
      {/* end of form container */}
    </div>
    // end main container
  );
}
