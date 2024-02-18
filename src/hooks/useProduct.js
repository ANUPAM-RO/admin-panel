import { useEffect, useState } from "react";
import { createApiData, fetchApiData } from "../utiils";
import { useNavigate } from "react-router-dom";

export const useProduct = () => {
  const [productData, setProductData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    size: "",
    type: "",
    category: "",
    subCategory: "",
    stock: "",
    image: null,
  });
  const navigate = useNavigate();
  const loadData = async () => {
    const data = await fetchApiData(
      "https://chetan-project-backend.vercel.app/api/v1/product/admin/products"
    );
    setProductData(data?.products);
  };

  const createNewProduct = async (newProductData) => {
    await createApiData(
      "https://chetan-project-backend.vercel.app/api/v1/product/admin/product/new",
      newProductData
    );
  };

  const loadCatData = async () => {
    const data = await fetchApiData(
      "https://chetan-project-backend.vercel.app/api/v1/catg"
    );
    setCategoryData(data.categories);
    console.log(categoryData);
  };
  const loadSubCatData = async () => {
    const data = await fetchApiData(
      "https://chetan-project-backend.vercel.app/api/v1/catg/subcategory/get"
    );
    setSubCategoryData(data);
    console.log(subCategoryData);
  };

  const handelOpenNewProduct = async () => {
    navigate("/new-product");
  };

  const handleNewCategory = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", product?.name);
    formData.append("description", product?.description);
    formData.append("price", product?.price);
    formData.append("size", product?.size);
    formData.append("type", product?.type);
    formData.append("category", product?.category);
    formData.append("subCategory", product?.subCategory);
    formData.append("Stock", product?.stock);
    formData.append("image", product?.image);
    await createNewProduct(formData);
    loadData();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    setProduct({
      ...product,
      image: file,
    });
  };

  useEffect(() => {
    loadData();
    loadCatData();
    loadSubCatData();
  }, []);
  return {
    productData,
    product,
    setProduct,
    handleChange,
    handleImageChange,
    handleNewCategory,
    categoryData,
    subCategoryData,
    handelOpenNewProduct,
  };
};
