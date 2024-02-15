import React from "react";
import Searchbar from "./Searchbar";
import { useUser } from "../hooks/useUser";

const User = () => {
  const { userData } = useUser();

  return (
    <div className="relative overflow-x-auto shadow-md p-4">
      <div className="flex justify-between mb-4">
        <p className="text-lg font-bold">All User’s (Total : 08)</p>
        <div className="flex gap-6">
          <button
            type="button"
            style={{ backgroundColor: "#047DCE" }}
            className="text-white px-8 py-1"
          >
            Send Notification
          </button>
          <button
            type="button"
            style={{ backgroundColor: "#047DCE" }}
            className="text-white px-8 py-1"
          >
            Create New
          </button>
        </div>
      </div>
      <Searchbar />
      <hr className="mt-6" />

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead style={{ color: "#121212" }} className="border-b">
          <tr>
            <th scope="col" className="px-6 py-3">
              S.no
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Phone Number
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Payment mode
            </th>
            <th scope="col" className="px-6 py-3">
              Created At
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Delivery Boy
            </th>
            <th scope="col" className="px-6 py-3">
              Address Change Request
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {userData?.map((data, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                #{index + 1}
              </th>
              <td className="px-6 py-4 font-semibold text-gray-900">
                {data?.name}
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900">
                {data.phone}
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900">
                {data?.email}
              </td>
              <td
                className="px-6 py-4 font-semibold"
                style={{ color: "#00AB7F" }}
              >
                Prepaid
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900">
                {data?.createdAt}
              </td>
              <td
                className="px-6 py-4 font-semibold"
                style={{ color: "#00AB7F" }}
              >
                Active
              </td>
              <td className="px-6 py-4">
                <button
                  type="button"
                  style={{ backgroundColor: "#047DCE" }}
                  className="text-white px-6 py-1"
                >
                  Assign
                </button>
              </td>
              <td className="px-6 py-4">
                <button
                  type="button"
                  style={{ backgroundColor: "#047DCE" }}
                  className="text-white px-6 py-1"
                >
                  Accept
                </button>
              </td>
              <td className="flex py-4">
                <img
                  src="./Group 48095855.svg"
                  alt=""
                  className="cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
