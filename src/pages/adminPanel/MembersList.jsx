import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function MembersList() {
  return (
    <div className="flex flex-col m-5">
      <div className="overflow-x-auto">
        <div className="relative flex flex-wrap items-center justify-between px-2 py-3">
          <div className="relative">
            <h3 className="font-bold text-blue-900 text-2xl">
              List of Members
            </h3>
          </div>
        </div>
        <div className="w-full h-1 bg-primary " />

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
                    Michael
                  </td>
                  <td className="px-6 py-4 text-lg  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                    Garcia
                  </td>
                  <td className="px-6 py-4 text-lg  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                    09568722313
                  </td>
                  <td className="px-6 py-4 text-lg font-medium  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                    Active
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
                <tr>
                  <td className="px-6 py-4 text-lg font-medium text-blue-900 text-center whitespace-nowrap border border-blue-900">
                    Michael
                  </td>
                  <td className="px-6 py-4 text-lg  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                    Garcia
                  </td>
                  <td className="px-6 py-4 text-lg  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                    09568722313
                  </td>
                  <td className="px-6 py-4 text-lg font-medium  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                    Active
                  </td>
                  <td className="flex-wrap flex-col px-6 py-4 text-lg font-medium  text-blue-900  whitespace-nowrap border border-blue-900">
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
                <tr>
                  <td className="px-6 py-4 text-lg font-medium text-blue-900 text-center whitespace-nowrap border border-blue-900">
                    Michael
                  </td>
                  <td className="px-6 py-4 text-lg  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                    Garcia
                  </td>
                  <td className="px-6 py-4 text-lg  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                    09568722313
                  </td>
                  <td className="px-6 py-4 text-lg font-medium  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                    Active
                  </td>
                  <td className="flex-wrap flex-col px-6 py-4 text-lg font-medium  text-blue-900  whitespace-nowrap border border-blue-900">
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
                <tr>
                  <td className="px-6 py-4 text-lg font-medium text-blue-900 text-center whitespace-nowrap border border-blue-900">
                    Michael
                  </td>
                  <td className="px-6 py-4 text-lg  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                    Garcia
                  </td>
                  <td className="px-6 py-4 text-lg  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                    09568722313
                  </td>
                  <td className="px-6 py-4 text-lg font-medium  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                    Active
                  </td>
                  <td className="flex-wrap flex-col px-6 py-4 text-lg font-medium  text-blue-900  whitespace-nowrap border border-blue-900">
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
                <tr>
                  <td className="px-6 py-4 text-lg font-medium text-blue-900 text-center whitespace-nowrap border border-blue-900">
                    Michael
                  </td>
                  <td className="px-6 py-4 text-lg  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                    Garcia
                  </td>
                  <td className="px-6 py-4 text-lg  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                    09568722313
                  </td>
                  <td className="px-6 py-4 text-lg font-medium  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                    Active
                  </td>
                  <td className="flex-wrap flex-col px-6 py-4 text-lg font-medium  text-blue-900  whitespace-nowrap border border-blue-900">
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
                <tr>
                  <td className="px-6 py-4 text-lg font-medium text-blue-900 text-center whitespace-nowrap border border-blue-900">
                    Michael
                  </td>
                  <td className="px-6 py-4 text-lg  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                    Garcia
                  </td>
                  <td className="px-6 py-4 text-lg  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                    09568722313
                  </td>
                  <td className="px-6 py-4 text-lg font-medium  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                    Active
                  </td>
                  <td className="flex-wrap flex-col px-6 py-4 text-lg font-medium  text-blue-900  whitespace-nowrap border border-blue-900">
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
                <tr>
                  <td className="px-6 py-4 text-lg font-medium text-blue-900 text-center whitespace-nowrap border border-blue-900">
                    Michael
                  </td>
                  <td className="px-6 py-4 text-lg  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                    Garcia
                  </td>
                  <td className="px-6 py-4 text-lg  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                    09568722313
                  </td>
                  <td className="px-6 py-4 text-lg font-medium  text-blue-900 text-center whitespace-nowrap border border-blue-900">
                    Active
                  </td>
                  <td className="flex-wrap flex-col px-6 py-4 text-lg font-medium  text-blue-900  whitespace-nowrap border border-blue-900">
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
  );
}
