import React from "react";
import AdminMembersStats from "./AdminMembersStats";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import MembersList from "./MembersList";

export default function AdminMembers() {
  return (
    <div>
      <div className="flex w-screen h-screen">
        <div className="bg-primary  h-full">
          <AdminSidebar />
        </div>
        <div className="w-screen h-full overflow-scroll">
          <AdminNavbar />
          <div>
            <AdminMembersStats />
            <MembersList />
          </div>
        </div>
      </div>
    </div>
  );
}
