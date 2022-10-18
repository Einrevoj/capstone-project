import React from "react";
import { Icon } from "@iconify/react";

import MemberTransactions from "../MemberTransactions";
import DashboardNav from "../../DashboardNav";
import MemberSidePanel from "../MemberSidePanel";

export default function CashIn() {
  return (
    // Main Container FullPage
    <div>
      <div className="flex w-screen h-screen">
        <div className="bg-primary  h-full">
          <MemberSidePanel />
        </div>
        <div className="w-screen h-full overflow-scroll">
          <DashboardNav />

          <div>
            {/* // Main Container */}
            <div className="w-full h-full flex flex-col items-center">
              {/* Contents Container */}
              <div className="w-full h-full flex flex-col  items-center justify-center mt-7 md:flex-row md:items-start">
                <div className="flex flex-col">
                  {/* Cash In Stats */}
                  <div className="stat-card mt-0">
                    {/* Icon - Title */}
                    <div className="flex flex-row items-center">
                      <Icon className="stat-icon" icon="mdi:cash-plus" />
                      <h2 className="stat-title">Cash Balance</h2>
                    </div>
                    {/* End Icon - Title */}
                    {/* Main Text */}
                    <h1 className="stat-figure">35,557.00</h1>
                    {/* Button */}
                    <button className="stat-btn">Cash In Now</button>
                  </div>
                  {/* End Cash In Stats */}
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex flex-col items-center  bg-primary bg-opacity-20 w-[280px]  pb-7 rounded-2xl md:w-[650px] md:mt-0 md:ml-7 md:mb-7">
                    <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
                      <label
                        className="hidden md:flex"
                        htmlFor="initial_cashIn"
                      >
                        Initial Cash-In Date
                      </label>
                      <input
                        className="border border-primary rounded-lg md:w-80 h-9 placeholder:pl-4 disabled:bg-white"
                        type="text"
                        placeholder="Initial Cash-In Date"
                        disabled
                      />
                    </div>

                    <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
                      <label
                        className="hidden md:flex"
                        htmlFor="lastest_cashIn"
                      >
                        Latest Cash-In Date
                      </label>
                      <input
                        className="border border-primary rounded-lg md:w-80 h-9 placeholder:pl-4 disabled:bg-white"
                        type="text"
                        placeholder="Latest Cash-In Date"
                        disabled
                      />
                    </div>

                    <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
                      <label
                        className="hidden md:flex"
                        htmlFor="total_transactions"
                      >
                        Total No. of Transactions
                      </label>
                      <input
                        className="border border-primary rounded-lg md:w-80 h-9 placeholder:pl-4 disabled:bg-white"
                        type="text"
                        placeholder="Total No. of Transactions"
                        disabled
                      />
                    </div>

                    <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
                      <label className="hidden md:flex" htmlFor="total_earned">
                        Total Earned Dividends
                      </label>
                      <input
                        className="border border-primary rounded-lg md:w-80 h-9 placeholder:pl-4 disabled:bg-white"
                        type="text"
                        placeholder="Total Earned Dividends"
                        disabled
                      />
                    </div>
                    <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
                      <label className="hidden md:flex" htmlFor="total_cashIn">
                        Total Cash-In
                      </label>
                      <input
                        className="border border-primary rounded-lg md:w-80 h-9 placeholder:pl-4 disabled:bg-white"
                        type="text"
                        placeholder="Total Cash-In"
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Filter this table operation = cashin */}
            <MemberTransactions />
          </div>
        </div>
      </div>
    </div>
  );
}
