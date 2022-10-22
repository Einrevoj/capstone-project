import React from "react";
import Investment from "./Investment";
import ReportExpense from "./ReportExpense";
import ReportIncome from "./ReportIncome";

export default function Report() {
  const [openTab, setOpenTab] = React.useState(1);

  const Tabs = ({ color }) => {
    return (
      <>
        <div className="w-full h-1 bg-primary " />

        <div className="flex items-start">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 m-5 flex-col"
            role="tablist"
          >
            <div className="-mb-px ml-6 last:mr-0 text-center text-2xl font-bold text-blue-900">
              Actions
            </div>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <button className="w-full m-5 inline-block px-6 py-2.5 bg-blue-900 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                <a
                  className={
                    "text-sm font-semibold uppercase px-1 py-1  rounded block leading-normal " +
                    (openTab === 1
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-blue")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Report Income
                </a>
              </button>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <button className="w-full m-5 inline-block px-6 py-2.5 bg-blue-900 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                <a
                  className={
                    "text-sm font-semibold uppercase px-1 py-1 rounded block leading-normal " +
                    (openTab === 2
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-blue")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Report Expense
                </a>
              </button>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <button className="w-full m-5 inline-block px-6 py-2.5 bg-blue-900 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                <a
                  className={
                    "text-sm font-semibold uppercase px-1 py-1 rounded block leading-normal " +
                    (openTab === 3
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-blue")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Report Investment
                </a>
              </button>
            </li>
          </ul>
          <div className="w-4/5 mt-10 ml-5 mr-5">
            <div className="relative flex flex-col min-w-0 break-words bg-blue-100 w-full mb-6 shadow-lg rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    <ReportIncome />
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    <ReportExpense />
                  </div>
                  <div
                    className={openTab === 3 ? "block" : "hidden"}
                    id="link3"
                  >
                    <Investment />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Tabs color="amber" />;
    </>
  );
}
