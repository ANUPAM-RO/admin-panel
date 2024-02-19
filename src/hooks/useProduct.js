import { useEffect, useState } from "react";
import {
  createApiData,
  deleteApiData,
  fetchApiData,
  updateApiData,
} from "../utiils";
import { useNavigate, useParams } from "react-router-dom";

export const useProduct = () => {
  const [productData, setProductData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    size: "",
    type: "",
    category: "",
    subCategory: "",
    stock: "",
    images: null,
  });
  const navigate = useNavigate();
  const { prodId } = useParams();

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
  };
  const loadSubCatData = async () => {
    const data = await fetchApiData(
      "https://chetan-project-backend.vercel.app/api/v1/catg/subcategory/get"
    );
    setSubCategoryData(data);
  };

  const handelOpenNewProduct = async () => {
    navigate("/new-product");
  };

  const handleNewProduct = async (event) => {
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
    formData.append("images", product?.images);
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
      images: file,
    });
  };

  const handleIsEdit = async (data) => {
    // const prodData = await fetchApiData(
    //   `https://chetan-project-backend.vercel.app/api/v1/product/${data?._id}`
    // );
    // console.log("data", prodData);
    setProduct({
      ...data,
      stock: data?.Stock,
      subCategory: data?.subCategory?._id,
      images: data?.images[0]?.img,
    });
    setIsEdit(true);
    navigate(`${data?._id}`);
  };

  const handleUpdate = async (event) => {
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
    formData.append("images", product?.images);
    await updateApiData(
      `https://chetan-project-backend.vercel.app/api/v1/product/update/${prodId}`,
      formData
    );
    loadData();
    setIsEdit(false);
    navigate("/product");
    setProduct({
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
  };

  const handleDelete = async (id) => {
    await deleteApiData(
      `https://chetan-project-backend.vercel.app/api/v1/product/delete/${id}`
    );
    alert("Remove Product");
    loadData();
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
    handleNewProduct,
    categoryData,
    subCategoryData,
    handelOpenNewProduct,
    handleUpdate,
    navigate,
    isEdit,
    setIsEdit,
    handleIsEdit,
    handleDelete,
  };
};
