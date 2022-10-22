import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as actionExpense from "../../../redux/actionExpense";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

export default function ReportExpense() {
  const [reportExpense, setReportExpense] = useState([]);
  const { getAllReportExpense } = bindActionCreators(
    actionExpense,
    useDispatch()
  );
  const navigate = useNavigate();

  useEffect(() => {
    getAllReportExpense().then((response) => {
      setReportExpense(response ? response.payload : []);
    });
  }, []);

  const renderReportExpense = () => {
    return reportExpense?.map((reportExpense) => (
      <form action="">
        <h2 className="flex justify-end pr-5 pl-5 w-full h-10 font-sans font-semibold text-blue-900 text-lg md:pl-5">
          Report Expense
        </h2>

        {/* Expense Input  */}
        <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
          <label className="hidden md:flex">Expense From</label>
          <input
            className="border border-primary rounded-lg md:w-2/3 h-9 placeholder:pl-4 text-right pr-5"
            type="text"
            placeholder={reportExpense.expenseFrom}
          />
        </div>
        {/* End Input */}
        {/* Amount Input  */}
        <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
          <label className="hidden md:flex">Amount</label>
          <input
            className="border border-primary rounded-lg md:w-2/3 h-9 placeholder:pl-4 text-right"
            type="number"
            placeholder={reportExpense.amount}
          />
        </div>
        {/* End Input */}
        {/* Withdrawn Input  */}
        <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
          <label className="hidden md:flex">Withdrawn From</label>
          <input
            className="border border-primary rounded-lg md:w-2/3 h-9 placeholder:pl-4 text-right pr-5"
            type="text"
            placeholder={reportExpense.withdrawnFrom}
          />
        </div>
        {/* End Input */}
        {/* Account number Input  */}
        <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
          <label className="hidden md:flex">Acount Number</label>
          <input
            className="border border-primary rounded-lg md:w-2/3 h-9 placeholder:pl-4 text-right"
            type="number"
            placeholder={reportExpense.accountNumber}
          />
        </div>
        {/* End Input */}

        {/* Proof Input  */}
        <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
          <label className="hidden md:flex">Proof of Transaction</label>
          <input
            className="border border-primary rounded-lg md:w-2/3 h-9 placeholder:pl-4 text-right pr-5"
            type="text"
            placeholder={reportExpense.proofTrans}
          />
        </div>
        {/* End Input */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="w-1/4 m-5 inline-block px-6 py-2.5 bg-blue-900 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Confirm
          </button>
        </div>
      </form>
    ));
  };

  return (
    <>
      <div id="reportexpense">
        <div className="container py-5">
          <div className="relative flex flex-wrap items-center justify-between px-2 py-3">
            <div className="relative">
              <h3 className="font-bold text-blue-900 text-2xl">
                Report Expense
              </h3>
            </div>
          </div>
          <div className="row py-4">{renderReportExpense()}</div>
        </div>
      </div>
    </>
  );
}
