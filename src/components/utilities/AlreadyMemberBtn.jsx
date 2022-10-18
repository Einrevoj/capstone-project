import React from "react";
import { Link } from "react-router-dom";

export default function AlreadyMemberBtn() {
  return (
    <div className="flex flex-col items-center justify-center content-center p-2">
      <h1 className="font-sans font-light text-white text-2xl">
        Already a Member?
      </h1>
      <Link
        to="/login"
        className="font-sans font-bold text-white hover:text-secondary text-2xl"
      >
        Login Here.
      </Link>
    </div>
  );
}
