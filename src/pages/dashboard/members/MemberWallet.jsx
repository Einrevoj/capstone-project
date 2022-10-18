import React from "react";

import DashboardNav from "../DashboardNav";
import MemberSidePanel from "../members/MemberSidePanel";
import MemberStats from "../members/MemberStat";
import MemberTransactions from "./MemberTransactions";

import { Icon } from "@iconify/react";

export default function MemberWallet() {
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
            <MemberStats />
            <div className="h-5 w-full ml-5 flex row space-x-5 mt-3">
              <button class="mt-4 px-6 h-12 rounded-lg flex items-center bg-secondary hover:bg-primary md:mt-0">
                <Icon className="text-5xl text-white" icon="mdi:cash-plus" />
                <span class="font-sans font-medium text-xl text-white pl-1">
                  Cash In
                </span>
              </button>
              <button class="mt-4 px-6 h-12 rounded-lg flex items-center bg-secondary hover:bg-primary md:mt-0">
                <Icon className="text-5xl text-white" icon="mdi:cash-minus" />
                <span class="font-sans font-medium text-xl text-white pl-1">
                  Cash Out
                </span>
              </button>
              <button class="mt-4 px-6 h-12 rounded-lg flex items-center bg-secondary hover:bg-primary md:mt-0">
                <Icon className="text-3xl text-white" icon="bxs:bank" />
                <span class="font-sans font-medium text-xl text-white pl-1">
                  Invest
                </span>
              </button>
            </div>
            <MemberTransactions />
          </div>
        </div>
      </div>
    </div>
  );
}
