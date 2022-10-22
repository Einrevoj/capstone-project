import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExpenseAdmin from "./ExpenseAdmin";
import IncomeAdmin from "./IncomeAdmin";
import InvestmentAdmin from "./InvestmentAdmin";
import MemberListAdmin from "./MemberListAdmin";

export default function Admin() {
  const navigate = useNavigate();

  //   useEffect(() => {
  //     if (localStorage.email !== "admin@admin.com") {
  //       navigate("/");
  //     }
  //   }, [navigate]);

  //   if (localStorage.email !== "admin@admin.com") {
  //     return;
  //   }

  return (
    <div className="admin">
      <div className="content">
        <h3>MemberList</h3>
        <MemberListAdmin />
        <br />
        <br />
        <h3>Profile</h3>
        <br />
        <br />
        <h3>Transaction</h3>
        <br />
        <br />
        <h3>Income</h3>
        <IncomeAdmin />
        <br />
        <br />
        <h3>Expense</h3>
        <ExpenseAdmin />
        <br />
        <br />
        <h3>Investment</h3>
        <InvestmentAdmin />
        <br />
        <br />
        <h3>Confirm</h3>
      </div>
    </div>
  );
}
