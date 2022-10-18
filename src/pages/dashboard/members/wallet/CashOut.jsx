import React from "react";
import { Icon } from "@iconify/react";

import MemberTransactions from "../MemberTransactions";
import DashboardNav from "../../DashboardNav";
import MemberSidePanel from "../MemberSidePanel";

export default function CashOut() {
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
            <div className="w-full h-full flex flex-col items-center">
              {/* Contents Container */}
              <div className="w-full h-full flex flex-col  items-center justify-center mt-7 md:flex-row md:items-start">
                <div className="flex flex-col">
                  {/* Cash In Stats */}
                  <div className="stat-card mt-0">
                    {/* Icon - Title */}
                    <div className="flex flex-row items-center">
                      <Icon className="stat-icon" icon="mdi:cash-plus" />
                      <h2 className="stat-title">Total Cash-Out</h2>
                    </div>
                    {/* End Icon - Title */}
                    {/* Main Text */}
                    <h1 className="stat-figure">57,500.00</h1>
                    {/* Button */}
                    <button className="stat-btn">Cash Out Now</button>
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
                        Initial Cash-Out Date
                      </label>
                      <input
                        className="border border-primary rounded-lg md:w-80 h-9 placeholder:pl-4 disabled:bg-white"
                        type="text"
                        placeholder="Initial Cash-Out Date"
                        disabled
                      />
                    </div>

                    <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
                      <label
                        className="hidden md:flex"
                        htmlFor="lastest_cashIn"
                      >
                        Latest Cash-Out Date
                      </label>
                      <input
                        className="border border-primary rounded-lg md:w-80 h-9 placeholder:pl-4 disabled:bg-white"
                        type="text"
                        placeholder="Latest Cash-Out Date"
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
                      <label className="hidden md:flex" htmlFor="total_cashout">
                        Total Cash-Out
                      </label>
                      <input
                        className="border border-primary rounded-lg md:w-80 h-9 placeholder:pl-4 disabled:bg-white"
                        type="text"
                        placeholder="Total Cash-Out"
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Filter this table operation = cashout */}
            <MemberTransactions />
          </div>
        </div>
      </div>
    </div>
  );
}
