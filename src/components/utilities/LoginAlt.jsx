import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import { auth, googleProvider } from "../../firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";

export default function LoginAlt() {
  const provider = new GoogleAuthProvider();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const activeUser = useSelector((state) => state.activeUser);

  useEffect(() => {
    if (user || activeUser.googleSignIn) {
      // navigate home page
      navigate("/maindashboard");
    }
  });

  const googleSignIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(googleProvider).catch((error) => alert(error.message));
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
