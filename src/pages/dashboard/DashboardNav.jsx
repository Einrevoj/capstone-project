import { Icon } from "@iconify/react";
import React from "react";
import { auth } from "../../firebase";
import * as actionUser from "./../../redux/actionUser";
import { bindActionCreators } from "redux";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function DashboardNav() {
  const { logoutUser } = bindActionCreators(actionUser, useDispatch());
  const navigate = useNavigate();
  const activeUser = useSelector((state) => state.activeUser);

  const logout = (e) => {
    e.preventDefault();
    auth.signOut();

    setTimeout(() => {
      logoutUser();
      navigate("/login");
    }, 1000);
  };

  return (
    // Nav Container

    <div className="bg-secondary flex flex-col items-end justify-center h-16">
      <div className="flex flex-row space-x-3 mr-10">
        {/* logout icon */}
        <button className="btn" onClick={logout}>
          <Icon className="btn-icon" icon="fa:sign-out" />
          <h2 className="btn-txt">Logout</h2>
        </button>
      </div>
    </div>
  );
}
