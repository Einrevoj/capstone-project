import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { auth, googleProvider } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import * as actionUser from "../../redux/actionUser";

export default function LoginAlt() {
  const [email, setEmail] = useState("");
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const { loginUserViaProvider } = bindActionCreators(
    actionUser,
    useDispatch()
  );

  const googleSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(googleProvider)
      .then((response) => {
        loginUserViaProvider(response?.additionalUserInfo.profile.email);
        localStorage.setItem("email", email);
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="flex flex-row items-center mt-3 md:mt-8">
      <h4 className="font-sans font-extralight text-white text-xl p-3">
        or Login Using
      </h4>
      <button
        className="group overflow-hidden h-12 rounded-lg flex items-center  hover:text-secondary font-sans font-medium text-xl text-white indent-2"
        onClick={googleSignIn}
      >
        <Icon className="text-4xl" icon="akar-icons:google-contained-fill" />
        Google Account
      </button>
    </div>
  );
}
