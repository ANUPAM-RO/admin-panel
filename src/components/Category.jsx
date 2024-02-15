import React from "react";
import { useCategory } from "../hooks/useCategory";
import Modal from "./Modal";

const Category = () => {
  const {
    categoryData,
    handleNewCategory,
    showModal,
    setShowModal,
    catName,
    setCatName,
    setCatImage,
  } = useCategory();

  return (
    <>
      <div className="relative overflow-x-auto shadow-md p-4">
        <div className="flex justify-between mb-4">
          <p className="text-lg font-bold">All Category’s (Total : 06)</p>
          <div className="flex gap-6">
            <button
              type="button"
              style={{ backgroundColor: "#047DCE" }}
              className="text-white px-8 py-1"
              data-modal-target="crud-modal"
              data-modal-toggle="crud-modal"
              onClick={() => setShowModal(true)}
            >
              Add Category
            </button>
          </div>
        </div>
        <hr className="mt-6" />

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
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {categoryData?.map((data, index) => (
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
                <td className="px-6 py-4">
                  <img
                    src={data?.image}
                    alt=""
                    style={{ height: "95px", width: "95px" }}
                  />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900">
                  {data?.name}
                </td>

                <td className="flex justify-end gap-8 py-4">
                  <img src="./Group 8.svg" alt="" className="cursor-pointer" />
                  <img src="./Group 60.svg" alt="" className="cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && (
        <Modal setShowModal={setShowModal} name="Create New Category">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Name</label>
              <input
                type="text"
                className="flex-1"
                value={catName}
                onChange={(e) => setCatName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Image</label>
              <input
                type="file"
                className="flex-1"
                onChange={(e) => setCatImage(e.target.files[0])}
              />
            </div>
            <div className="flex items-center justify-start py-6 rounded-b">
              <button
                className="text-white font-bold uppercase text-sm px-6 py-3  shadow outline-none focus:outline-none mr-1 mb-1"
                type="button"
                style={{ backgroundColor: "#047DCE" }}
                onClick={handleNewCategory}
              >
                Submit
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Category;
