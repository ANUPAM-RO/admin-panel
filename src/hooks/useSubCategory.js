import { useEffect, useState } from "react";
import {
  createApiData,
  deleteApiData,
  fetchApiData,
  updateApiData,
} from "../utiils";
import { useNavigate, useParams } from "react-router-dom";
import { errorToast, successToast } from "../components/Toast";

export const useSubCategory = () => {
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [subCat, setSubCat] = useState({
    parentCategory: "",
    subCategory: "",
    image: null,
  });

  const { subcatId } = useParams();
  const navigate = useNavigate();

  const loadData = async () => {
    const data = await fetchApiData(
      "https://chetan-project-backend.vercel.app/api/v1/catg/subcategory/get"
    );
    setSubCategoryData(data);
  };

  const loadCatData = async () => {
    const data = await fetchApiData(
      "https://chetan-project-backend.vercel.app/api/v1/catg"
    );
    setCategoryData(data.categories);
  };
  const handleOpenModel = async () => {
    await loadCatData();
    setShowModal(true);
    setSubCat({
      parentCategory: "",
      subCategory: "",
      image: null,
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSubCat({
      ...subCat,
      [name]: value,
    });
  };

  const isSubCategoryUpdate = async (data) => {
    await loadCatData();
    setIsEdit(true);
    navigate(`${data?._id}`);
    setSubCat({
      parentCategory: data?.parentCategory?._id,
      subCategory: data?.subCategory,
      image: data?.image,
    });
    setShowModal(true);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    setSubCat({
      ...subCat,
      image: file,
    });
  };

  const createNewData = async (newSubCategoryData) => {
    console.log(newSubCategoryData);
    await createApiData(
      "https://chetan-project-backend.vercel.app/api/v1/catg/subcategory",
      newSubCategoryData
    );
    successToast("New SubCategory Create  Successfully!!!.");
  };

  const handleNewSubCategory = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("parentCategory", subCat?.parentCategory);
    formData.append("subCategory", subCat?.subCategory);
    formData.append("image", subCat?.image);
    await createNewData(formData);
    setShowModal(false);
    loadData();
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("parentCategory", subCat?.parentCategory);
    formData.append("subCategory", subCat?.subCategory);
    formData.append("image", subCat?.image);
    await updateApiData(
      `https://chetan-project-backend.vercel.app/api/v1/catg/update/sub/${subcatId}`,
      formData
    );
    loadData();
    setIsEdit(false);
    setShowModal(false);
    successToast("New SubCategory Edited  Successfully!!!.");
    navigate("/sub-category");
    setSubCat({
      parentCategory: "",
      subCategory: "",
      image: null,
    });
  };

  const handleDelete = async (id) => {
    await deleteApiData(
      `https://chetan-project-backend.vercel.app/api/v1/catg/delete/sub/category/${id}`
    );
    errorToast("Remove sub category");
    loadData();
  };

  useEffect(() => {
    loadData();
  }, []);
  return {
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
    handleDelete,
  };
};
