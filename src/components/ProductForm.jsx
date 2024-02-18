import React from "react";

const ProductForm = () => {
  return (
    <div>
      <p className="font-bold text-xl">Create New Product</p>
      <div className="flex justify-center">
        <img src="" alt="" style={{ width: "240px", height: "240px" }} />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Images</label>
          <input
            type="file"
            className="border border-gray-300"
            name="image"
            // onChange={handleImageChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label for="default-input" className="font-semibold">
            Product Name
          </label>
          <input
            type="text"
            id="default-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2.5"
          ></input>
        </div>

        <div className="flex flex-col gap-2">
          <label for="message" className="font-semibold">
            Description
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border"
          ></textarea>
        </div>

        <div className="flex flex-col gap-2">
          <label for="default-input" className="font-semibold">
            Size
          </label>
          <input
            type="text"
            id="default-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2.5"
          ></input>
        </div>

        <div className="flex flex-col gap-2">
          <label for="parentCategory" className="font-semibold">
            Purchase Type
          </label>
          <select
            id="parentCategory"
            name="parentCategory"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm "
            // value={subCat.parentCategory}
            // onChange={handleChange}
          >
            <option value="Subcribe">Subcribe</option>
            <option value="Buyone">Buyone</option>
            <option value="Both">Both</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label for="parentCategory" className="font-semibold">
            Choose Category
          </label>
          <select
            id="parentCategory"
            name="parentCategory"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm "
            // value={subCat.parentCategory}
            // onChange={handleChange}
          >
            <option disabled selected>
              ----Select Category----
            </option>
            <option>hello</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label for="parentCategory" className="font-semibold">
            Choose Sub Category
          </label>
          <select
            id="parentCategory"
            name="parentCategory"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm "
            // value={subCat.parentCategory}
            // onChange={handleChange}
          >
            <option disabled selected>
              ----Select Sub Category----
            </option>
            <option>hello</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label for="default-input" className="font-semibold">
            Price
          </label>
          <input
            type="text"
            id="default-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2.5"
          ></input>
        </div>

        <label for="default-input" className="font-semibold">
          Stock
        </label>
        <input
          type="text"
          id="default-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2.5"
        ></input>
      </div>
      <div className="my-6 flex justify-between">
        <button
          type="button"
          style={{ backgroundColor: "#00AB7F", color: "#FFFFFF" }}
          className="text-white px-8 py-1"
          // onClick={()=> navigate('/new-product')}
        >
          Submit
        </button>
        <button
          type="button"
          style={{ backgroundColor: "#047DCE", color: "#FFFFFF" }}
          className="text-white px-8 py-1"
          // onClick={()=> navigate('/new-product')}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ProductForm;
