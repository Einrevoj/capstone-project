import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as actionIncome from "../../../redux/actionIncome";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

export default function Report() {
  const [reportIncome, setReportIncome] = useState([]);
  const { getAllReportIncome } = bindActionCreators(
    actionIncome,
    useDispatch()
  );
  const navigate = useNavigate();

  const [openTab, setOpenTab] = React.useState(1);

  useEffect(() => {
    getAllReportIncome().then((response) => {
      setReportIncome(response ? response.payload : []);
    });
  }, []);

  const renderReportIncome = () => {
    const Tabs = ({ color }) => {
      return reportIncome?.map((reportIncome) => (
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
                      <form action="">
                        <h2 className="flex justify-end pr-5 pl-5 w-full h-10 font-sans font-semibold text-blue-900 text-lg md:pl-5">
                          Report Income
                        </h2>

                        {/* Income Input  */}
                        <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
                          <label className="hidden md:flex">Income From</label>
                          <input
                            className="border border-primary rounded-lg md:w-2/3 h-9 placeholder:pl-4 text-right pr-5"
                            type="text"
                            placeholder={reportIncome.incomeTo}
                          />
                        </div>
                        {/* End Input */}
                        {/* Amount Input  */}
                        <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
                          <label className="hidden md:flex">Amount</label>
                          <input
                            className="border border-primary rounded-lg md:w-2/3 h-9 placeholder:pl-4 text-right"
                            type="number"
                            placeholder={reportIncome.amount}
                          />
                        </div>
                        {/* End Input */}
                        {/* Deposit Input  */}
                        <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
                          <label className="hidden md:flex">Deposit To</label>
                          <input
                            className="border border-primary rounded-lg md:w-2/3 h-9 placeholder:pl-4 text-right pr-5"
                            type="text"
                            placeholder={reportIncome.depositTo}
                          />
                        </div>
                        {/* End Input */}
                        {/* Account number Input  */}
                        <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
                          <label className="hidden md:flex">
                            Acount Number
                          </label>
                          <input
                            className="border border-primary rounded-lg md:w-2/3 h-9 placeholder:pl-4 text-right"
                            type="number"
                            placeholder={reportIncome.accountNumber}
                          />
                        </div>
                        {/* End Input */}
                        {/* Account name Input  */}
                        <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
                          <label className="hidden md:flex">Acount Name</label>
                          <input
                            className="border border-primary rounded-lg md:w-2/3 h-9 placeholder:pl-4 text-right pr-5"
                            type="text"
                            placeholder={reportIncome.accountName}
                          />
                        </div>
                        {/* End Input */}
                        {/* Proof Input  */}
                        <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
                          <label className="hidden md:flex">
                            Proof of Transaction
                          </label>
                          <input
                            className="border border-primary rounded-lg md:w-2/3 h-9 placeholder:pl-4 text-right pr-5"
                            type="text"
                            placeholder={reportIncome.proofTrans}
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
                    </div>
                    <div
                      className={openTab === 2 ? "block" : "hidden"}
                      id="link2"
                    >
                      <form action="">
                        <h2 className="flex justify-end pr-5 pl-5 w-full h-10 font-sans font-semibold text-blue-900 text-lg md:pl-5">
                          Report Expense
                        </h2>

                        {/* Income Input  */}
                        <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
                          <label className="hidden md:flex">Expense For</label>
                          <input
                            className="border border-primary rounded-lg md:w-2/3 h-9 placeholder:pl-4 text-right pr-5"
                            type="text"
                            placeholder="Marketing"
                          />
                        </div>
                        {/* End Input */}
                        {/* Amount Input  */}
                        <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
                          <label className="hidden md:flex">Amount</label>
                          <input
                            className="border border-primary rounded-lg md:w-2/3 h-9 placeholder:pl-4 text-right"
                            type="number"
                            placeholder="5,000.00"
                          />
                        </div>
                        {/* End Input */}
                        {/* Deposit Input  */}
                        <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
                          <label className="hidden md:flex">
                            Withdrawn From
                          </label>
                          <input
                            className="border border-primary rounded-lg md:w-2/3 h-9 placeholder:pl-4 text-right pr-5"
                            type="text"
                            placeholder="Unionbank - Expense"
                          />
                        </div>
                        {/* End Input */}
                        {/* Account number Input  */}
                        <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
                          <label className="hidden md:flex">
                            Acount Number
                          </label>
                          <input
                            className="border border-primary rounded-lg md:w-2/3 h-9 placeholder:pl-4 text-right"
                            type="number"
                            placeholder="5235153413"
                          />
                        </div>
                        {/* End Input */}
                        {/* Account name Input  */}
                        <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
                          <label className="hidden md:flex">
                            Upload Receipt
                          </label>
                          <input
                            className="border border-primary rounded-lg md:w-2/3 h-9 placeholder:pl-4 text-right pr-5"
                            type="text"
                            placeholder="laguna meeting 100122341.pdf"
                          />
                        </div>
                        {/* End Input */}
                        {/* Proof Input  */}
                        <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
                          <label className="hidden md:flex">
                            Proof of Transaction
                          </label>
                          <input
                            className="border border-primary rounded-lg md:w-2/3 h-9 placeholder:pl-4 text-right pr-5"
                            type="text"
                            placeholder="UB-MicroBiz 10012232342.jpg"
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
                    </div>
                    <div
                      className={openTab === 3 ? "block" : "hidden"}
                      id="link3"
                    >
                      <form action="">
                        <h2 className="flex justify-end pr-5 pl-5 w-full h-10 font-sans font-semibold text-blue-900 text-lg md:pl-5">
                          Report Investment
                        </h2>

                        {/* Income Input  */}
                        <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
                          <label className="hidden md:flex">Invested To</label>
                          <input
                            className="border border-primary rounded-lg md:w-2/3 h-9 placeholder:pl-4 text-right pr-5"
                            type="text"
                            placeholder="Crypto Asset"
                          />
                        </div>
                        {/* End Input */}
                        {/* Amount Input  */}
                        <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
                          <label className="hidden md:flex">
                            Platform Used
                          </label>
                          <input
                            className="border border-primary rounded-lg md:w-2/3 h-9 placeholder:pl-4 text-right pr-5"
                            type="text"
                            placeholder="Binance Account"
                          />
                        </div>
                        {/* End Input */}
                        {/* Deposit Input  */}
                        <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
                          <label className="hidden md:flex">
                            Withdrawn From
                          </label>
                          <input
                            className="border border-primary rounded-lg md:w-2/3 h-9 placeholder:pl-4 text-right pr-5"
                            type="text"
                            placeholder="Unionbank - Investment"
                          />
                        </div>
                        {/* End Input */}
                        {/* Account number Input  */}
                        <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
                          <label className="hidden md:flex">Amount</label>
                          <input
                            className="border border-primary rounded-lg md:w-2/3 h-9 placeholder:pl-4 text-right"
                            type="number"
                            placeholder="300,000.00"
                          />
                        </div>
                        {/* End Input */}
                        {/* Account name Input  */}
                        <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
                          <label className="hidden md:flex">
                            Transaction Slip
                          </label>
                          <input
                            className="border border-primary rounded-lg md:w-2/3 h-9 placeholder:pl-4 text-right pr-5"
                            type="text"
                            placeholder="Binanceinvest 100122341.jpg"
                          />
                        </div>
                        {/* End Input */}
                        {/* Proof Input  */}
                        <div className="w-full flex flex-col   font-sans font-normal text-lg text-primary mt-4 pl-5 pr-5 md:flex-row md:items-center md:justify-between md:font-medium md:mt-4 ">
                          <label className="hidden md:flex">
                            Proof of Transaction
                          </label>
                          <input
                            className="border border-primary rounded-lg md:w-2/3 h-9 placeholder:pl-4 text-right pr-5"
                            type="text"
                            placeholder="UB-Investing 10012232342.jpg"
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ));
    };
  };

  return (
    <>
      <Tabs color="amber" />;
      <div id="reportincome">
        <div className="container py-5">
          <div className="relative flex flex-wrap items-center justify-between px-2 py-3">
            <div className="relative">
              <h3 className="font-bold text-blue-900 text-2xl">
                List of Members
              </h3>
            </div>
          </div>
          <div className="row py-4">{renderReportIncome()}</div>
        </div>
      </div>
    </>
  );
}
