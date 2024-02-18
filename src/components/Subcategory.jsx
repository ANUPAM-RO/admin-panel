import React from "react";
import { useSubCategory } from "../hooks/useSubCategory";
import Modal from "./Modal";

const Subcategory = () => {
  const {
    subCategoryData,
    showModal,
    setShowModal,
    isEdit,
    setIsEdit,
    subCat,
    setSubCat,
    handleChange,
    handleImageChange,
    handleNewSubCategory,
    handleUpdate,
    categoryData,
    handleOpenModel,
    isSubCategoryUpdate,
    handleDelete
  } = useSubCategory();

  console.log(subCat)

  return (
    <>
      <div className="relative overflow-x-auto shadow-md p-4">
        <div className="flex justify-between mb-4">
          <p className="text-lg font-bold">
            All Sub-Category’s (Total : {subCategoryData?.length})
          </p>
          <div className="flex gap-6">
            <button
              type="button"
              style={{ backgroundColor: "#047DCE" }}
              className="text-white px-8 py-1"
              onClick={handleOpenModel}
            >
              Add Sub-Category
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
                Parent Category
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {subCategoryData?.map((data, index) => (
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
                  {data?.subCategory}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900">
                  {data?.parentCategory?.name}
                </td>

                <td className="flex justify-end gap-8 py-4">
                  <img src="./Group 8.svg" alt="" className="cursor-pointer"  onClick={() => handleDelete(data?._id)}/>
                  <img src="./Group 60.svg" alt="" className="cursor-pointer" onClick={() => isSubCategoryUpdate(data)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          name={isEdit ? "Edit New Sub-Category" : "Create New Sub-Category"}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          isCategory={false}
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Name</label>
              <input
                type="text"
                className="flex-1"
                name="subCategory"
                value={subCat.subCategory}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Image</label>
              <input
                type="file"
                className="flex-1"
                name="image"
                onChange={handleImageChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                for="parentCategory"
                className="font-semibold"
              >
                Parent Category
              </label>
              <select
                id="parentCategory"
                name="parentCategory"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm "
                value={subCat.parentCategory}
                onChange={handleChange}
              >
                {categoryData?.map((data , i) => (
                  <option key={i} value={data?._id} >{data?.name}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center justify-start py-6 rounded-b">
              <button
                className="text-white font-bold uppercase text-sm px-6 py-3  shadow outline-none focus:outline-none mr-1 mb-1"
                type="button"
                style={{ backgroundColor: "#047DCE" }}
                onClick={isEdit ? handleUpdate : handleNewSubCategory}
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

export default Subcategory;
