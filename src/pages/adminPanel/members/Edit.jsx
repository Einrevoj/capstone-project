import React from "react";
import AdminNavbar from "../AdminNavbar";
import AdminSidebar from "../AdminSidebar";
import Transaction from "../Transaction";
import MembersEdit from "./MembersEdit";

export default function Edit() {
  return (
    <div>
      <div className="flex w-screen h-screen">
        <div className="bg-primary  h-full">
          <AdminSidebar />
        </div>
        <div className="w-screen h-full overflow-scroll">
          <AdminNavbar />
          <div>
            <MembersEdit />
            <Transaction />
          </div>
        </div>
      </div>
    </div>
  );
}
