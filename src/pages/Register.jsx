import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import hrImg from "../images/hr-mv.png";
import logoImg from "../images/logo-white-orange.png";
import { useDispatch } from "react-redux";
import * as actionUser from "../redux/actionUser";
import { auth } from "../firebase";
import { bindActionCreators } from "redux";

import AlreadyMemberBtn from "../components/utilities/AlreadyMemberBtn";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Validation

  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const navigate = useNavigate();
  const { registerUser } = bindActionCreators(actionUser, useDispatch());
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user || localStorage.email) {
      navigate("/");
    }
  });

  const checkIfValid = () => {
    let isValid = true;

    // Check if password is same with confirmPassword
    if (password !== !password) {
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
        email: email,
        password: password,
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
