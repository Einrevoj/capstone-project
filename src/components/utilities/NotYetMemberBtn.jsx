import React from "react";
import { Link } from "react-router-dom";

export default function NotYetMemberBtn() {
  return (
    <div className="flex flex-col items-center justify-center content-center p-2">
      <h1 className="font-sans font-light text-white text-2xl">
        Not yet a Member?
      </h1>
      <Link to="/register">
        <button className="font-sans font-bold text-white hover:text-secondary text-2xl">
          Register Here.
        </button>
      </Link>
    </div>
  );
}
