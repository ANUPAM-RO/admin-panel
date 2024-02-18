import React from "react";
import { useProduct } from "../hooks/useProduct";

const ProductForm = () => {
  const {
    product,
    setProduct,
    handleNewCategory,
    handleChange,
    handleImageChange,
    categoryData,
    subCategoryData,
  } = useProduct();
  console.log(categoryData, subCategoryData);
  return (
    <div>
      <p className="font-bold text-xl">Create New Product</p>
      {/* {product?.image && (
        <div className="flex justify-center">
          <img
            src={product?.image}
            alt=""
            style={{ width: "240px", height: "240px" }}
          />
        </div>
      )} */}

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Images</label>
          <input
            type="file"
            className="border border-gray-300"
            name="image"
            onChange={handleImageChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label for="default-input" className="font-semibold">
            Product Name
          </label>
          <input
            type="text"
            id="default-input"
            name="name"
            value={product?.name}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2.5"
            onChange={handleChange}
          ></input>
        </div>

        <div className="flex flex-col gap-2">
          <label for="message" className="font-semibold">
            Description
          </label>
          <textarea
            id="message"
            name="description"
            value={product?.description}
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border"
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="flex flex-col gap-2">
          <label for="default-input" className="font-semibold">
            Size
          </label>
          <input
            type="text"
            id="default-input"
            name="size"
            value={product?.size}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2.5"
            onChange={handleChange}
          ></input>
        </div>

        <div className="flex flex-col gap-2">
          <label for="parentCategory" className="font-semibold">
            Purchase Type
          </label>
          <select
            id="parentCategory"
            name="type"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm "
            value={product.type}
            onChange={handleChange}
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
            id="category"
            name="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm "
            value={product?.category}
            onChange={handleChange}
          >
            <option disabled selected>
              ----Select Category----
            </option>
            {categoryData?.map((data, i) => (
              <option key={i} value={data?._id}>
                {data?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label for="subCategory" className="font-semibold">
            Choose Sub Category
          </label>
          <select
            id="subCategory"
            name="subCategory"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm "
            value={product.subCategory}
            onChange={handleChange}
          >
            <option disabled selected>
              ----Select Sub Category----
            </option>
            {subCategoryData?.map((data, i) => (
              <option key={i} value={data?._id}>
                {data?.subCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label for="default-input" className="font-semibold">
            Price
          </label>
          <input
            type="text"
            id="default-input"
            name="price"
            value={product?.price}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2.5"
            onChange={handleChange}
          ></input>
        </div>

        <label for="default-input" className="font-semibold">
          Stock
        </label>
        <input
          type="text"
          id="default-input"
          name="stock"
          value={product?.stock}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2.5"
          onChange={handleChange}
        ></input>
      </div>
      <div className="my-6 flex justify-between">
        <button
          type="button"
          style={{ backgroundColor: "#00AB7F", color: "#FFFFFF" }}
          className="text-white px-8 py-1"
          onClick={(e) => {
            handleNewCategory(e);
          }}
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
