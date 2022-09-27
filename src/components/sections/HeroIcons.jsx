import { Icon } from "@iconify/react";
import React from "react";

export default function HeroIcons() {
  return (
    // Hero Icons Container
    <div className="bg-secondary h-screen w-full flex flex-col items-center justify-around space-y-5 pl-10 pr-10 sm:flex-row sm:justify-between sm:pl-0 sm:pr-0 sm:space-y-0  sm:max-h-56">
      {/* Learn */}
      <div className="flex flex-col items-center justify-center">
        <Icon
          className="text-white text-7xl sm:text-6xl"
          icon="fluent:learning-app-20-filled"
        />
        <h2 className="font-sans font-bold text-4xl text-white text-center sm:text-3xl">
          LEARN
        </h2>
        <h3 className="font-sans font-extralight text-xl text-center text-white pl-7 pr-7 sm:text-lg">
          Financial Literacy for Everyone
        </h3>
      </div>
      {/* Invest */}
      <div className="flex flex-col items-center justify-center">
        <Icon
          className="text-white text-7xl sm:text-6xl"
          icon="fa6-solid:money-bill-trend-up"
        />
        <h2 className="font-sans font-bold text-4xl text-white text-center sm:text-3xl">
          INVEST
        </h2>
        <h3 className="font-sans font-extralight text-xl text-center text-white pl-7 pr-7 sm:text-lg">
          Expansion of Every Virtual Assets
        </h3>
      </div>
      {/* Giver */}
      <div className="flex flex-col items-center justify-center">
        <Icon
          className="text-white text-7xl sm:text-6xl"
          icon="fa6-solid:people-group"
        />
        <h2 className="font-sans font-bold text-4xl text-white text-center sm:text-3xl">
          LEARN
        </h2>
        <h3 className="font-sans font-extralight text-xl text-center text-white pl-7 pr-7 sm:text-lg">
          Building the Next Success Story
        </h3>
      </div>
    </div>
  );
}
