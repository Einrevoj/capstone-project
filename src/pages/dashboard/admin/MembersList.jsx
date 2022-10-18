import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as actionMemberList from "../../../redux/actionMemberList";
import { Icon } from "@iconify/react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

export default function MembersList() {
  const [memberList, setMemberList] = useState([]);
  const { getAllMemberList } = bindActionCreators(
    actionMemberList,
    useDispatch()
  );
  const navigate = useNavigate();

  useEffect(() => {
    getAllMemberList().then((response) => {
      setMemberList(response ? response.payload : []);
    });
  }, []);

  const renderMemberList = () => {
    return memberList?.map((memberList) => (
      <div className="flex flex-col m-5">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr className="bg-blue-900">
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-center text-white uppercase "
                    >
                      First Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-center text-white uppercase "
                    >
                      Last Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-center text-white uppercase "
                    >
                      Contact Number
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-center text-white uppercase "
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-center text-white uppercase "
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 border border-blue-900">
                  <tr>
                    <td className="px-6 py-4 text-lg font-medium text-blue-900 text-center whitespace-nowrap border border-blue-900">
                      {memberList.firstName}
                    </td>
                    <td className="px-6 py-4 text-lg  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                      {memberList.lastName}
                    </td>
                    <td className="px-6 py-4 text-lg  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                      {memberList.contactNumber}
                    </td>
                    <td className="px-6 py-4 text-lg font-medium  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                      {memberList.status}
                    </td>
                    <td className="flex-wrap px-6 py-4 text-lg font-medium  text-blue-900  whitespace-nowrap border border-blue-900">
                      <div className="flex items-center justify-center">
                        <Link to="/edit">
                          <Icon icon="fa:eye" className="text-2xl pr-3" />
                        </Link>
                        <Link to="/update">
                          <Icon icon="fa:edit" className="text-2xl pr-3" />
                        </Link>
                        <Link to="/delete">
                          <Icon
                            icon="material-symbols:delete-forever"
                            className="text-3xl pr-3"
                          />
                        </Link>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div id="memberlist">
        <div className="container py-5">
          <div className="relative flex flex-wrap items-center justify-between px-2 py-3">
            <div className="relative">
              <h3 className="font-bold text-blue-900 text-2xl">
                List of Members
              </h3>
            </div>
          </div>
          <div className="row py-4">{renderMemberList()}</div>
        </div>
      </div>
    </>
  );
}
