import React, { useState } from "react";
import Searchbar from "./Searchbar";
import { useProduct } from "../hooks/useProduct";

const Product = () => {
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const { productData } = useProduct();

  return (
    <div className="relative overflow-x-auto shadow-md p-4">
      <div className="flex justify-between mb-4">
        <p className="text-lg font-bold">All Products (Total : {productData?.length})</p>
        <div className="flex gap-6">
          <button
            type="button"
            style={{ backgroundColor: "#047DCE" }}
            className="text-white px-8 py-1"
          >
            Downlaod Invoices
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

      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2">
            <a
              href="#"
              className={`inline-block p-4  border-b-2  rounded-t-lg active ${
                activeLink === 0 && "text-blue-600 border-blue-600"
              }`}
              aria-current="page"
              onClick={() => handleLinkClick(0)}
            >
              Girorganic
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              className={`inline-block p-4  border-b-2  rounded-t-lg  ${
                activeLink === 1 && "text-blue-600 border-blue-600"
              }`}
              aria-current="page"
              onClick={() => handleLinkClick(1)}
            >
              M. Poonam Natural
            </a>
          </li>
        </ul>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead style={{ color: "#121212" }} className="border-b">
          <tr>
            <th scope="col" className="px-6 py-3">
              S.no
            </th>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              MRP
            </th>
            <th scope="col" className="px-6 py-3">
              Stock
            </th>
            <th scope="col" className="px-6 py-3">
              Credited
            </th>
            <th scope="col" className="px-6 py-3">
              Invoice
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {productData?.map((data, index) => (
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
              <td className="px-4 py-2">
                <img
                  src={data?.images[0]?.img}
                  alt=""
                  style={{ height: "60px", width: "60px" }}
                />
              </td>
              <td className="px-6 py-4 max-w-32">{data?.name}</td>
              <td className="px-6 py-4">{data?.price}</td>
              <td className="px-6 py-4">{data?.Stock}</td>
              <td className="px-6 py-4 max-w-32">{data?.createdAt}</td>
              <td className="px-6 py-4">
                <img
                  src="./Group 48095855.svg"
                  alt=""
                  className="cursor-pointer"
                />
              </td>

              <td className="flex justify-end gap-4 py-4">
                <img src="./Group 60.svg" alt="" className="cursor-pointer" />
                <img src="./Group 76.svg" alt="" className="cursor-pointer" />
                <img src="./Group 8.svg" alt="" className="cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
