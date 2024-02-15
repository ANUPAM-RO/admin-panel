import React from 'react'

const Subcategory = () => {
  return (
     <div className="relative overflow-x-auto shadow-md p-4">
      <div className="flex justify-between mb-4">
        <p className="text-lg font-bold">All Sub-Category’s (Total : 06)</p>
        <div className="flex gap-6">
          <button
            type="button"
            style={{ backgroundColor: "#047DCE" }}
            className="text-white px-8 py-1"
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
              Parent Category
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              1
            </th>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">Laptop</td>

            <td className="flex justify-end gap-8 py-4">
              <img src="./Group 8.svg" alt="" className="cursor-pointer" />
              <img src="./Group 60.svg" alt="" className="cursor-pointer" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Subcategory
